import { useEffect, useRef } from 'react';
import { Globe, Microscope, Shield, TrendingUp, Building2, Award, CheckCircle, ArrowRight, Users } from 'lucide-react';
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

const topics = [
  {
    icon: <Globe size={28} />,
    title: 'GCC Regulatory Affairs',
    desc: 'Comprehensive training on GCC regulatory frameworks, submission requirements, and approval processes across all Gulf markets.',
    modules: ['GCC regulatory landscape overview', 'SFDA & MOHAP submission processes', 'CTD/eCTD dossier preparation', 'Post-approval variation management', 'Regulatory strategy & timelines'],
  },
  {
    icon: <Microscope size={28} />,
    title: 'CMC & Dossier Preparation',
    desc: 'In-depth training on Chemistry, Manufacturing and Controls documentation for complex molecules and biologics.',
    modules: ['Module 3 preparation best practices', 'Drug substance & drug product requirements', 'Analytical method validation', 'Stability data requirements', 'Biologics & vaccine CMC'],
  },
  {
    icon: <Shield size={28} />,
    title: 'GMP & Compliance',
    desc: 'Good Manufacturing Practice training tailored to GCC regulatory expectations and international standards.',
    modules: ['GMP principles & guidelines', 'Quality management systems', 'GCC inspection preparation', 'Audit readiness & CAPA', 'Manufacturing site registration'],
  },
  {
    icon: <TrendingUp size={28} />,
    title: 'Regulatory Strategy',
    desc: 'Strategic training on building regulatory roadmaps, managing health authority interactions and accelerating approvals.',
    modules: ['Regulatory pathway selection', 'Health authority meeting strategy', 'Risk-based regulatory planning', 'Global vs GCC submission strategy', 'Lifecycle management planning'],
  },
  {
    icon: <Building2 size={28} />,
    title: 'Pharmaceutical Business Development',
    desc: 'Commercial strategy training for pharmaceutical teams entering, growing or diversifying in GCC markets.',
    modules: ['GCC pharmaceutical market overview', 'Licensing & in-licensing strategy', 'Pricing & market access fundamentals', 'Stakeholder mapping & KOL engagement', 'Commercial due diligence'],
  },
];

const stats = [
  { value: '100+', label: 'Professionals Trained' },
  { value: '10+', label: 'GCC Markets Covered' },
  { value: '5', label: 'Training Modules Available' },
  { value: '100%', label: 'Bespoke Programmes' },
];

