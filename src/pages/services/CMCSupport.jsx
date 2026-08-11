import { Microscope, Shield, CheckCircle, ArrowRight, FlaskConical, Award } from 'lucide-react';
import useSEO from '../../hooks/useSEO';
import FAQAccordion from '../../components/FAQAccordion';

export default function CMCSupport() {
  useSEO({
    title: 'CMC & Quality Regulatory Support | Biologics, Vaccines & Generics',
    description: 'Expert Chemistry, Manufacturing & Controls (CMC) regulatory consulting by Dr. Anwar Hussain Mohammed PhD. Support for Module 3 authoring, stability data, analytical validation, biologics, and GMP compliance.',
    keywords: 'CMC regulatory support GCC, Module 3 CMC writing, biologics CMC consulting, vaccine CMC regulatory, GMP compliance consulting pharma, analytical method validation',
    schema: {
      '@type': 'Service',
      'name': 'CMC & Quality Regulatory Consulting',
      'provider': { '@id': 'https://regexcellence.co.uk/#organization' },
      'description': 'Chemistry, Manufacturing, and Controls (CMC) regulatory consulting for small molecules, biologics, vaccines, and advanced therapies.'
    }
  });

  const faqs = [
    {
      q: "What CMC specializations does Dr. Anwar Hussain Mohammed PhD have?",
      a: "Dr. Anwar Hussain Mohammed PhD brings 25+ years of hands-on expertise across small molecules, biologics, biosimilars, vaccines, oncology products, and rare disease therapeutics."
    },
    {
      q: "How do you address Zone IVb stability requirements for GCC countries?",
      a: "GCC health authorities require real-time and accelerated stability testing conducted strictly under Zone IVb conditions (30°C / 75% RH). We audit stability protocols and help establish justification or supplementary testing where needed."
    }
  ];

  return (
    <div>
      <section className="page-hero" style={{ background: 'linear-gradient(135deg, var(--primary-dark), #064e3b)', color: '#fff', padding: '90px 0 70px' }}>
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(197,160,89,0.2)', color: 'var(--gold)', padding: '6px 16px', borderRadius: '20px', fontSize: '14px', fontWeight: 600, marginBottom: '16px' }}>
            <FlaskConical size={16} /> Chemistry, Manufacturing &amp; Controls
          </div>
          <h1 className="section-title" style={{ color: '#fff', fontSize: '38px', marginBottom: '16px' }}>
            CMC &amp; Quality Regulatory Support Services
          </h1>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '760px', margin: '0 auto 24px' }}>
            Specialized Module 3 technical authoring, analytical validation reviews, stability data compliance, and GMP inspection readiness.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <a href="/consultation" className="btn-primary">Consult a CMC Expert <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <span className="section-label">Technical Mastery</span>
              <h2 className="section-title" style={{ fontSize: '30px', textAlign: 'left', margin: '0 0 20px' }}>
                Scientific Rigor for Complex Molecules &amp; Biologics
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '20px' }}>
                Module 3 CMC failures account for over 50% of health authority deficiency queries. We ensure your Drug Substance (DS) and Drug Product (DP) documentation withstands strict regulatory evaluation.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Module 3 compilation for Small Molecules, Biologics & Vaccines',
                  'Analytical method validation & comparability protocols (ICH Q2/Q5E)',
                  'Zone IVb (30°C/75% RH) stability program review & shelf-life extrapolation',
                  'GMP site inspection preparation & CAPA response management',
                  'Post-marketing CMC changes & comparability assessments'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--primary-dark)' }}>
                    <CheckCircle size={18} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: 'var(--gray-50)', padding: '40px', borderRadius: '16px', border: '1px solid var(--gray-200)' }}>
              <Microscope size={40} style={{ color: 'var(--gold)', marginBottom: '16px' }} />
              <h3 style={{ fontFamily: 'Playfair Display', fontSize: '24px', color: 'var(--primary-dark)', marginBottom: '12px' }}>
                Therapeutic &amp; Modality Focus
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '15px', color: 'var(--text-secondary)' }}>
                <li>✓ Biologics & Monoclonal Antibodies (mAbs)</li>
                <li>✓ Vaccines & Immunological Products</li>
                <li>✓ Oncology & Targeted Small Molecules</li>
                <li>✓ Rare Disease & Orphan Therapeutics</li>
                <li>✓ Complex Generics & Biosimilars</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion title="CMC Support FAQ" faqs={faqs} />

      <div className="page-cta-strip">
        <div className="container">
          <div className="page-cta-strip-inner">
            <div>
              <h2>Resolve your Module 3 CMC queries with expert guidance</h2>
              <p>Schedule a technical discussion with Dr. Anwar Hussain Mohammed PhD.</p>
            </div>
            <a href="/consultation" className="btn-teal">
              Book CMC Consultation <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
