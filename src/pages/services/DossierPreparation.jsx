import { FileText, CheckCircle, ArrowRight, Shield, Edit3 } from 'lucide-react';
import useSEO from '../../hooks/useSEO';
import FAQAccordion from '../../components/FAQAccordion';

export default function DossierPreparation() {
  useSEO({
    title: 'CTD & eCTD Dossier Preparation & Writing Services | Reg Excellence',
    description: 'Professional CTD & eCTD Module 1-5 dossier writing, auditing, gap analysis, and publishing for GCC, UK, EU, and US regulatory submissions by Dr. Anwar Hussain Mohammed PhD.',
    keywords: 'dossier preparation GCC, CTD dossier writing, eCTD Module 3 writing, pharma dossier gap analysis, Module 1 GCC adaptation',
    schema: {
      '@type': 'Service',
      'name': 'Dossier Preparation & Writing',
      'provider': { '@id': 'https://regexcellence.co.uk/#organization' },
      'description': 'Full CTD / eCTD dossier writing, gap analysis, and document remediation services.'
    }
  });

  const faqs = [
    {
      q: "What CTD Modules do you write and review?",
      a: "We provide complete writing and critical reviews for Module 1 (Administrative/Regional), Module 2 (Overviews & Summaries), Module 3 (CMC/Quality), Module 4 (Nonclinical), and Module 5 (Clinical Study Reports)."
    },
    {
      q: "What is a Dossier Gap Analysis?",
      a: "A Dossier Gap Analysis is a rigorous pre-submission audit where we compare your existing technical file against target health authority requirements (e.g. SFDA, MOHAP, MHRA) to identify missing data, non-compliant stability studies, or formatting defects before submission."
    }
  ];

  return (
    <div>
      <section className="page-hero" style={{ background: 'linear-gradient(135deg, var(--primary-dark), #1e1b4b)', color: '#fff', padding: '90px 0 70px' }}>
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(197,160,89,0.2)', color: 'var(--gold)', padding: '6px 16px', borderRadius: '20px', fontSize: '14px', fontWeight: 600, marginBottom: '16px' }}>
            <Edit3 size={16} /> Precision Technical Writing
          </div>
          <h1 className="section-title" style={{ color: '#fff', fontSize: '38px', marginBottom: '16px' }}>
            CTD &amp; eCTD Dossier Preparation &amp; Gap Analysis
          </h1>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '760px', margin: '0 auto 24px' }}>
            Rigorous dossier writing, gap analysis, and document remediation to ensure first-time-right health authority approvals.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <a href="/consultation" className="btn-primary">Request Dossier Review <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <span className="section-label">Quality &amp; Precision</span>
              <h2 className="section-title" style={{ fontSize: '30px', textAlign: 'left', margin: '0 0 20px' }}>
                Transform Technical Data into Regulatory-Grade Submissions
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '20px' }}>
                Whether you are adapting a European dossier for SFDA Saudi Arabia or authoring a new Module 3 from scratch, our team delivers clear, logically structured documentation that satisfies rigorous scientific scrutiny.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Module 1 regional legal document compilation (CPP, Free Sale, GMP)',
                  'Module 2 Quality Overall Summary (QOS) & Clinical Overviews',
                  'Module 3 Drug Substance (S) & Drug Product (P) technical authoring',
                  'Gap analysis against GCC & Zone IVb stability requirements',
                  'Dossier remediation for legacy products and generic applications'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--primary-dark)' }}>
                    <CheckCircle size={18} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: 'var(--gray-50)', padding: '40px', borderRadius: '16px', border: '1px solid var(--gray-200)' }}>
              <FileText size={40} style={{ color: 'var(--gold)', marginBottom: '16px' }} />
              <h3 style={{ fontFamily: 'Playfair Display', fontSize: '24px', color: 'var(--primary-dark)', marginBottom: '12px' }}>
                Dossier Support Services
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '15px', color: 'var(--text-secondary)' }}>
                <li>✓ Full CTD Module 1-5 Authoring & Review</li>
                <li>✓ Pre-Submission Gap Analysis Reports</li>
                <li>✓ Medical Writing & Clinical Summary Preparation</li>
                <li>✓ Module 3 CMC Data Remediation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion title="Dossier Preparation FAQ" faqs={faqs} />

      <div className="page-cta-strip">
        <div className="container">
          <div className="page-cta-strip-inner">
            <div>
              <h2>Want your dossier audited before submission?</h2>
              <p>Book a confidential gap assessment with Dr. Anwar Hussain Mohammed PhD.</p>
            </div>
            <a href="/consultation" className="btn-teal">
              Book Gap Analysis <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
