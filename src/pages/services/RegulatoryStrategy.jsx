import { TrendingUp, Shield, CheckCircle, ArrowRight, Target, Compass, FileText } from 'lucide-react';
import useSEO from '../../hooks/useSEO';
import FAQAccordion from '../../components/FAQAccordion';

export default function RegulatoryStrategy() {
  useSEO({
    title: 'Pharmaceutical Regulatory Strategy & Submissions Roadmap GCC',
    description: 'Strategic pharmaceutical regulatory consulting for global & GCC markets. Regulatory pathways, health authority interaction, risk mitigation, and acceleration roadmaps by Dr. Anwar Hussain Mohammed PhD.',
    keywords: 'pharmaceutical regulatory strategy GCC, regulatory roadmap pharma, health authority strategy SFDA, eCTD submission pathway, pharmaceutical regulatory risk assessment',
    schema: {
      '@type': 'Service',
      'name': 'Pharmaceutical Regulatory Strategy',
      'provider': { '@id': 'https://regexcellence.co.uk/#organization' },
      'description': 'End-to-end pharmaceutical regulatory strategy development for fast-track product approvals in GCC and global markets.'
    }
  });

  const faqs = [
    {
      q: "What does a pharmaceutical regulatory strategy plan include?",
      a: "Our regulatory strategy includes global vs regional pathway comparison, health authority interaction plans (pre-submission meetings), Module 1-5 gap analyses, Zone IVb stability alignment, target labeling strategy, and risk mitigation timelines."
    },
    {
      q: "How early in product development should we engage regulatory strategy consulting?",
      a: "Ideally during Phase II/III or prior to dossier compilation for market entry. Early regulatory planning prevents costly submission rejections and reduces time-to-approval by up to 6–12 months."
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="page-hero" style={{ background: 'linear-gradient(135deg, var(--primary-dark), #0f2b48)', color: '#fff', padding: '90px 0 70px' }}>
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(197,160,89,0.2)', color: 'var(--gold)', padding: '6px 16px', borderRadius: '20px', fontSize: '14px', fontWeight: 600, marginBottom: '16px' }}>
            <TrendingUp size={16} /> Strategic Regulatory Planning
          </div>
          <h1 className="section-title" style={{ color: '#fff', fontSize: '38px', marginBottom: '16px' }}>
            Pharmaceutical Regulatory Strategy &amp; Submissions Roadmap
          </h1>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '760px', margin: '0 auto 24px' }}>
            Building risk-mitigated regulatory pathways to accelerate market authorization for prescription drugs, biologics, vaccines, generics, and orphan drugs.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <a href="/consultation" className="btn-primary">Develop Your Regulatory Strategy <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <span className="section-label">Commercial Acceleration</span>
              <h2 className="section-title" style={{ fontSize: '30px', textAlign: 'left', margin: '0 0 20px' }}>
                Transform Regulatory Complexities into Clear Approval Roadmaps
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '20px' }}>
                A well-executed regulatory strategy reduces approval delays, prevents costly deficiency letters from health authorities (SFDA, MOHAP, MHRA, EMA), and aligns commercial launch goals with strict compliance requirements.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Target Product Profile (TPP) alignment with regulatory criteria',
                  'Health authority scientific advice & pre-submission meeting preparation',
                  'Orphan drug & breakthrough therapy designation strategy',
                  'Global vs GCC regional regulatory roadmap harmonization',
                  'Post-approval lifecycle management & variation strategy'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--primary-dark)' }}>
                    <CheckCircle size={18} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: 'var(--gray-50)', padding: '40px', borderRadius: '16px', border: '1px solid var(--gray-200)' }}>
              <Compass size={40} style={{ color: 'var(--gold)', marginBottom: '16px' }} />
              <h3 style={{ fontFamily: 'Playfair Display', fontSize: '24px', color: 'var(--primary-dark)', marginBottom: '12px' }}>
                Key Deliverables of Our Strategy
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '15px', color: 'var(--text-secondary)' }}>
                <li style={{ paddingBottom: '10px', borderBottom: '1px solid var(--gray-200)' }}>✓ Comprehensive Regulatory Strategy Document (RSD)</li>
                <li style={{ paddingBottom: '10px', borderBottom: '1px solid var(--gray-200)' }}>✓ Health Authority Engagement & Pre-submission Briefing Packages</li>
                <li style={{ paddingBottom: '10px', borderBottom: '1px solid var(--gray-200)' }}>✓ Regulatory Risk Assessment & Mitigation Matrix</li>
                <li style={{ paddingBottom: '10px', borderBottom: '1px solid var(--gray-200)' }}>✓ Fast-Track & Priority Review Eligibility Assessments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion title="Regulatory Strategy FAQ" faqs={faqs} />

      <div className="page-cta-strip">
        <div className="container">
          <div className="page-cta-strip-inner">
            <div>
              <h2>Need a tailored regulatory submission roadmap?</h2>
              <p>Consult with Dr. Anwar Hussain Mohammed PhD to streamline your approval timeline.</p>
            </div>
            <a href="/consultation" className="btn-teal">
              Book a Strategy Consultation <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
