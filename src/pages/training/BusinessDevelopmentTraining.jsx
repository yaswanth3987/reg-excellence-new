import { Building2, CheckCircle, ArrowRight, TrendingUp, Handshake } from 'lucide-react';
import useSEO from '../../hooks/useSEO';
import FAQAccordion from '../../components/FAQAccordion';
import LeadMagnet from '../../components/LeadMagnet';

export default function BusinessDevelopmentTraining() {
  useSEO({
    title: 'Pharmaceutical Business Development Training | GCC Market Access',
    description: 'Master pharmaceutical business development, in-licensing, distribution agreements, and commercial market entry in GCC and global markets with Dr. Anwar Hussain Mohammed PhD.',
    keywords: 'pharmaceutical business development training, GCC pharma licensing, in-licensing strategy, pharma commercial training, GCC market entry course',
    schema: {
      '@type': 'Course',
      'name': 'Pharmaceutical Business Development Training',
      'description': 'Commercial strategy and business development training for pharmaceutical executives expanding into GCC and global markets.',
      'provider': { '@id': 'https://regexcellence.co.uk/#organization' }
    }
  });

  const faqs = [
    {
      q: "What commercial skills are taught in the Business Development training?",
      a: "The training covers target evaluation, in-licensing vs out-licensing structures, commercial due diligence, distributor selection across GCC countries, valuation modeling, and health authority pricing integration."
    },
    {
      q: "Is this training suitable for senior commercial executives?",
      a: "Yes, it is designed for BD Directors, Commercial Leads, Portfolio Managers, and Regulatory Directors who need integrated regulatory-commercial market entry strategies."
    }
  ];

  return (
    <div>
      <section className="page-hero" style={{ background: 'linear-gradient(135deg, var(--primary-dark), #1e1b4b)', color: '#fff', padding: '90px 0 70px' }}>
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(197,160,89,0.2)', color: 'var(--gold)', padding: '6px 16px', borderRadius: '20px', fontSize: '14px', fontWeight: 600, marginBottom: '16px' }}>
            <Building2 size={16} /> Commercial Excellence
          </div>
          <h1 className="section-title" style={{ color: '#fff', fontSize: '38px', marginBottom: '16px' }}>
            Pharmaceutical Business Development Training
          </h1>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '760px', margin: '0 auto 24px' }}>
            Master licensing, commercial due diligence, distributor partnerships, and market entry strategies across Saudi Arabia, UAE, and GCC markets.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <a href="/consultation" className="btn-primary">Explore BD Training <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <span className="section-label">Commercial Strategy</span>
              <h2 className="section-title" style={{ fontSize: '30px', textAlign: 'left', margin: '0 0 20px' }}>
                Bridging Regulatory Compliance &amp; Commercial Expansion
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '20px' }}>
                Successful pharma expansion requires blending regulatory feasibility with commercial valuation. Learn how to structure win-win licensing deals and select reliable regional distribution partners.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'GCC pharmaceutical market overview & high-growth therapeutic areas',
                  'In-licensing & out-licensing deal structuring & valuation',
                  'Distributor screening, vetting & contractual terms (MAH vs local agent)',
                  'Integrating pricing approvals (SFDA/MOHAP) into commercial forecasts',
                  'Portfolio diversification & risk management in emerging markets'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--primary-dark)' }}>
                    <CheckCircle size={18} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: 'var(--gray-50)', padding: '40px', borderRadius: '16px', border: '1px solid var(--gray-200)' }}>
              <Handshake size={40} style={{ color: 'var(--gold)', marginBottom: '16px' }} />
              <h3 style={{ fontFamily: 'Playfair Display', fontSize: '24px', color: 'var(--primary-dark)', marginBottom: '12px' }}>
                Target Audience
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '15px', color: 'var(--text-secondary)' }}>
                <li>✓ Business Development Managers & Directors</li>
                <li>✓ Licensing & Alliance Management Teams</li>
                <li>✓ Regulatory Affairs Professionals seeking commercial mastery</li>
                <li>✓ Pharma Executives planning GCC market entry</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <LeadMagnet />

      <FAQAccordion title="Business Development Training FAQ" faqs={faqs} />

      <div className="page-cta-strip">
        <div className="container">
          <div className="page-cta-strip-inner">
            <div>
              <h2>Upskill your commercial team today</h2>
              <p>Inquire about tailored corporate BD workshops with Dr. Anwar Hussain Mohammed PhD.</p>
            </div>
            <a href="/consultation" className="btn-teal">
              Request BD Training Proposal <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
