import { FileText, CheckCircle, ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';
import useSEO from '../../hooks/useSEO';
import FAQAccordion from '../../components/FAQAccordion';
import LeadMagnet from '../../components/LeadMagnet';

export default function CVLinkedInReview() {
  useSEO({
    title: 'Regulatory Affairs CV & LinkedIn Profile Review | Reg Excellence',
    description: 'Specialized CV & LinkedIn profile optimization for regulatory affairs professionals and pharmacists by Dr. Anwar Hussain Mohammed PhD. Highlight eCTD, SFDA, and CMC expertise to top recruiters.',
    keywords: 'regulatory affairs CV review, regulatory affairs LinkedIn review, pharmacist CV rewrite, pharma resume optimization, regulatory job interview preparation',
    schema: {
      '@type': 'Service',
      'name': 'Regulatory Affairs CV & LinkedIn Review',
      'provider': { '@id': 'https://regexcellence.co.uk/#organization' },
      'description': 'Targeted resume and LinkedIn profile optimization for pharmaceutical regulatory affairs careers.'
    }
  });

  const faqs = [
    {
      q: "How does a specialized Regulatory Affairs CV differ from a generic resume?",
      a: "A specialized RA CV highlights specific submission types (eCTD/NeeS), health authority interactions (SFDA, MOHAP, MHRA), Module 1-5 compilation experience, therapeutic modalities (biologics, oncology, small molecules), and regulatory software tools."
    },
    {
      q: "What is the turnaround time for a CV and LinkedIn review?",
      a: "Standard review and rewrite delivery takes 3 to 5 business days, including a 1-on-1 feedback session with actionable career advice."
    }
  ];

  return (
    <div>
      <section className="page-hero" style={{ background: 'linear-gradient(135deg, var(--primary-dark), #152e4d)', color: '#fff', padding: '90px 0 70px' }}>
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(197,160,89,0.2)', color: 'var(--gold)', padding: '6px 16px', borderRadius: '20px', fontSize: '14px', fontWeight: 600, marginBottom: '16px' }}>
            <FileText size={16} /> Executive Resume &amp; Profile Optimization
          </div>
          <h1 className="section-title" style={{ color: '#fff', fontSize: '38px', marginBottom: '16px' }}>
            Regulatory Affairs CV &amp; LinkedIn Profile Review
          </h1>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '760px', margin: '0 auto 24px' }}>
            Position yourself for high-paying regulatory affairs opportunities with an ATS-optimized, expert-curated CV and compelling LinkedIn profile.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <a href="/consultation" className="btn-primary">Request Profile Optimization <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <span className="section-label">Stand Out to Recruiters</span>
              <h2 className="section-title" style={{ fontSize: '30px', textAlign: 'left', margin: '0 0 20px' }}>
                Showcase Your Regulatory Expertise with Authority
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '20px' }}>
                Pharma recruiters search for specific keywords like SFDA, eCTD, Module 3, GMP compliance, and variation filings. We optimize your documents to ensure maximum visibility and response rates.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Complete ATS-friendly CV overhaul formatted for global pharma recruiters',
                  'Strategic integration of submission keywords (eCTD, SFDA, MOHAP, MHRA)',
                  'LinkedIn headline, summary, and experience section rewriting',
                  'Quantifiable accomplishment structuring (e.g. 15+ eCTD approvals)',
                  'Direct feedback call with Dr. Anwar Hussain Mohammed PhD'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--primary-dark)' }}>
                    <CheckCircle size={18} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: 'var(--gray-50)', padding: '40px', borderRadius: '16px', border: '1px solid var(--gray-200)' }}>
              <ShieldCheck size={40} style={{ color: 'var(--gold)', marginBottom: '16px' }} />
              <h3 style={{ fontFamily: 'Playfair Display', fontSize: '24px', color: 'var(--primary-dark)', marginBottom: '12px' }}>
                What You Receive
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '15px', color: 'var(--text-secondary)' }}>
                <li>✓ Tailored 2-Page Executive Regulatory CV (Word + PDF)</li>
                <li>✓ LinkedIn Profile Headline & About Section Optimization</li>
                <li>✓ Customized Cover Letter Template for RA Roles</li>
                <li>✓ 30-Minute Career Strategy Review Call</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <LeadMagnet />

      <FAQAccordion title="CV & LinkedIn Review FAQ" faqs={faqs} />

      <div className="page-cta-strip">
        <div className="container">
          <div className="page-cta-strip-inner">
            <div>
              <h2>Transform your professional profile today</h2>
              <p>Book your CV & LinkedIn review session with our expert team.</p>
            </div>
            <a href="/consultation" className="btn-teal">
              Get Started Now <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
