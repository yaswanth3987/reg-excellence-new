import { useEffect, useRef } from 'react';
import { Users, Briefcase, GraduationCap, Globe, ArrowRight, CheckCircle, Star } from 'lucide-react';
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

const opportunities = [
  {
    tag: 'Consulting',
    title: 'Senior Regulatory Affairs Consultant',
    desc: 'Join our expert team providing GCC regulatory affairs consulting to multinational pharmaceutical companies. Must have 8+ years of GCC regulatory experience.',
  },
  {
    tag: 'Training',
    title: 'Regulatory Affairs Trainer',
    desc: 'Deliver high-quality training programmes on GCC regulatory submissions, dossier preparation and lifecycle management to pharma professionals.',
  },
  {
    tag: 'Business Dev',
    title: 'Business Development Manager',
    desc: 'Drive business growth across GCC markets by building client relationships with pharmaceutical companies seeking regulatory and market access support.',
  },
  {
    tag: 'Graduate',
    title: 'Regulatory Affairs Graduate Programme',
    desc: 'An intensive mentoring and training programme for newly qualified pharmacists looking to build a career in GCC regulatory affairs.',
  },
];

const values = [
  { icon: <Star size={20} />, title: 'Excellence', desc: 'We hold ourselves to the highest professional standards in everything we do.' },
  { icon: <Users size={20} />, title: 'Collaboration', desc: 'We believe in working closely with clients and colleagues for the best outcomes.' },
  { icon: <Globe size={20} />, title: 'Global Mindset', desc: 'We bring international perspectives to regional regulatory challenges.' },
  { icon: <GraduationCap size={20} />, title: 'Continuous Learning', desc: 'We stay at the forefront of regulatory science and industry developments.' },
];

export default function CareersPage() {
  const ref = useFadeIn();
  useSEO({
    title: 'Pharmaceutical Careers | GCC Regulatory Affairs Jobs | Reg Excellence UK',
    description: 'Join Reg Excellence — career opportunities in GCC regulatory affairs, pharmaceutical consulting and regulatory training. Work with a leading pharmaceutical regulatory expert.',
  });

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="careers-hero">
        <div className="container">
          <span className="section-label">Careers</span>
          <h1 className="section-title" style={{ marginBottom: '16px' }}>
            Join Reg Excellence
          </h1>
          <p className="section-subtitle">
            Build your career alongside one of the GCC's leading regulatory affairs experts.
            We're looking for passionate professionals who want to make a real impact.
          </p>
        </div>
      </section>

      {/* Why join us */}
      <section style={{ padding: '100px 0', background: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div className="fade-in">
              <span className="section-label">Why Join Us</span>
              <h2 className="section-title">Work With the Best in GCC Regulatory</h2>
              <p className="section-subtitle" style={{ marginBottom: '32px' }}>
                At Reg Excellence, you'll work directly with Dr. Anwar Hussain Mohammed PhD and
                gain unparalleled exposure to the full spectrum of GCC regulatory affairs and
                pharmaceutical business development.
              </p>
              {[
                'Mentorship from an experienced industry expert',
                'Exposure to complex, high-value regulatory projects',
                'Work across multiple GCC markets and therapeutic areas',
                'Flexible and hybrid working arrangements',
                'Continuous professional development & training',
                'Competitive remuneration packages',
              ].map((b, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', fontSize: '15px', color: 'var(--text-secondary)' }}>
                  <CheckCircle size={16} style={{ color: 'var(--gold)', flexShrink: 0 }} /> {b}
                </div>
              ))}
              <div style={{ marginTop: '32px' }}>
                <button className="btn-primary" onClick={() => { window.location.href = '/#contact'; }}>
                  Get In Touch <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Values */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="fade-in">
              {values.map((v, i) => (
                <div key={i} style={{
                  background: 'var(--gray-50)', borderRadius: 'var(--radius-lg)',
                  padding: '28px', border: '1px solid var(--gray-200)',
                }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '10px',
                    background: 'linear-gradient(135deg, var(--primary), var(--primary-light))',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', marginBottom: '14px',
                  }}>{v.icon}</div>
                  <h4 style={{ fontFamily: 'Playfair Display', fontSize: '18px', color: 'var(--primary-dark)', marginBottom: '8px' }}>{v.title}</h4>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="careers-section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }} className="fade-in">
            <span className="section-label">Opportunities</span>
            <h2 className="section-title">Current Openings</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Don't see a perfect match? Send us your CV — we're always keen to hear from
              talented regulatory professionals.
            </p>
          </div>
          <div className="careers-grid">
            {opportunities.map((o, i) => (
              <div key={i} className="career-item fade-in">
                <span className="career-item-tag">{o.tag}</span>
                <h3 className="career-item-title">{o.title}</h3>
                <p className="career-item-desc" style={{ marginBottom: '20px' }}>{o.desc}</p>
                <button
                  className="btn-teal"
                  style={{ fontSize: '13px', padding: '10px 20px' }}
                  onClick={() => { window.location.href = '/#contact'; }}
                >
                  Apply Now <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spontaneous application */}
      <section style={{ padding: '80px 0', background: 'var(--white)' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, var(--primary-dark), var(--primary))',
            borderRadius: 'var(--radius-lg)', padding: '60px 48px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: '32px', flexWrap: 'wrap',
          }} className="fade-in">
            <div>
              <Briefcase size={36} style={{ color: 'var(--gold)', marginBottom: '16px' }} />
              <h2 className="section-title" style={{ color: '#fff', marginBottom: '8px' }}>
                Don't See a Suitable Role?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '16px', maxWidth: '500px' }}>
                We welcome speculative applications from experienced regulatory professionals.
                Send us your CV and a brief introduction — we'd love to hear from you.
              </p>
            </div>
            <button className="btn-primary" onClick={() => { window.location.href = '/#contact'; }}>
              Send Your CV <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="page-cta-strip">
        <div className="container">
          <div className="page-cta-strip-inner">
            <div>
              <h2>Interested in our training programmes instead?</h2>
              <p>Advance your career with our mentoring and training offerings.</p>
            </div>
            <button className="btn-teal" onClick={() => { window.location.href = '/training'; }}>
              View Training & Mentoring <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
