import { Globe, FileText, TrendingUp, Microscope, Building2, Shield, Award, CheckCircle, ArrowRight, Layers, FlaskConical, ClipboardCheck } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

function useFadeIn() {
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    const els = ref.current?.querySelectorAll('.fade-in') || [];
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

const services = [
  {
    icon: <Globe size={28} />, title: 'GCC Regulatory Affairs',
    desc: 'Expert preparation and management of regulatory dossiers across SFDA, MOHAP, and GCC health ministries.',
    link: '/services/gcc-regulatory-affairs',
    features: ['SFDA Saudi Arabia eCTD submissions', 'MOHAP UAE fast-track registration', 'Kuwait, Qatar, Oman & Bahrain filings', 'GCC Health Council (GHC) support'],
  },
  {
    icon: <TrendingUp size={28} />, title: 'Regulatory Strategy Roadmap',
    desc: 'Strategic planning to mitigate regulatory risk and accelerate product approvals.',
    link: '/services/regulatory-strategy',
    features: ['Target Product Profile (TPP) alignment', 'Pre-submission scientific advice', 'Global vs GCC roadmap harmonization', 'Fast-track designation strategy'],
  },
  {
    icon: <FileText size={28} />, title: 'Product Registration',
    desc: 'End-to-end management of marketing authorizations across all therapeutic categories.',
    link: '/services/product-registration',
    features: ['New Chemical Entities & Biologics', 'Generics & Biosimilar Applications', 'MAH License Transfers & Renewals', 'Artwork & SmPC Compliance'],
  },
  {
    icon: <Globe size={28} />, title: 'eCTD Submissions Management',
    desc: 'Full compilation, hyperlinking, validation, and gateway publishing for electronic submissions.',
    link: '/services/regulatory-submissions',
    features: ['GCC eCTD Specification v1.5', 'EU & US FDA eCTD submissions', 'Variation management (Type IA, IB, II)', 'Health authority query mitigation'],
  },
  {
    icon: <Microscope size={28} />, title: 'Dossier Preparation & Gap Analysis',
    desc: 'Rigorous authoring and auditing of Modules 1 to 5 prior to health authority filing.',
    link: '/services/dossier-preparation',
    features: ['Module 1-5 CTD authoring & review', 'Pre-submission gap assessment', 'Zone IVb stability compliance check', 'Legacy dossier remediation'],
  },
  {
    icon: <FlaskConical size={28} />, title: 'CMC & Quality Support',
    desc: 'Specialized CMC documentation for complex molecules, biologics, and vaccines.',
    link: '/services/cmc-regulatory-support',
    features: ['Module 3 DS & DP authoring', 'Biologics & vaccine CMC support', 'Analytical method validation review', 'GMP audit & CAPA responses'],
  },
  {
    icon: <TrendingUp size={28} />, title: 'Market Access & Pricing Strategy',
    desc: 'Demonstrating value to secure pricing approvals and hospital formulary inclusions.',
    link: '/services/pharmaceutical-market-access',
    features: ['Saudi SFDA pricing dossier filing', 'UAE MOHAP reimbursement strategy', 'HTA Value Dossier compilation', 'External Price Referencing (EPR)'],
  },
  {
    icon: <Building2 size={28} />, title: 'Business Development',
    desc: 'Strategic partnerships, in-licensing, and market entry due diligence.',
    link: '/training/business-development-training',
    features: ['In-licensing & deal structuring', 'Distributor vetting & compliance', 'Commercial due diligence', 'GCC market entry planning'],
  },
];

export default function ServicesPage() {
  const ref = useFadeIn();
  useSEO({
    title: 'GCC & Global Pharmaceutical Regulatory Affairs Services | Reg Excellence UK',
    description: 'Comprehensive pharmaceutical regulatory services by Dr. Anwar Hussain Mohammed PhD: GCC regulatory affairs, SFDA, MOHAP, eCTD submissions, CMC, product registration, & market access.',
    keywords: 'GCC regulatory affairs services, SFDA drug registration services, UAE MOHAP regulatory consultant, CMC dossier preparation, pharmaceutical market access GCC',
    schema: {
      '@type': 'Service',
      'name': 'Pharmaceutical Regulatory Services',
      'provider': { '@id': 'https://regexcellence.co.uk/#organization' }
    }
  });

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="services-page-hero">
        <div className="container">
          <span className="section-label">Our Services</span>
          <h1 className="section-title" style={{ fontSize: '52px', marginBottom: '16px' }}>
            Comprehensive Regulatory Solutions
          </h1>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            From regulatory strategy to post-market compliance — expert services for every stage
            of your pharmaceutical product lifecycle in GCC and global markets.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '100px 0', background: 'var(--white)' }}>
        <div className="container">
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={i} className="service-card fade-in" style={{ padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div className="service-icon">{s.icon}</div>
                  <h3 className="service-title">{s.title}</h3>
                  <p className="service-desc" style={{ marginBottom: '20px' }}>{s.desc}</p>
                  <ul style={{ listStyle: 'none', marginBottom: '24px' }}>
                    {s.features.map((f, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-secondary)', padding: '5px 0' }}>
                        <CheckCircle size={14} style={{ color: 'var(--gold)', flexShrink: 0 }} /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                {s.link && (
                  <Link to={s.link} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--gold)', fontWeight: 700, fontSize: '14px', textDecoration: 'none', marginTop: '12px' }}>
                    Explore Details <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <div className="page-cta-strip">
        <div className="container">
          <div className="page-cta-strip-inner">
            <div>
              <h2>Ready to get started?</h2>
              <p>Book a consultation with Dr. Anwar Hussain Mohammed PhD today.</p>
            </div>
            <a href="/consultation" className="btn-teal">
              Book a Consultation <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
