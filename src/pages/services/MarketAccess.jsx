import { TrendingUp, Award, CheckCircle, ArrowRight, DollarSign, Building } from 'lucide-react';
import useSEO from '../../hooks/useSEO';
import FAQAccordion from '../../components/FAQAccordion';

export default function MarketAccess() {
  useSEO({
    title: 'Pharmaceutical Market Access & Pricing Strategy GCC | Saudi Arabia & UAE',
    description: 'Expert pharmaceutical market access, pricing dossier filings, HTA value dossiers, and commercial entry strategy across Saudi Arabia, UAE, and GCC markets by Dr. Anwar Hussain Mohammed PhD.',
    keywords: 'pharmaceutical market access GCC, Saudi pricing dossier, SFDA pricing committee, UAE pricing guidelines, HTA value dossier GCC, pharma commercial market entry',
    schema: {
      '@type': 'Service',
      'name': 'Pharmaceutical Market Access & Pricing Strategy',
      'provider': { '@id': 'https://regexcellence.co.uk/#organization' },
      'description': 'Market access, pricing negotiations, and value dossier compilation for pharmaceutical products in GCC markets.'
    }
  });

  const faqs = [
    {
      q: "How does pharmaceutical price referencing work in Saudi Arabia and the UAE?",
      a: "Saudi Arabia (SFDA) and UAE (MOHAP) employ External Price Referencing (EPR) mechanisms against reference countries in Europe and the MENA region. We assist in preparing pricing justification dossiers, international price certificates (IPCs), and cost-effectiveness arguments."
    },
    {
      q: "What is an HTA Value Dossier?",
      a: "A Health Technology Assessment (HTA) Value Dossier demonstrates the clinical superiority, economic value, and budget impact of a innovative therapeutic, enabling optimal reimbursement placement on hospital formularies and national insurance lists."
    }
  ];

  return (
    <div>
      <section className="page-hero" style={{ background: 'linear-gradient(135deg, var(--primary-dark), #1e3a8a)', color: '#fff', padding: '90px 0 70px' }}>
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(197,160,89,0.2)', color: 'var(--gold)', padding: '6px 16px', borderRadius: '20px', fontSize: '14px', fontWeight: 600, marginBottom: '16px' }}>
            <TrendingUp size={16} /> Commercial &amp; Pricing Strategy
          </div>
          <h1 className="section-title" style={{ color: '#fff', fontSize: '38px', marginBottom: '16px' }}>
            Pharmaceutical Market Access &amp; Pricing Strategy GCC
          </h1>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '760px', margin: '0 auto 24px' }}>
            Demonstrating clinical and economic value to health authorities, pricing committees, and payer organizations across Saudi Arabia, UAE, and GCC markets.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <a href="/consultation" className="btn-primary">Optimize Market Access <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <span className="section-label">Value &amp; Reimbursement</span>
              <h2 className="section-title" style={{ fontSize: '30px', textAlign: 'left', margin: '0 0 20px' }}>
                Secure Optimal Pricing &amp; Rapid Formulary Inclusion
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '20px' }}>
                Regulatory registration is only half the battle. Securing commercial success requires a robust market access strategy that addresses price referencing rules, insurance reimbursement schemes, and key opinion leader (KOL) engagement.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Saudi SFDA Pricing Committee dossier preparation & defense strategy',
                  'UAE MOHAP pricing certificate & reimbursement filing',
                  'Health Technology Assessment (HTA) & Value Dossier authoring',
                  'External Price Referencing (EPR) modeling & impact mitigation',
                  'In-licensing, distribution partner vetting & BD commercial due diligence'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--primary-dark)' }}>
                    <CheckCircle size={18} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: 'var(--gray-50)', padding: '40px', borderRadius: '16px', border: '1px solid var(--gray-200)' }}>
              <DollarSign size={40} style={{ color: 'var(--gold)', marginBottom: '16px' }} />
              <h3 style={{ fontFamily: 'Playfair Display', fontSize: '24px', color: 'var(--primary-dark)', marginBottom: '12px' }}>
                Market Access Key Pillars
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '15px', color: 'var(--text-secondary)' }}>
                <li>✓ Pricing Justification Dossiers (Saudi SFDA & UAE)</li>
                <li>✓ Health Technology Assessment (HTA) Value Frameworks</li>
                <li>✓ Hospital Formulary Inclusion Strategy</li>
                <li>✓ Commercial Partner Due Diligence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion title="Market Access FAQ" faqs={faqs} />

      <div className="page-cta-strip">
        <div className="container">
          <div className="page-cta-strip-inner">
            <div>
              <h2>Planning commercial market entry in GCC?</h2>
              <p>Consult with Dr. Anwar Hussain Mohammed PhD on pricing and access strategy.</p>
            </div>
            <a href="/consultation" className="btn-teal">
              Book Market Access Strategy <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
