import { useEffect, useRef } from 'react';
import { GraduationCap, Users, FileCheck, TrendingUp, ArrowRight, CheckCircle, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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

const programs = [
  {
    icon: <GraduationCap size={28} />,
    title: 'GCC Regulatory Affairs Masterclass',
    desc: 'Learn regulatory pathways, submissions, approvals and lifecycle management in GCC markets.',
    features: [
      'GCC regulatory frameworks & guidelines',
      'CTD/eCTD dossier preparation',
      'SFDA, MOHAP, MOH submission processes',
      'Post-approval variation management',
      'Regulatory strategy & planning',
      'Case studies & real-world examples',
    ],
    tag: 'Most Popular',
    tagColor: 'var(--gold)',
  },
  {
    icon: <Users size={28} />,
    title: 'Career Mentoring',
    desc: 'One-to-one career guidance for pharmacists and regulatory professionals looking to advance in the GCC market.',
    features: [
      'Personalised career roadmap',
      'Interview coaching & preparation',
      'Industry networking guidance',
      'Role transitions & promotions',
      'Building regulatory expertise',
      'GCC job market insights',
    ],
    tag: 'One-to-One',
    tagColor: 'var(--primary)',
  },
  {
    icon: <FileCheck size={28} />,
    title: 'CV & LinkedIn Review',
    desc: 'Professional review and career advice to make your profile stand out in the competitive GCC pharmaceutical job market.',
    features: [
      'ATS-optimised CV review',
      'LinkedIn profile optimisation',
      'Achievement-driven bullet points',
      'Industry-specific language',
      'Personal branding strategy',
      'Application guidance & tips',
    ],
    tag: 'Quick Start',
    tagColor: '#2d7a2e',
  },
  {
    icon: <TrendingUp size={28} />,
    title: 'Business Development Training',
    desc: 'Market access and commercial strategy for pharmaceutical companies entering or expanding in GCC markets.',
    features: [
      'GCC pharmaceutical market overview',
      'Pricing & reimbursement strategies',
      'Licensing & partnership frameworks',
      'Stakeholder engagement & KOLs',
      'Commercial due diligence',
      'Launch sequencing & market entry',
    ],
    tag: 'Corporate',
    tagColor: '#7a2d8e',
  },
];

export default function TrainingPage() {
  const ref = useFadeIn();
  const navigate = useNavigate();

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="training-hero">
        <div className="container">
          <span className="section-label">Training & Mentoring</span>
          <h1 className="section-title" style={{ marginBottom: '16px' }}>
            Advance Your Regulatory Career
          </h1>
          <p className="section-subtitle">
            Expert-led training programs and one-to-one mentoring designed for
            pharmacists and regulatory professionals across GCC markets.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="training-cards">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }} className="fade-in">
            <span className="section-label">Our Programs</span>
            <h2 className="section-title">Choose Your Path</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Whether you're starting your career or scaling your business, we have
              a program tailored to your goals.
            </p>
          </div>
          <div className="training-grid">
            {programs.map((p, i) => (
              <div key={i} className="training-card fade-in">
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '24px' }}>
                  <div className="training-card-icon">{p.icon}</div>
                  <span style={{
                    background: p.tagColor, color: '#fff', fontSize: '11px', fontWeight: 700,
                    letterSpacing: '1px', textTransform: 'uppercase', padding: '4px 12px',
                    borderRadius: '100px', flexShrink: 0,
                  }}>{p.tag}</span>
                </div>
                <h3 className="training-card-title">{p.title}</h3>
                <p className="training-card-desc">{p.desc}</p>
                <ul className="training-card-features">
                  {p.features.map((f, j) => <li key={j}>{f}</li>)}
                </ul>
                <button className="btn-primary" onClick={() => { window.location.href = '/#contact'; }}>
                  Enquire Now <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate link */}
      <section style={{ padding: '80px 0', background: 'var(--gray-50)' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, var(--primary-dark), var(--primary))',
            borderRadius: 'var(--radius-lg)', padding: '60px 48px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: '32px', flexWrap: 'wrap',
          }} className="fade-in">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <Building2 size={32} style={{ color: 'var(--gold)' }} />
                <span className="section-label" style={{ marginBottom: 0 }}>For Companies</span>
              </div>
              <h2 className="section-title" style={{ color: '#fff', marginBottom: '8px' }}>
                Corporate Training Solutions
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '16px', maxWidth: '500px' }}>
                Bespoke in-house training programs for pharmaceutical teams on GCC regulatory
                affairs, CMC, GMP compliance and business development.
              </p>
            </div>
            <button className="btn-primary" onClick={() => navigate('/corporate-training')}>
              View Corporate Programs <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <div className="page-cta-strip">
        <div className="container">
          <div className="page-cta-strip-inner">
            <div>
              <h2>Ready to start your training journey?</h2>
              <p>Contact us to discuss which program is right for you.</p>
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
