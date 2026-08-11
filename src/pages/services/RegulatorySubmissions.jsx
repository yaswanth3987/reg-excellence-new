import { Globe, CheckCircle, ArrowRight, Shield, Database, Send } from 'lucide-react';
import useSEO from '../../hooks/useSEO';
import FAQAccordion from '../../components/FAQAccordion';

export default function RegulatorySubmissions() {
  useSEO({
    title: 'GCC & Global Regulatory Submissions | eCTD, Variations & Renewals',
    description: 'Expert eCTD regulatory submission management for SFDA, MOHAP, MHRA, EMA, and FDA. Complete variation management, renewals, and lifecycle maintenance by Dr. Anwar Hussain Mohammed PhD.',
    keywords: 'eCTD regulatory submissions GCC, SFDA eCTD publishing, pharma submission management, post-approval variations eCTD, drug registration renewal GCC',
    schema: {
      '@type': 'Service',
      'name': 'Regulatory Submissions & eCTD Management',
      'provider': { '@id': 'https://regexcellence.co.uk/#organization' },
      'description': 'End-to-end eCTD dossier compilation, submission publishing, and post-approval lifecycle management.'
    }
  });

  const faqs = [
    {
      q: "Which eCTD standards and regional specifications do you support?",
      a: "We support GCC eCTD Module 1 v1.5 specifications, EU eCTD v3.2.2, US FDA eCTD, and regional NeeS/paper submission conversions where mandated."
    },
    {
      q: "Do you handle post-approval variations and regulatory commitments?",
      a: "Yes, we handle Type IA, Type IB, and Type II variations (major/minor CMC or clinical changes), label updates, and annual regulatory compliance renewals."
    }
  ];

  return (
    <div>
      <section className="page-hero" style={{ background: 'linear-gradient(135deg, var(--primary-dark), #0f172a)', color: '#fff', padding: '90px 0 70px' }}>
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(197,160,89,0.2)', color: 'var(--gold)', padding: '6px 16px', borderRadius: '20px', fontSize: '14px', fontWeight: 600, marginBottom: '16px' }}>
            <Send size={16} /> Technical Submissions &amp; eCTD
          </div>
          <h1 className="section-title" style={{ color: '#fff', fontSize: '38px', marginBottom: '16px' }}>
            eCTD &amp; Global Regulatory Submissions Management
          </h1>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '760px', margin: '0 auto 24px' }}>
            Compliant eCTD dossier building, submission publishing, health authority gateway submissions, and response management for SFDA, MOHAP, MHRA, and EMA.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <a href="/consultation" className="btn-primary">Start Your eCTD Submission <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <span className="section-label">Technical Publishing</span>
              <h2 className="section-title" style={{ fontSize: '30px', textAlign: 'left', margin: '0 0 20px' }}>
                Zero-Defect Submissions &amp; Lifecycle Management
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '20px' }}>
                A minor XML validation error or missing hyperlinking can delay your submission by months. Our eCTD specialists ensure 100% technical and regulatory validation prior to gateway upload.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'GCC eCTD Module 1 regional specification formatting',
                  'eCTD compilation, validation, hyperlinking & bookmarking',
                  'Health authority query response (deficiency letter mitigation)',
                  'Post-approval variation filing (Type IA, IB, II / Major & Minor)',
                  'License renewal compilation & ongoing lifecycle maintenance'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--primary-dark)' }}>
                    <CheckCircle size={18} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: 'var(--gray-50)', padding: '40px', borderRadius: '16px', border: '1px solid var(--gray-200)' }}>
              <Database size={40} style={{ color: 'var(--gold)', marginBottom: '16px' }} />
              <h3 style={{ fontFamily: 'Playfair Display', fontSize: '24px', color: 'var(--primary-dark)', marginBottom: '12px' }}>
                Supported Electronic Submission Formats
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '15px', color: 'var(--text-secondary)' }}>
                <li>✓ GCC eCTD Specification v1.5 (Saudi Arabia & UAE)</li>
                <li>✓ EU eCTD & Non-eCTD Electronic Submissions (NeeS)</li>
                <li>✓ US FDA eCTD Specifications</li>
                <li>✓ Local Portal Uploads (Saudi SFDA Ghad, UAE MOHAP Portal)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion title="Submissions FAQ" faqs={faqs} />

      <div className="page-cta-strip">
        <div className="container">
          <div className="page-cta-strip-inner">
            <div>
              <h2>Need expert eCTD publishing or variation management?</h2>
              <p>Contact our technical submission team today.</p>
            </div>
            <a href="/consultation" className="btn-teal">
              Book Submission Review <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
