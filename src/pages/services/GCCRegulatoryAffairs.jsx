import { Globe, Shield, CheckCircle, ArrowRight, Building, FileCheck, Landmark } from 'lucide-react';
import useSEO from '../../hooks/useSEO';
import FAQAccordion from '../../components/FAQAccordion';

export default function GCCRegulatoryAffairs() {
  useSEO({
    title: 'GCC Regulatory Affairs Consultant & Pharma Registration Services',
    description: 'Expert GCC pharmaceutical regulatory affairs consulting by Dr. Anwar Hussain Mohammed PhD. Support for SFDA Saudi Arabia, MOHAP UAE, Kuwait MOH, NHRA Bahrain, Oman, and Qatar health authorities.',
    keywords: 'GCC regulatory affairs consultant, SFDA regulatory consultant, UAE MOHAP product registration, Saudi Arabia pharmaceutical registration, GCC health authority submissions, Kuwait MOH registration',
    schema: {
      '@type': 'Service',
      'name': 'GCC Regulatory Affairs Consulting',
      'provider': { '@id': 'https://regexcellence.co.uk/#organization' },
      'areaServed': ['Saudi Arabia', 'United Arab Emirates', 'Kuwait', 'Qatar', 'Bahrain', 'Oman'],
      'description': 'Comprehensive regulatory affairs consulting for pharmaceutical companies entering Gulf Cooperation Council (GCC) markets.'
    }
  });

  const faqs = [
    {
      q: "What health authorities are covered under GCC regulatory consulting?",
      a: "We provide complete end-to-end support for SFDA (Saudi Food and Drug Authority), MOHAP (UAE Ministry of Health & Prevention), Kuwait Ministry of Health, NHRA (Bahrain National Health Regulatory Authority), Oman Ministry of Health, and Qatar Ministry of Public Health."
    },
    {
      q: "How does product registration differ across Saudi Arabia and the UAE?",
      a: "Saudi Arabia (SFDA) requires eCTD format with specific national Module 1 requirements, pricing dossier submissions, and strict stability testing in Zone IVb conditions. UAE (MOHAP) has distinct fast-track innovation pathways, fast pricing approvals, and specific local agent / marketing authorization holder regulations."
    },
    {
      q: "Can Reg Excellence assist with Gulf Health Council (GHC) centralized approvals?",
      a: "Yes, Dr. Anwar Hussain Mohammed PhD has extensive experience navigating Centralized GCC Registration via the Gulf Health Council, facilitating multi-country approvals across member states."
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="page-hero" style={{ background: 'linear-gradient(135deg, var(--primary-dark), #1e293b)', color: '#fff', padding: '90px 0 70px' }}>
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(197,160,89,0.2)', color: 'var(--gold)', padding: '6px 16px', borderRadius: '20px', fontSize: '14px', fontWeight: 600, marginBottom: '16px' }}>
            <Globe size={16} /> Regional Regulatory Leadership
          </div>
          <h1 className="section-title" style={{ color: '#fff', fontSize: '38px', marginBottom: '16px' }}>
            GCC Pharmaceutical Regulatory Affairs Consulting
          </h1>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '760px', margin: '0 auto 24px' }}>
            Accelerating pharmaceutical product registration across Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, and Oman through expert health authority strategy and compliant eCTD submissions.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <a href="/consultation" className="btn-primary">Book a GCC Strategy Session <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', marginBottom: '80px' }}>
            <div>
              <span className="section-label">GCC Market Entry</span>
              <h2 className="section-title" style={{ fontSize: '30px', textAlign: 'left', margin: '0 0 20px' }}>
                Navigating Gulf Health Authorities with 25+ Years Experience
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '20px' }}>
                Entering the GCC pharmaceutical market demands deep familiarity with country-specific health authority guidelines, eCTD Module 1 specifications, local stability requirements (Zone IVb), pricing guidelines, and post-approval variations.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '24px' }}>
                Led by <strong>Dr. Anwar Hussain Mohammed, PhD</strong>, Reg Excellence provides strategic regulatory guidance to global pharmaceutical companies, generics manufacturers, and biotech firms expanding into the Middle East.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'SFDA Saudi Arabia eCTD submission & pricing dossier strategy',
                  'MOHAP UAE fast-track registration & local agent coordination',
                  'Kuwait, Bahrain, Oman, & Qatar national registration pathways',
                  'Gulf Health Council (GHC) centralized registration support',
                  'Zone IVb stability protocol review & CMC gap assessment'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--primary-dark)' }}>
                    <CheckCircle size={18} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: 'var(--gray-50)', padding: '40px', borderRadius: '16px', border: '1px solid var(--gray-200)' }}>
              <h3 style={{ fontFamily: 'Playfair Display', fontSize: '24px', color: 'var(--primary-dark)', marginBottom: '20px' }}>
                GCC Health Authorities Supported
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { title: 'Saudi Food & Drug Authority (SFDA)', detail: 'Saudi Arabia — Full eCTD & Pricing Approval' },
                  { title: 'Ministry of Health & Prevention (MOHAP)', detail: 'UAE — Fast-track & Breakthrough Pathways' },
                  { title: 'Ministry of Health (MOH Kuwait)', detail: 'Kuwait — Product Licensing & Variation Filings' },
                  { title: 'National Health Regulatory Authority (NHRA)', detail: 'Bahrain — Accelerated Review Procedures' },
                  { title: 'Ministry of Health Oman & Qatar MOPH', detail: 'Oman & Qatar — National Market Entry' }
                ].map((gov, i) => (
                  <div key={i} style={{ padding: '16px', background: '#fff', borderRadius: '8px', borderLeft: '4px solid var(--gold)' }}>
                    <div style={{ fontWeight: 700, color: 'var(--primary-dark)', fontSize: '15px' }}>{gov.title}</div>
                    <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '4px' }}>{gov.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <FAQAccordion title="GCC Regulatory Affairs FAQ" faqs={faqs} />

      {/* CTA Strip */}
      <div className="page-cta-strip">
        <div className="container">
          <div className="page-cta-strip-inner">
            <div>
              <h2>Expand your pharmaceutical portfolio into GCC markets</h2>
              <p>Schedule a confidential regulatory consultation with Dr. Anwar Hussain Mohammed PhD.</p>
            </div>
            <a href="/consultation" className="btn-teal">
              Book a GCC Consultation <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
