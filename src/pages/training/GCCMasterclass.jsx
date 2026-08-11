import { GraduationCap, CheckCircle, ArrowRight, BookOpen, Clock, Users } from 'lucide-react';
import useSEO from '../../hooks/useSEO';
import FAQAccordion from '../../components/FAQAccordion';
import LeadMagnet from '../../components/LeadMagnet';

export default function GCCMasterclass() {
  useSEO({
    title: 'GCC Regulatory Affairs Masterclass & Course | Reg Excellence',
    description: 'Comprehensive GCC Regulatory Affairs Masterclass led by Dr. Anwar Hussain Mohammed PhD. Master SFDA, MOHAP, eCTD Module 1-5 submissions, and health authority approval pathways.',
    keywords: 'GCC regulatory affairs training, GCC regulatory affairs course, SFDA regulatory course, regulatory affairs masterclass, pharma regulatory training UK',
    schema: {
      '@type': 'Course',
      'name': 'GCC Regulatory Affairs Masterclass',
      'description': 'Advanced professional training course covering GCC regulatory frameworks, eCTD submissions, and market access.',
      'provider': { '@id': 'https://regexcellence.co.uk/#organization' }
    }
  });

  const faqs = [
    {
      q: "Who is the GCC Regulatory Affairs Masterclass designed for?",
      a: "This masterclass is tailored for pharmacists, regulatory affairs associates, medical managers, R&D specialists, and commercial pharma professionals looking to build or advance a career in GCC regulatory affairs."
    },
    {
      q: "Do participants receive a certificate upon completion?",
      a: "Yes, all participants receive an official Certificate of Completion issued by Reg Excellence, validating their practical knowledge in GCC health authority submissions."
    }
  ];

  return (
    <div>
      <section className="page-hero" style={{ background: 'linear-gradient(135deg, var(--primary-dark), #1e293b)', color: '#fff', padding: '90px 0 70px' }}>
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(197,160,89,0.2)', color: 'var(--gold)', padding: '6px 16px', borderRadius: '20px', fontSize: '14px', fontWeight: 600, marginBottom: '16px' }}>
            <GraduationCap size={16} /> Professional Certification
          </div>
          <h1 className="section-title" style={{ color: '#fff', fontSize: '38px', marginBottom: '16px' }}>
            GCC Regulatory Affairs Masterclass
          </h1>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '760px', margin: '0 auto 24px' }}>
            Master the regulatory frameworks, eCTD submission processes, and product registration requirements of Saudi Arabia (SFDA), UAE (MOHAP), and Gulf health authorities.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <a href="/consultation" className="btn-primary">Enroll in Masterclass <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <span className="section-label">Curriculum Highlights</span>
              <h2 className="section-title" style={{ fontSize: '30px', textAlign: 'left', margin: '0 0 20px' }}>
                Practical, Real-World Submission Experience
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '20px' }}>
                Delivered by industry expert <strong>Dr. Anwar Hussain Mohammed PhD</strong>, this intensive programme bridges the gap between academic theory and actual health authority dossier filings.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Module 1: GCC Health Authority Landscape (SFDA, MOHAP, MOH, NHRA)',
                  'Module 2: eCTD Dossier Structure & Regional Specifications',
                  'Module 3: CMC & Stability Requirements for Climate Zone IVb',
                  'Module 4: Post-Approval Variations, Renewals & Labeling Updates',
                  'Module 5: Real-World Case Studies & Deficiency Letter Response Strategy'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--primary-dark)' }}>
                    <CheckCircle size={18} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: 'var(--gray-50)', padding: '40px', borderRadius: '16px', border: '1px solid var(--gray-200)' }}>
              <BookOpen size={40} style={{ color: 'var(--gold)', marginBottom: '16px' }} />
              <h3 style={{ fontFamily: 'Playfair Display', fontSize: '24px', color: 'var(--primary-dark)', marginBottom: '12px' }}>
                Course Details
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '15px', color: 'var(--text-secondary)' }}>
                <li><strong>Format:</strong> Interactive Live Online Workshops or In-Person</li>
                <li><strong>Duration:</strong> 4-Week Intensive / Weekend Options</li>
                <li><strong>Trainer:</strong> Dr. Anwar Hussain Mohammed, PhD</li>
                <li><strong>Includes:</strong> Templates, Checklists & Certificate of Completion</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet Capture Component */}
      <LeadMagnet />

      <FAQAccordion title="Masterclass FAQ" faqs={faqs} />

      <div className="page-cta-strip">
        <div className="container">
          <div className="page-cta-strip-inner">
            <div>
              <h2>Advance your regulatory affairs career today</h2>
              <p>Contact us to learn about upcoming cohort start dates and enrollment options.</p>
            </div>
            <a href="/consultation" className="btn-teal">
              Inquire About Enrollment <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
