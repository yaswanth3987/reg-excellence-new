import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2, Lock, ShieldCheck, Target, Clock, User, Mail, Building2, PenLine } from 'lucide-react';

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName.trim()) errors.firstName = 'First name is required';
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
    if (!formData.company.trim()) errors.company = 'Company is required';
    
    if (!formData.message.trim()) {
      errors.message = 'Project details are required';
    } else if (formData.message.trim().length < 20) {
      errors.message = 'Message must be at least 20 characters';
    } else if (formData.message.length > 1000) {
      errors.message = 'Message must not exceed 1000 characters';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear validation error when user types
    if (validationErrors[name]) {
      setValidationErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    
    if (!validateForm()) return;

    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit enquiry');
      }

      setStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        message: ''
      });
      setValidationErrors({});
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage('Something went wrong while submitting your enquiry. Please try again or email us directly.');
    }
  };

  return (
    <div className="consultation-section" id="contact">
      <div className="consultation-container">
        
        <div className="consultation-header">
          <span className="consultation-label">GET IN TOUCH</span>
          <h1 className="consultation-title">Speak to a Regulatory<br/>Affairs Consultant</h1>
          <p className="consultation-subtitle" style={{ margin: '0 auto' }}>
            Planning a submission, preparing a dossier, or managing<br/>post-approval regulatory changes?
            <br/><br/>
            Complete the form below and a Reg Excellence expert<br/>will review your project and get in touch.
          </p>
        </div>

        <div className="consultation-form-wrapper">
          {status === 'success' ? (
            <div className="consultation-success">
              <div className="success-icon-wrapper" style={{ display: 'inline-flex', marginBottom: '24px' }}>
                <CheckCircle color="#C8382A" size={80} />
              </div>
              <h3>Thank you! Your consultation request has been submitted successfully.</h3>
              <p>One of our regulatory experts will contact you shortly.</p>
              <button className="btn-primary" onClick={() => setStatus('idle')} style={{ marginTop: '16px' }}>
                Submit Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="consultation-form" noValidate>
              
              {status === 'error' && (
                <div className="consultation-error-message">
                  <AlertCircle size={20} color="#C8382A" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="form-group-with-icon">
                <label htmlFor="firstName">Full Name <span className="req">*</span></label>
                <div className="input-icon-wrapper">
                  <User size={18} className="input-icon" />
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={validationErrors.firstName ? 'error' : ''}
                    disabled={status === 'submitting'}
                    placeholder="Enter your first name"
                  />
                </div>
                {validationErrors.firstName && <span className="error-text" style={{color: '#C8382A', fontSize: '12px', marginTop: '4px'}}>{validationErrors.firstName}</span>}
              </div>

              <div className="form-group-with-icon">
                <label htmlFor="lastName">Last Name <span className="req">*</span></label>
                <div className="input-icon-wrapper">
                  <User size={18} className="input-icon" />
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={validationErrors.lastName ? 'error' : ''}
                    disabled={status === 'submitting'}
                    placeholder="Enter your last name"
                  />
                </div>
                {validationErrors.lastName && <span className="error-text" style={{color: '#C8382A', fontSize: '12px', marginTop: '4px'}}>{validationErrors.lastName}</span>}
              </div>

              <div className="form-group-with-icon">
                <label htmlFor="email">Email Address <span className="req">*</span></label>
                <div className="input-icon-wrapper">
                  <Mail size={18} className="input-icon" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={validationErrors.email ? 'error' : ''}
                    disabled={status === 'submitting'}
                    placeholder="Enter your email address"
                  />
                </div>
                {validationErrors.email && <span className="error-text" style={{color: '#C8382A', fontSize: '12px', marginTop: '4px'}}>{validationErrors.email}</span>}
              </div>

              <div className="form-group-with-icon">
                <label htmlFor="company">Company <span className="req">*</span></label>
                <div className="input-icon-wrapper">
                  <Building2 size={18} className="input-icon" />
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={validationErrors.company ? 'error' : ''}
                    disabled={status === 'submitting'}
                    placeholder="Enter your company name"
                  />
                </div>
                {validationErrors.company && <span className="error-text" style={{color: '#C8382A', fontSize: '12px', marginTop: '4px'}}>{validationErrors.company}</span>}
              </div>

              <div className="form-group-with-icon">
                <label htmlFor="message">Tell us about your project <span className="req">*</span></label>
                <div className="input-icon-wrapper textarea-wrapper">
                  <PenLine size={18} className="input-icon" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={validationErrors.message ? 'error' : ''}
                    disabled={status === 'submitting'}
                    placeholder="Please provide details about your project, requirements, challenges, or any specific areas you need support with..."
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px', fontSize: '12px' }}>
                  {validationErrors.message ? (
                    <span className="error-text" style={{color: '#C8382A'}}>{validationErrors.message}</span>
                  ) : (
                    <span></span>
                  )}
                </div>
              </div>

              <button 
                type="submit" 
                className="btn-primary"
                style={{ marginTop: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', padding: '14px', fontSize: '16px', fontWeight: 'bold' }}
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="spinner" size={20} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Book your consultation
                  </>
                )}
              </button>

              <div className="consultation-secure-note" style={{ marginTop: '16px', display: 'flex', justifyContent: 'center', gap: '8px', color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>
                <Lock size={16} />
                <span>Your information is secure and confidential.</span>
              </div>
            </form>
          )}

          <div className="consultation-features" style={{ display: 'flex', gap: '24px', marginTop: '32px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="consultation-feature" style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', flex: 1 }}>
              <div style={{ color: '#C8382A' }}><ShieldCheck size={28} /></div>
              <div>
                <h4 style={{ fontFamily: 'Inter', fontSize: '14px', fontWeight: 'bold', margin: '0 0 4px', color: '#fff' }}>Expert Guidance</h4>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', lineHeight: 1.5, margin: 0 }}>25+ years of regulatory experience</p>
              </div>
            </div>
            <div className="consultation-feature" style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', flex: 1 }}>
              <div style={{ color: '#C8382A' }}><Target size={28} /></div>
              <div>
                <h4 style={{ fontFamily: 'Inter', fontSize: '14px', fontWeight: 'bold', margin: '0 0 4px', color: '#fff' }}>Tailored Solutions</h4>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', lineHeight: 1.5, margin: 0 }}>Customized strategies for your success</p>
              </div>
            </div>
            <div className="consultation-feature" style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', flex: 1 }}>
              <div style={{ color: '#C8382A' }}><Clock size={28} /></div>
              <div>
                <h4 style={{ fontFamily: 'Inter', fontSize: '14px', fontWeight: 'bold', margin: '0 0 4px', color: '#fff' }}>Timely Response</h4>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', lineHeight: 1.5, margin: 0 }}>We typically respond within 24 hours</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
