import { Globe, FileText, TrendingUp, Microscope, Building2, Shield, Award, CheckCircle, ArrowRight, Layers } from 'lucide-react';
import { useEffect, useRef } from 'react';
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
    icon: <Globe size={28} />, title: 'Global Regulatory Submissions',
    desc: 'Expert preparation and management of regulatory dossiers for GCC and global markets.',
    features: ['US FDA submissions', 'PMDA (Japan) & EMA (Europe)', 'HA & ANVISA (Brazil) dossiers', 'KSA (SFDA) & UAE (MOHAP) submissions'],
  },
  {
    icon: <FileText size={28} />, title: 'Product Registration',
    desc: 'End-to-end management of new product registrations across all therapeutic areas.',
    features: ['New Chemical Entities', 'Biologics & Biosimilars', 'Generic Drug Applications', 'OTC & Prescription Products'],
  },
  {
    icon: <TrendingUp size={28} />, title: 'Market Access Strategy',
    desc: 'Comprehensive planning to accelerate market entry and optimize commercial outcomes.',
    features: ['Reimbursement strategy', 'HTA submissions', 'Pricing & negotiations', 'Launch sequencing'],
  },
  {
    icon: <Microscope size={28} />, title: 'CMC & Dossier Preparation',
    desc: 'Expert CMC documentation for complex molecules, biologics and novel formulations.',
    features: ['Module 3 preparation', 'Biologics & vaccines CMC', 'Stability data review', 'Impurity qualification'],
  },
  {
    icon: <Shield size={28} />, title: 'Lifecycle Management',
    desc: 'Post-approval variation management and renewals to sustain and extend product value.',
    features: ['Type I & II variations', 'Product renewals', 'Line extensions', 'Labelling updates'],
  },
  {
    icon: <Building2 size={28} />, title: 'Business Development',
    desc: 'Strategic partnerships, licensing and market entry for pharmaceutical companies expanding into GCC.',
    features: ['Licensing & in-licensing', 'Partnership strategy', 'Due diligence', 'Market entry planning'],
  },
  {
    icon: <Award size={28} />, title: 'Oncology & Rare Diseases',
    desc: 'Specialized regulatory pathways for oncology, orphan drugs and advanced therapies.',
    features: ['Orphan designation', 'Accelerated approval', 'ATMPs regulatory strategy', 'Compassionate use'],
  },
  {
    icon: <Layers size={28} />, title: 'Regulatory Intelligence',
    desc: 'Continuous monitoring of GCC regulatory changes and competitive landscape analysis.',
    features: ['Regulatory landscape mapping', 'Competitor tracking', 'Policy analysis', 'Strategic advisory'],
  },
];

export default function ServicesPage() {
  const ref = useFadeIn();
  useSEO({
    title: 'Regulatory Affairs Services | GCC Product Registration & Market Access | Reg Excellence UK',
    description: 'Specialist GCC regulatory affairs services: product registration, MHRA, EMA, CMC dossier preparation, lifecycle management, market access and business development. Expert pharmaceutical consultancy.',
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
              <div key={i} className="service-card fade-in" style={{ padding: '40px' }}>
                <div className="service-icon">{s.icon}</div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc" style={{ marginBottom: '20px' }}>{s.desc}</p>
                <ul style={{ listStyle: 'none' }}>
                  {s.features.map((f, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-secondary)', padding: '5px 0' }}>
                      <CheckCircle size={14} style={{ color: 'var(--gold)', flexShrink: 0 }} /> {f}
                    </li>
                  ))}
                </ul>
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
            <button className="btn-teal" onClick={() => { window.location.href = '/#contact'; }}>
              Book a Consultation <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