export default function CorporateTrainingPage() {
  const ref = useFadeIn();
  useSEO({
    title: 'Corporate Pharmaceutical Training | GCC Regulatory Affairs & GMP | Reg Excellence UK',
    description: 'Bespoke corporate pharmaceutical training programmes: GCC regulatory affairs, CMC, GMP compliance, market access and business development. UK-based expert trainers delivering across GCC.',
  });

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="corporate-hero">
        <div className="container">
          <span className="section-label">Corporate Training</span>
          <h1 className="section-title" style={{ marginBottom: '16px' }}>
            Corporate Training Solutions
          </h1>
          <p className="section-subtitle">
            Bespoke in-house training programs designed to upskill your pharmaceutical team
            in GCC regulatory affairs, compliance, and business development.
          </p>
          <div style={{ marginTop: '36px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => { window.location.href = '/#contact'; }}>
              Request a Proposal <ArrowRight size={16} />
            </button>
            <a href="/training" className="btn-outline">View Individual Training</a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div style={{ background: 'var(--gold)', padding: '40px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '24px', textAlign: 'center' }}>
            {stats.map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: 'Playfair Display', fontSize: '40px', fontWeight: 700, color: 'var(--primary-dark)' }}>{s.value}</div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--primary-dark)', opacity: 0.75, marginTop: '4px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why choose us */}
      <section style={{ padding: '100px 0', background: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div className="fade-in">
              <span className="section-label">Why Choose Us</span>
              <h2 className="section-title">Training Built on Real-World Expertise</h2>
              <p className="section-subtitle" style={{ marginBottom: '32px' }}>
                Our corporate training programs are developed and delivered by Dr. Anwar Hussain
                Mohammed PhD — delivering hands-on GCC regulatory affairs and pharmaceutical
                business development training based on real-world experience.
              </p>
              {[
                "Tailored to your team's specific needs and products",
                'Delivered on-site or virtually across GCC',
                'Practical case studies from real GCC submissions',
                'Interactive workshops and Q&A sessions',
                'Post-training support and resources',
                'Certificate of completion for all participants',
              ].map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', fontSize: '15px', color: 'var(--text-secondary)' }}>
                  <CheckCircle size={16} style={{ color: 'var(--gold)', flexShrink: 0 }} /> {f}
                </div>
              ))}
              <div style={{ marginTop: '32px' }}>
                <button className="btn-primary" onClick={() => { window.location.href = '/#contact'; }}>
                  Request a Proposal <ArrowRight size={16} />
                </button>
              </div>
            </div>
            <div className="fade-in">
              <div style={{
                background: 'linear-gradient(135deg, var(--primary-dark), var(--primary))',
                borderRadius: 'var(--radius-lg)', padding: '40px',
              }}>
                <Users size={40} style={{ color: 'var(--gold)', marginBottom: '20px' }} />
                <h3 style={{ fontFamily: 'Playfair Display', fontSize: '24px', color: '#fff', marginBottom: '12px' }}>
                  Who Is This For?
                </h3>
                {[
                  'Regulatory Affairs Teams', 'Medical Affairs Departments', 'R&D and Clinical Teams',
                  'Commercial & BD Teams', 'Quality Assurance Teams', 'Senior Management & Directors',
                  'New Entrants to GCC Markets', 'Pharmacovigilance Teams',
                ].map((who, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0 }} />
                    {who}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="corporate-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }} className="fade-in">
            <span className="section-label">Topics</span>
            <h2 className="section-title">Training Modules Available</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Choose individual modules or combine them into a comprehensive corporate learning program.
            </p>
          </div>
          <div className="corporate-grid">
            {topics.map((t, i) => (
              <div key={i} className="corporate-card fade-in">
                <div className="corporate-card-icon">{t.icon}</div>
                <h3 className="corporate-card-title">{t.title}</h3>
                <p className="corporate-card-desc" style={{ marginBottom: '20px' }}>{t.desc}</p>
                <ul style={{ listStyle: 'none', textAlign: 'left' }}>
                  {t.modules.map((m, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-secondary)', padding: '4px 0' }}>
                      <span style={{ color: 'var(--gold)', fontWeight: 700 }}>✓</span> {m}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: '100px 0', background: 'var(--white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }} className="fade-in">
            <span className="section-label">Process</span>
            <h2 className="section-title">How It Works</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '24px' }} className="fade-in">
            {[
              { step: '01', title: 'Initial Consultation', desc: 'We discuss your team\'s needs, current knowledge gaps and training objectives.' },
              { step: '02', title: 'Programme Design', desc: 'A tailored training programme is designed around your products, markets and team.' },
              { step: '03', title: 'Delivery', desc: 'Training delivered on-site or virtually, with interactive workshops and real case studies.' },
              { step: '04', title: 'Follow-Up Support', desc: 'Post-training resources, Q&A sessions and ongoing advisory support for your team.' },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '32px 20px', background: 'var(--gray-50)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gray-200)' }}>
                <div style={{ fontFamily: 'Playfair Display', fontSize: '48px', fontWeight: 700, color: 'var(--gold)', opacity: 0.4, lineHeight: 1, marginBottom: '12px' }}>{s.step}</div>
                <h4 style={{ fontFamily: 'Playfair Display', fontSize: '18px', color: 'var(--primary-dark)', marginBottom: '10px' }}>{s.title}</h4>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="page-cta-strip">
        <div className="container">
          <div className="page-cta-strip-inner">
            <div>
              <h2>Ready to train your team?</h2>
              <p>Get in touch to discuss a bespoke corporate training programme.</p>
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
