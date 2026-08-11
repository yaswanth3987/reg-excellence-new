import { useEffect, useRef } from 'react';
import { GraduationCap, Users, FileCheck, TrendingUp, ArrowRight, Building2 } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import LeadMagnet from '../components/LeadMagnet';

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
    link: '/training/gcc-regulatory-affairs-masterclass',
    desc: 'Learn regulatory pathways, SFDA eCTD submissions, MOHAP guidelines, and GCC approval workflows.',
    features: [
      'SFDA Saudi Arabia eCTD submission processes',
      'MOHAP UAE & Kuwait MOH regulatory frameworks',
      'CTD/eCTD Module 1-5 dossier preparation',
      'Climate Zone IVb stability testing compliance',
      'Post-approval variation management',
      'Real-world deficiency letter response strategies',
    ],
    tag: 'Most Popular',
    tagColor: 'var(--gold)',
  },
  {
    icon: <Users size={28} />,
    title: '1-on-1 Career Mentoring',
    link: '/training/career-mentoring',
    desc: 'One-to-one career coaching for pharmacists and regulatory professionals seeking rapid career growth.',
    features: [
      'Personalised career roadmap with Dr. Anwar',
      'Interview coaching & technical preparation',
      'Transitioning from pharmacy to industry RA',
      'Role transitions & promotional positioning',
      'Salary negotiation strategy',
      'Global job market insights',
    ],
    tag: 'One-to-One',
    tagColor: 'var(--primary)',
  },
  {
    icon: <FileCheck size={28} />,
    title: 'CV & LinkedIn Review',
    link: '/training/cv-linkedin-review',
    desc: 'Professional review and career advice to make your profile stand out to global pharma recruiters.',
    features: [
      'ATS-optimised CV rewrite & formatting',
      'LinkedIn profile headline & summary overhaul',
      'Integration of eCTD, SFDA & CMC keywords',
      'Quantifiable achievement structuring',
      'Personal branding strategy',
      '30-minute career strategy feedback call',
    ],
    tag: 'Quick Start',
    tagColor: '#2d7a2e',
  },
  {
    icon: <TrendingUp size={28} />,
    title: 'Business Development Training',
    link: '/training/business-development-training',
    desc: 'Market access and commercial strategy for pharmaceutical companies entering or expanding in GCC markets.',
    features: [
      'GCC pharmaceutical market overview',
      'Pricing & reimbursement strategies (SFDA/MOHAP)',
      'In-licensing & partnership frameworks',
      'Distributor vetting & commercial due diligence',
      'Commercial negotiation strategy',
      'Launch sequencing & market entry',
    ],
    tag: 'Corporate',
    tagColor: '#7a2d8e',
  },
];

export default function TrainingPage() {
  const ref = useFadeIn();
  const navigate = useNavigate();
  useSEO({
    title: 'GCC & Global Regulatory Affairs Training & Career Mentoring | Reg Excellence',
    description: 'GCC regulatory affairs training masterclass, 1-on-1 career mentoring, CV & LinkedIn review, and pharma business development courses led by Dr. Anwar Hussain Mohammed PhD.',
    keywords: 'GCC regulatory affairs training, regulatory affairs career mentoring, pharmacist career coaching, CV review regulatory affairs, pharma business development course',
    schema: {
      '@type': 'Course',
      'name': 'Regulatory Affairs & Mentoring Programs',
      'provider': { '@id': 'https://regexcellence.co.uk/#organization' }
    }
  });

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="training-hero">
        <div className="container">
          <span className="section-label">Training &amp; Mentoring</span>
          <h1 className="section-title" style={{ marginBottom: '16px' }}>
            Advance Your Regulatory Career
          </h1>
          <p className="section-subtitle">
            Expert-led training programs and one-to-one mentoring designed for
            pharmacists and regulatory professionals across GCC and global markets.
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
              <div key={i} className="training-card fade-in" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
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
                </div>
                <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <Link to={p.link} className="btn-primary" style={{ textAlign: 'center', textDecoration: 'none' }}>
                    View Program Details <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet Capture Component */}
      <LeadMagnet />

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
            <a href="/consultation" className="btn-teal">
              Book a Consultation <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
