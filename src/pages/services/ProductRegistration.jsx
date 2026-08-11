import { FileCheck, Shield, CheckCircle, ArrowRight, Building2, Globe } from 'lucide-react';
import useSEO from '../../hooks/useSEO';
import FAQAccordion from '../../components/FAQAccordion';

export default function ProductRegistration() {
  useSEO({
    title: 'GCC Pharmaceutical Product Registration Consultant | SFDA & MOHAP',
    description: 'Expert pharmaceutical product registration services in Saudi Arabia (SFDA), UAE (MOHAP), Kuwait, Qatar, Bahrain, and Oman. End-to-end Marketing Authorization Holder (MAH) support by Dr. Anwar Hussain Mohammed PhD.',
    keywords: 'product registration consultant GCC, SFDA drug registration, UAE pharmaceutical registration, marketing authorization GCC, GCC pharma product licensing',
    schema: {
      '@type': 'Service',
      'name': 'Pharmaceutical Product Registration',
      'provider': { '@id': 'https://regexcellence.co.uk/#organization' },
      'description': 'Full marketing authorization and pharmaceutical product registration support in GCC and international markets.'
    }
  });

  const faqs = [
    {
      q: "What product categories do you handle for GCC registration?",
      a: "We manage registrations for prescription pharmaceuticals (NCEs, generic medicines), biologics, biosimilars, vaccines, medical devices, food supplements, and herbal products across SFDA, MOHAP, and GCC health ministries."
    },
    {
      q: "How long does SFDA drug registration take?",
      a: "Standard SFDA pharmaceutical evaluation takes 9–12 months, whereas fast-track or priority review procedures (for orphan drugs or critical therapeutics) can be completed in 4–6 months."
    }
  ];

  return (
    <div>
      <section className="page-hero" style={{ background: 'linear-gradient(135deg, var(--primary-dark), #152e4d)', color: '#fff', padding: '90px 0 70px' }}>
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(197,160,89,0.2)', color: 'var(--gold)', padding: '6px 16px', borderRadius: '20px', fontSize: '14px', fontWeight: 600, marginBottom: '16px' }}>
            <FileCheck size={16} /> Marketing Authorization & Licensing
          </div>
          <h1 className="section-title" style={{ color: '#fff', fontSize: '38px', marginBottom: '16px' }}>
            Pharmaceutical Product Registration Services
          </h1>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '760px', margin: '0 auto 24px' }}>
            End-to-end management of pharmaceutical product approvals, Marketing Authorization Holder (MAH) transfers, site registrations, and renewal filings.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <a href="/consultation" className="btn-primary">Register Your Product <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <span className="section-label">End-to-End Execution</span>
              <h2 className="section-title" style={{ fontSize: '30px', textAlign: 'left', margin: '0 0 20px' }}>
                Seamless Product Approvals Across Middle East &amp; Global Markets
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '20px' }}>
                Securing marketing authorization requires precise compilation of legal documentation, CPP (Certificate of Pharmaceutical Product), GMP certificates, Module 3 CMC documentation, artwork approval, and local distributor alignment.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Manufacturing site registration & GMP clearance with SFDA & MOHAP',
                  'New Drug Application (NDA) & Generic Drug Application (ANDA) management',
                  'Artwork, mock-up, PIL & SmPC local adaptation & compliance',
                  'Pricing dossier filing & health authority negotiation support',
                  'License renewal, transfer of ownership & variation filings'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--primary-dark)' }}>
                    <CheckCircle size={18} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: 'var(--gray-50)', padding: '40px', borderRadius: '16px', border: '1px solid var(--gray-200)' }}>
              <Building2 size={40} style={{ color: 'var(--gold)', marginBottom: '16px' }} />
              <h3 style={{ fontFamily: 'Playfair Display', fontSize: '24px', color: 'var(--primary-dark)', marginBottom: '12px' }}>
                Registration Lifecycle Coverage
              </h3>
              <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                We manage the complete lifecycle from pre-filing submission checks to post-marketing compliance, annual reporting, and health authority query responses.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion title="Product Registration FAQ" faqs={faqs} />

      <div className="page-cta-strip">
        <div className="container">
          <div className="page-cta-strip-inner">
            <div>
              <h2>Ready to submit your product registration?</h2>
              <p>Speak directly with Dr. Anwar Hussain Mohammed PhD today.</p>
            </div>
            <a href="/consultation" className="btn-teal">
              Schedule Consultation <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
