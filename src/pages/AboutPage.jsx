import { useEffect, useRef } from 'react';
import { CheckCircle, ArrowRight, Globe, Shield, Award, TrendingUp, Users, Microscope, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
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

const values = [
  { icon: <Shield size={22} />, title: 'Integrity', desc: 'We uphold the highest standards of professional and regulatory integrity in everything we do.' },
  { icon: <Award size={22} />, title: 'Excellence', desc: 'We are committed to delivering outstanding results for every client, every time.' },
  { icon: <Globe size={22} />, title: 'Global Perspective', desc: 'We bring international regulatory expertise to regional and global challenges.' },
  { icon: <Users size={22} />, title: 'Partnership', desc: 'We work as a true extension of your team, invested in your long-term success.' },
  { icon: <TrendingUp size={22} />, title: 'Innovation', desc: 'We apply cutting-edge regulatory strategies to accelerate approvals and market access.' },
  { icon: <Microscope size={22} />, title: 'Science-Led', desc: 'Our advice is always grounded in rigorous scientific and regulatory evidence.' },
];

const milestones = [
  { year: 'Foundation', title: 'Reg Excellence Established', desc: 'Founded to bridge the gap between scientific innovation and regulatory approval in global markets.' },
  { year: 'Expertise', title: 'Global Markets Regulatory Mastery', desc: 'Built deep expertise across international regulatory frameworks and key pharmaceutical markets.' },
  { year: 'Training', title: 'Training & Mentoring Launch', desc: 'Launched structured training programmes and career mentoring for pharmaceutical professionals.' },
  { year: 'Global', title: 'International Expansion', desc: 'Extended services to MHRA, EMA and other international regulatory bodies for UK and global clients.' },
];

export default function AboutPage() {
  const ref = useFadeIn();
  const navigate = useNavigate();
  useSEO({
    title: 'About Reg Excellence | GCC & Global Pharmaceutical Regulatory Consultants',
    description: 'Learn about Reg Excellence — a leading UK-based pharmaceutical regulatory affairs & business development consultancy led by Dr. Anwar Hussain Mohammed PhD. 25+ years experience.',
    keywords: 'Dr. Anwar Hussain Mohammed PhD, Reg Excellence about, GCC regulatory affairs consultancy UK, pharmaceutical regulatory experts Manchester, SFDA MOHAP regulatory consultant',
    schema: {
      '@type': 'AboutPage',
      'mainEntity': {
        '@type': 'Person',
        'name': 'Dr. Anwar Hussain Mohammed, PhD',
        '@id': 'https://regexcellence.co.uk/#founder'
      }
    }
  });

  const goToContact = () => {
    navigate('/consultation');
  };

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="about-page-hero">
        <div className="container">
          <span className="section-label">About Us</span>
          <h1 className="section-title" style={{ marginBottom: '16px' }}>
            About Reg Excellence
          </h1>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A pharmaceutical regulatory affairs consultancy dedicated to helping
            global pharmaceutical companies navigate international regulatory landscapes
            with confidence, speed, and precision. Based in <strong style={{ color: '#FFB3AA' }}>Altrincham, Manchester, United Kingdom</strong>.
          </p>
          <div style={{ marginTop: '36px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={goToContact}>
              Book a Consultation <ArrowRight size={16} />
            </button>
            <a href="/services" className="btn-outline">Our Services</a>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section style={{ padding: '100px 0', background: 'var(--white)' }}>
        <div className="container">
          <div className="about-page-inner split">
            <div className="fade-in">
              <img
                src="/service44.jpg"
                alt="Pharmaceutical regulatory consulting"
                className="about-image"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #9E2B1F, #C8382A)';
                  e.target.style.minHeight = '400px';
                }}
              />
            </div>
            <div className="fade-in">
              <span className="section-label">Who We Are</span>
              <h2 className="section-title">Your Trusted Regulatory Partner</h2>
              <p className="section-subtitle" style={{ marginBottom: '28px' }}>
                Reg Excellence is a specialist pharmaceutical regulatory affairs consultancy
                providing expert guidance to pharmaceutical companies seeking to register, commercialise,
                and grow their products across global markets.
              </p>
              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '28px' }}>
                Founded by Dr. Anwar Hussain Mohammed PhD, with over <strong>25 years of experience</strong> in
                the pharmaceutical industry, Reg Excellence brings unparalleled expertise in global regulatory
                submissions, product registrations, CMC, biologics, oncology, rare diseases, and pharmaceutical
                business development.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '32px' }}>
                {[
                  'Global Markets Regulatory Strategy', 'Product Registration',
                  'CMC Dossier Preparation', 'Market Access Planning',
                  'Biologics & Biosimilars', 'Lifecycle Management',
                  'Corporate Training', 'Career Mentoring',
                ].map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-secondary)' }}>
                    <CheckCircle size={15} style={{ color: 'var(--primary)', flexShrink: 0 }} /> {f}
                  </div>
                ))}
              </div>
              <button className="btn-primary" onClick={goToContact}>
                Work With Us <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Spotlight */}
      <section style={{ padding: '100px 0', background: 'linear-gradient(135deg, #111111 0%, #1e1e1e 50%, #2a2a2a 100%)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }} className="fade-in">
            <span className="section-label" style={{ color: '#FFB3AA' }}>Our Leadership</span>
            <h2 className="section-title" style={{ color: '#fff' }}>Meet the Team</h2>
          </div>

          {/* Founder */}
          <div className="about-page-inner split-founder" style={{ marginBottom: '80px' }}>
            <div className="fade-in" style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: '300px' }}>
                <img
                  src="/founder.jpg"
                  alt="Dr. Anwar Hussain Mohammed PhD"
                  style={{ width: '100%', height: '360px', objectFit: 'cover', borderRadius: '16px', border: '2px solid var(--primary)', display: 'block', boxShadow: '0 12px 32px rgba(0,0,0,0.4)' }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div className="fade-in">
              <span className="section-label" style={{ color: '#FFB3AA' }}>Founder & CEO</span>
              <h2 className="section-title" style={{ color: '#fff', marginBottom: '20px' }}>
                Dr. Anwar Hussain<br />Mohammed PhD
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'rgba(255,255,255,0.82)', marginBottom: '20px' }}>
                Dr. Anwar Hussain Mohammed PhD is a Regulatory Affairs and Business Development
                professional with over <strong style={{ color: '#FFB3AA' }}>25 years of experience</strong> in
                the pharmaceutical industry. He has extensive expertise in global regulatory
                submissions, product registrations, lifecycle management, market access, CMC,
                biologics, vaccines, oncology, and rare diseases.
              </p>
              <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', marginBottom: '28px' }}>
                His career spans leading multinational pharmaceutical companies where he has successfully
                registered hundreds of products across global and international markets, building bridges
                between regulatory science and commercial success.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                {['Global Regulatory Affairs', 'CMC', 'Biologics', 'Vaccines', 'Oncology', 'Rare Diseases', 'Market Access', 'Business Development'].map((t, i) => (
                  <span key={i} style={{ background: 'rgba(200,56,42,0.2)', border: '1px solid rgba(200,56,42,0.4)', color: '#FFB3AA', fontSize: '12px', fontWeight: 600, padding: '5px 12px', borderRadius: '100px', letterSpacing: '0.5px' }}>{t}</span>
                ))}
              </div>
              <button className="btn-primary" onClick={goToContact}>
                Book a Consultation <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Operations Director */}
          <div className="about-page-inner" style={{ display: 'block', background: 'rgba(255, 255, 255, 0.03)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div className="fade-in">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
                <div>
                  <span className="section-label" style={{ color: '#FFB3AA' }}>Operations Director</span>
                  <h2 className="section-title" style={{ color: '#fff', margin: 0 }}>
                    Farheen Anjum MSc MBA
                  </h2>
                </div>
                <a
                  href="https://www.linkedin.com/in/farheen-anjum-99628a98?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Farheen Anjum LinkedIn Profile"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: '#0A66C2',
                    color: '#ffffff',
                    padding: '10px 20px',
                    borderRadius: '100px',
                    fontSize: '14px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    boxShadow: '0 4px 14px rgba(10, 102, 194, 0.4)',
                  }}
                >
                  <ExternalLink size={18} /> Connect on LinkedIn
                </a>
              </div>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'rgba(255,255,255,0.82)', marginBottom: '20px' }}>
                Farheen Anjum brings over <strong style={{ color: '#FFB3AA' }}>10 years of experience</strong> in 
                pharmaceutical business development, licensing, and out-licensing services. 
                Her strategic vision and operational excellence drive the successful execution of 
                complex regulatory and commercial projects.
              </p>
              <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', marginBottom: '28px' }}>
                With a strong foundation in both science and business administration, Farheen excels at building strategic partnerships and managing end-to-end operational workflows for our clients across global markets.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                {['Business Development', 'Licensing', 'Out-Licensing', 'Operations Management', 'Strategic Partnerships', 'Project Management'].map((t, i) => (
                  <span key={i} style={{ background: 'rgba(200,56,42,0.2)', border: '1px solid rgba(200,56,42,0.4)', color: '#FFB3AA', fontSize: '12px', fontWeight: 600, padding: '5px 12px', borderRadius: '100px', letterSpacing: '0.5px' }}>{t}</span>
                ))}
              </div>
              <button className="btn-primary" onClick={goToContact}>
                Get in Touch <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section style={{ padding: '100px 0', background: 'var(--gray-50)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }} className="fade-in">
            <span className="section-label">What We Stand For</span>
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              The principles that guide every engagement and define how we deliver for our clients.
            </p>
          </div>
          <div className="about-values-grid">
            {values.map((v, i) => (
              <div key={i} className="fade-in" style={{
                background: 'var(--white)', borderRadius: '16px', padding: '32px 28px',
                border: '1px solid var(--gray-200)', transition: 'all 0.3s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, var(--primary-dark), var(--primary))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', marginBottom: '20px' }}>{v.icon}</div>
                <h3 style={{ fontFamily: 'Playfair Display', fontSize: '20px', color: 'var(--primary-dark)', marginBottom: '10px' }}>{v.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section style={{ padding: '100px 0', background: 'var(--white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }} className="fade-in">
            <span className="section-label">Our Story</span>
            <h2 className="section-title">Our Journey</h2>
          </div>
          <div className="about-timeline-grid">
            {milestones.map((m, i) => (
              <div key={i} className="fade-in" style={{ textAlign: 'center', padding: '32px 20px', background: 'var(--gray-50)', borderRadius: '16px', border: '1px solid var(--gray-200)', position: 'relative' }}>
                <div style={{ fontFamily: 'Playfair Display', fontSize: '13px', fontWeight: 700, color: 'var(--primary)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>{m.year}</div>
                <h4 style={{ fontFamily: 'Playfair Display', fontSize: '17px', color: 'var(--primary-dark)', marginBottom: '10px' }}>{m.title}</h4>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{m.desc}</p>
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
              <h2>Ready to work with us?</h2>
              <p>Book a consultation with Dr. Anwar Hussain Mohammed PhD today.</p>
            </div>
            <button className="btn-teal" onClick={goToContact}>
              Book a Consultation <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
