import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // 1. Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*'); // Or restrict to your frontend domain in production
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS method for CORS preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // 2. Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { 
      firstName, 
      lastName, 
      email, 
      company, 
      message 
    } = req.body;

    // 3. Basic server-side validation
    if (!firstName || !lastName || !email || !company || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const clientEmail = process.env.CLIENT_EMAIL || 'admin@regexcellence.co.uk';
    const currentTimestamp = new Date().toLocaleString();

    // 4. Send email to the client
    const clientEmailData = await resend.emails.send({
      from: 'Reg Excellence Website <onboarding@resend.dev>', // Replace with a verified domain for production e.g. 'noreply@regexcellence.com'
      to: clientEmail,
      subject: 'New Consultation Enquiry – Reg Excellence Website',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
          <h2 style="color: #0b1120; border-bottom: 2px solid #c9a227; padding-bottom: 10px;">New Consultation Request</h2>
          
          <p><strong>Name:</strong><br/> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong><br/> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Company:</strong><br/> ${company}</p>
          
          <p><strong>Project Details:</strong></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #c9a227; margin-bottom: 20px;">
            ${message.replace(/\\n/g, '<br/>')}
          </div>
          
          <p style="font-size: 12px; color: #666; margin-top: 30px; border-top: 1px solid #eaeaea; padding-top: 10px;">
            <strong>Submitted From:</strong> Reg Excellence Website<br/>
            <strong>Date & Time:</strong> ${currentTimestamp}
          </p>
        </div>
      `
    });

    // 5. Send acknowledgment email to the visitor
    const visitorEmailData = await resend.emails.send({
      from: 'Reg Excellence <onboarding@resend.dev>', // Replace with verified domain
      to: email,
      subject: 'Thank You for Contacting Reg Excellence',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
          <p>Dear ${firstName},</p>
          
          <p>Thank you for contacting Reg Excellence.</p>
          
          <p>We have successfully received your consultation enquiry.</p>
          
          <p>One of our regulatory specialists will review your request and respond within one business day.</p>
          
          <p>We appreciate your interest in Reg Excellence.</p>
          
          <p>Kind Regards,<br/><br/>
          <strong>Reg Excellence</strong></p>
        </div>
      `
    });

    return res.status(200).json({ 
      success: true, 
      message: 'Enquiry submitted successfully',
      clientEmailId: clientEmailData.id,
      visitorEmailId: visitorEmailData.id
    });
    
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
