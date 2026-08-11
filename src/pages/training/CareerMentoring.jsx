import { User, CheckCircle, ArrowRight, Award, Compass, Star } from 'lucide-react';
import useSEO from '../../hooks/useSEO';
import FAQAccordion from '../../components/FAQAccordion';
import LeadMagnet from '../../components/LeadMagnet';

export default function CareerMentoring() {
  useSEO({
    title: 'Regulatory Affairs Career Mentoring & Coaching | Reg Excellence',
    description: '1-on-1 regulatory affairs career mentoring & coaching by Dr. Anwar Hussain Mohammed PhD. Personalized guidance for pharmacists, RA associates, and professionals transitioning into regulatory affairs.',
    keywords: 'regulatory affairs career mentoring, regulatory affairs career guidance, pharma career coach, transition to regulatory affairs, pharmacist career advice GCC',
    schema: {
      '@type': 'Service',
      'name': 'Regulatory Affairs Career Mentoring',
      'provider': { '@id': 'https://regexcellence.co.uk/#organization' },
      'description': 'One-on-one career coaching and strategic mentoring for regulatory affairs professionals.'
    }
  });

  const faqs = [
    {
      q: "Can retail or hospital pharmacists transition into regulatory affairs?",
      a: "Yes! Pharmacists possess fundamental pharmacology and pharmaceutics knowledge. Our 1-on-1 career mentoring provides the specific technical submission skills and confidence required to successfully transition into industrial RA roles."
    },
    {
      q: "What is included in a 1-on-1 mentoring session?",
      a: "Mentoring sessions include personalized career mapping, technical skill gap assessment, interview preparation for RA roles, portfolio/CV positioning, and strategic industry networking advice."
    }
  ];

  return (
    <div>
      <section className="page-hero" style={{ background: 'linear-gradient(135deg, var(--primary-dark), #0f2b48)', color: '#fff', padding: '90px 0 70px' }}>
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(197,160,89,0.2)', color: 'var(--gold)', padding: '6px 16px', borderRadius: '20px', fontSize: '14px', fontWeight: 600, marginBottom: '16px' }}>
            <User size={16} /> 1-on-1 Professional Mentorship
          </div>
          <h1 className="section-title" style={{ color: '#fff', fontSize: '38px', marginBottom: '16px' }}>
            Regulatory Affairs Career Mentoring &amp; Coaching
          </h1>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '760px', margin: '0 auto 24px' }}>
            Accelerate your career in pharmaceutical regulatory affairs under the personal guidance of Dr. Anwar Hussain Mohammed PhD.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <a href="/consultation" className="btn-primary">Book a Mentoring Session <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <span className="section-label">Personalized Guidance</span>
              <h2 className="section-title" style={{ fontSize: '30px', textAlign: 'left', margin: '0 0 20px' }}>
                Build a High-Value Career in Regulatory Science
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '20px' }}>
                Navigating a regulatory career requires more than textbook knowledge. It demands strategic career positioning, understanding health authority expectations, and knowing how to showcase submission experience.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Personalized career roadmap & goal setting with Dr. Anwar',
                  'Transition strategy for pharmacists entering industrial RA',
                  'Technical interview preparation & mock technical question practice',
                  'Salary negotiation strategy & promotional positioning',
                  'Ongoing executive advice for Senior RA Managers & Directors'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--primary-dark)' }}>
                    <CheckCircle size={18} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: 'var(--gray-50)', padding: '40px', borderRadius: '16px', border: '1px solid var(--gray-200)' }}>
              <Star size={40} style={{ color: 'var(--gold)', marginBottom: '16px' }} />
              <h3 style={{ fontFamily: 'Playfair Display', fontSize: '24px', color: 'var(--primary-dark)', marginBottom: '12px' }}>
                Why Choose Dr. Anwar as Mentor?
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                With 25+ years leading global & GCC regulatory submissions, Dr. Anwar provides authentic, tested, real-world career wisdom that helps candidates skip years of trial and error.
              </p>
            </div>
          </div>
        </div>
      </section>

      <LeadMagnet />

      <FAQAccordion title="Career Mentoring FAQ" faqs={faqs} />

      <div className="page-cta-strip">
        <div className="container">
          <div className="page-cta-strip-inner">
            <div>
              <h2>Ready to take the next leap in your career?</h2>
              <p>Schedule your private 1-on-1 session with Dr. Anwar Hussain Mohammed PhD.</p>
            </div>
            <a href="/consultation" className="btn-teal">
              Book Mentoring Session <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
