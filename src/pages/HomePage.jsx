import { useEffect, useRef, useState } from 'react';
import {
  Globe, FileText, TrendingUp, Microscope, Building2,
  Shield, Award, CheckCircle, ArrowRight, Phone, Mail,
  MapPin, Star, Download, BookOpen, Users, ChevronRight
} from 'lucide-react';

function useFadeIn() {
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    const els = ref.current?.querySelectorAll('.fade-in') || [];
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

function scrollToContact() {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
}

// ─── HERO ───────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <img
        src="/logo.png"
        alt=""
        aria-hidden="true"
        className="hero-logo-watermark"
      />
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            GCC &amp; International Regulatory Experts | UK
          </div>
          <h1 className="hero-title">
            Navigating <span className="gold">Regulatory</span><br />
            Excellence in GCC
          </h1>
          <p className="hero-subtitle">
            UK-based pharmaceutical regulatory affairs consulting across GCC, MHRA, EMA
            and global markets — expert guidance for product registration, market access and business development.
          </p>
          <div className="hero-cta-row">
            <button className="btn-primary" onClick={scrollToContact}>
              Book a Consultation <ArrowRight size={16} />
            </button>
            <a href="/services" className="btn-outline">
              Our Services
            </a>
          </div>
          <div className="hero-stats">

            <div>
              <div className="hero-stat-value">50+</div>
              <div className="hero-stat-label">Products Registered</div>
            </div>
            <div>
              <div className="hero-stat-value">10+</div>
              <div className="hero-stat-label">GCC Markets</div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-card">
            <div className="hero-card-title">Core Expertise</div>
            {[
              { icon: <Globe size={16} />, text: 'GCC Regulatory Submissions' },
              { icon: <FileText size={16} />, text: 'Product Registrations & Renewals' },
              { icon: <TrendingUp size={16} />, text: 'Market Access Strategy' },
              { icon: <Microscope size={16} />, text: 'Biologics, Vaccines & Oncology' },
              { icon: <Building2 size={16} />, text: 'Business Development' },
              { icon: <Shield size={16} />, text: 'CMC & Dossier Preparation' },
              { icon: <Award size={16} />, text: 'Lifecycle Management' },
            ].map((item, i) => (
              <div key={i} className="hero-card-item">
                <div className="hero-card-icon">{item.icon}</div>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CLIENTS & PARTNERS ─────────────────────────────────────────────────
function ClientsPartners() {
  const clients = [
    { src: '/clients/pfizer.png', alt: 'Pfizer' },
    { src: '/clients/astrazeneca.png', alt: 'AstraZeneca' },
    { src: '/clients/ablynx.png', alt: 'Ablynx — A Sanofi Company' },
    { src: '/clients/teva.png', alt: 'Teva Pharmaceuticals' },
    { src: '/clients/qlife.jpg', alt: 'QLife Pharma' },
  ];
  // Duplicate for seamless loop
  const doubled = [...clients, ...clients];
  return (
    <section className="clients-section">
      <div className="container">
        <div className="clients-header">
          <span className="section-label">Trusted By</span>
          <h2 className="section-title">Clients &amp; Partners</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Proud to have supported leading pharmaceutical companies across GCC and global markets.
          </p>
        </div>
      </div>
      <div className="clients-marquee-wrap">
        <div className="clients-marquee">
          {doubled.map((c, i) => (
            <div key={i} className="client-logo-card">
              <img src={c.src} alt={c.alt} className="client-logo-img" loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── ABOUT ──────────────────────────────────────────────────────────────
function About() {
  const ref = useFadeIn();
  return (
    <section className="about" ref={ref}>
      <div className="container">
        <div className="about-inner">
          <div className="about-image-wrap fade-in">
            <img
              src="/service44.jpg"
              alt="Pharmaceutical laboratory"
              className="about-image"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                e.target.style.background = 'linear-gradient(135deg,#0b5c5e,#127a7d)';
                e.target.style.minHeight = '500px';
              }}
            />

          </div>
          <div className="about-text fade-in">
            <span className="section-label">About Us</span>
            <h2 className="section-title">Your Trusted GCC Regulatory Partner</h2>
            <p className="section-subtitle" style={{ marginBottom: '28px' }}>
              Reg Excellence provides specialized regulatory affairs consulting, helping
              pharmaceutical companies navigate the complex GCC regulatory landscape with
              confidence and precision.
            </p>
            <div className="about-features">
              {[
                'GCC Regulatory Strategy',
                'NDA/ANDA Submissions',
                'Product Registration',
                'Post-Approval Changes',
                'Regulatory Intelligence',
                'Global Market Access',
                'Biologics & Biosimilars',
                'Orphan Drug Designation',
              ].map((f, i) => (
                <div key={i} className="about-feature">
                  <CheckCircle size={16} className="about-feature-icon" />
                  <span className="about-feature-text">{f}</span>
                </div>
              ))}
            </div>
            <button className="btn-primary" onClick={scrollToContact}>
              Book a Consultation <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FOUNDER ────────────────────────────────────────────────────────────
function Founder() {
  const ref = useFadeIn();
  const tags = [
    'GCC Regulatory Affairs', 'CMC', 'Biologics', 'Vaccines',
    'Oncology', 'Rare Diseases', 'Market Access', 'Lifecycle Management',
    'Business Development', 'Product Registration',
  ];
  const founderStats = [
    { value: '25+', label: 'Years\nExperience' },
    { value: 'GCC &\nGlobal', label: 'Market\nExpertise' },
    { value: '100s', label: 'Regulatory\nSubmissions' },
    { value: 'PhD', label: 'Pharmaceutical\nLeadership' },
  ];
  return (
    <section className="founder" ref={ref}>
      <div className="container">
        <div className="founder-inner">
          {/* Left — Image + Badge */}
          <div className="founder-image-wrap fade-in">
            <div className="founder-image-frame">
              <img
                src="/founder.png"
                alt="Dr. Anwar Hussain Mohammed PhD"
                className="founder-image"
                loading="lazy"
                decoding="async"
              />
              <div className="founder-gold-accent" />
            </div>
            {/* Experience Badge */}
            <div className="founder-badge">
              <Award size={18} className="founder-badge-icon" />
              <div className="founder-badge-text">
                <span className="founder-badge-value">25+</span>
                <span className="founder-badge-label">Years Experience</span>
              </div>
            </div>
          </div>

          {/* Right — Text */}
          <div className="founder-text fade-in">
            <span className="section-label">Meet Our Founder</span>
            <h2 className="section-title">Dr. Anwar Hussain<br />Mohammed PhD</h2>
            <p className="founder-bio">
              Dr. Anwar Hussain Mohammed PhD is a Regulatory Affairs and Business Development
              professional with over <strong style={{ color: '#FFB3AA' }}>25 years of experience</strong> in
              the pharmaceutical industry. He has extensive expertise in GCC and global regulatory
              submissions, product registrations, lifecycle management, market access, CMC,
              biologics, vaccines, oncology, and rare diseases.
            </p>
            <p className="founder-bio" style={{ marginBottom: '24px' }}>
              His career spans leading multinational pharmaceutical companies where he has
              successfully registered hundreds of products across GCC and international markets,
              building bridges between regulatory science and commercial success.
            </p>
            <div className="founder-expertise">
              {tags.map((tag, i) => (
                <span key={i} className="founder-tag">{tag}</span>
              ))}
            </div>

            {/* Founder Stats Row */}
            <div className="founder-stats-row">
              {founderStats.map((s, i) => (
                <div key={i} className="founder-stat-card">
                  <div className="founder-stat-value">{s.value}</div>
                  <div className="founder-stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            <button className="btn-primary" onClick={scrollToContact}>
              Book a Consultation <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── STATS COUNTER ──────────────────────────────────────────────────────
function StatsCounter() {
  const stats = [
    { value: 50, suffix: '+', label: 'Products Registered', icon: '📋' },
    { value: 8,  suffix: '+', label: 'GCC & Global Markets', icon: '🌍' },
    { value: 100, suffix: '+', label: 'Professionals Trained', icon: '🎓' },
    { value: 10, suffix: '+', label: 'Therapeutic Areas', icon: '🔬' },
  ];
  const refs = stats.map(() => useRef(null));
  useEffect(() => {
    refs.forEach((ref, idx) => {
      const el = ref.current;
      if (!el) return;
      const observer = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const target = stats[idx].value;
        const duration = 1800;
        const step = Math.ceil(target / (duration / 16));
        let current = 0;
        const tick = () => {
          current = Math.min(current + step, target);
          el.textContent = current + stats[idx].suffix;
          if (current < target) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }, { threshold: 0.4 });
      observer.observe(el);
    });
  }, []);
  return (
    <section className="stats-counter">
      <div className="container">
        <div className="stats-counter-grid">
          {stats.map((s, i) => (
            <div key={i} className="stats-counter-card">
              <div className="stats-counter-icon">{s.icon}</div>
              <div className="stats-counter-value" ref={refs[i]}>0{s.suffix}</div>
              <div className="stats-counter-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SERVICES ───────────────────────────────────────────────────────────
function ServicesSection() {
  const ref = useFadeIn();
  const services = [
    { icon: <Globe size={24} />, title: 'GCC Regulatory Submissions', desc: 'Expert preparation and submission of regulatory dossiers for GCC markets including UAE, Saudi Arabia, Kuwait, Qatar, Bahrain and Oman.' },
    { icon: <FileText size={24} />, title: 'Product Registration', desc: 'End-to-end product registration management from initial filing through approval, covering all therapeutic categories.' },
    { icon: <TrendingUp size={24} />, title: 'Market Access Strategy', desc: 'Comprehensive market access planning to accelerate product launches and optimize reimbursement outcomes in GCC markets.' },
    { icon: <Microscope size={24} />, title: 'CMC & Dossier Preparation', desc: 'Chemistry, Manufacturing and Controls documentation expertise for small molecules, biologics, vaccines and complex formulations.' },
    { icon: <Shield size={24} />, title: 'Lifecycle Management', desc: 'Post-approval variation management, renewals and line extensions to maximize product value throughout its commercial lifecycle.' },
    { icon: <Building2 size={24} />, title: 'Business Development', desc: 'Strategic pharmaceutical business development including licensing, partnerships and market entry strategies for GCC expansion.' },
  ];
  return (
    <section className="services" ref={ref}>
      <div className="container">
        <div className="services-header fade-in">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Comprehensive Regulatory Services</h2>
          <p className="section-subtitle">
            From initial regulatory strategy to post-market surveillance, we cover the full
            spectrum of pharmaceutical regulatory requirements in GCC and global markets.
          </p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card fade-in">
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── THERAPEUTIC AREAS ──────────────────────────────────────────────────
function TherapeuticAreas() {
  const ref = useFadeIn();
  const areas = [
    'Oncology', 'Rare Diseases', 'Biologics', 'Biosimilars',
    'Vaccines', 'Cardiovascular', 'Diabetes & Metabolic',
    'Respiratory', 'Neurology', 'Immunology', 'Infectious Diseases',
    'Ophthalmology', 'Dermatology', 'Gastroenterology',
    'Haematology', 'Endocrinology', 'Paediatrics', 'Generics',
  ];
  return (
    <section className="therapeutic" ref={ref}>
      <div className="container">
        <div className="therapeutic-header fade-in">
          <span className="section-label">Expertise</span>
          <h2 className="section-title">Therapeutic Area Coverage</h2>
        </div>
        <div className="therapeutic-grid fade-in">
          {areas.map((area, i) => (
            <div key={i} className="therapeutic-chip">{area}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── COUNTRIES WE HELP WITH ─────────────────────────────────────────────
function Agencies() {
  const ref = useFadeIn();
  const countries = [
    { flagCode: 'za', country: 'Africa' },
    { flagCode: 'br', country: 'Brazil' },
    { flagCode: 'cn', country: 'China' },
    { flagCode: 'jp', country: 'Japan' },
    { flagCode: 'ru', country: 'Russia' },
    { flagCode: 'us', country: 'USA' },
    { flagCode: 'gb', country: 'UK' },
    { flagCode: 'eu', country: 'Europe' },
  ];
  return (
    <section className="agencies" ref={ref}>
      <div className="container">
        <div className="agencies-header fade-in">
          <span className="section-label">Global Reach</span>
          <h2 className="section-title">Countries We Help With</h2>
        </div>
        <div className="agencies-grid fade-in">
          {countries.map((a, i) => (
            <div key={i} className="agency-card">
              <div className="agency-flag">
                <img
                  src={`https://flagcdn.com/w160/${a.flagCode}.png`}
                  alt={`${a.country} flag`}
                  className="agency-flag-img"
                />
              </div>
              <div className="agency-country">{a.country}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ───────────────────────────────────────────────────────
function Testimonials() {
  const ref = useFadeIn();
  const testimonials = [
    {
      text: "Dr. Anwar's expertise in GCC regulatory submissions was invaluable. He guided our product registration process with professionalism and deep knowledge of SFDA requirements, helping us achieve approval 3 months ahead of schedule.",
      name: "Sarah Al-Mansouri",
      role: "Regulatory Affairs Director, Gulf Pharma Co.",
      initials: "SA",
    },
    {
      text: "The Career Mentoring program transformed my professional trajectory. Dr. Anwar's one-to-one guidance helped me transition into a senior regulatory role and gave me confidence to navigate complex GCC submissions independently.",
      name: "Ahmed Hassan",
      role: "Senior Regulatory Affairs Manager",
      initials: "AH",
    },
    {
      text: "Exceptional knowledge of biologics and rare disease pathways across GCC. Reg Excellence delivered a comprehensive market access strategy that significantly accelerated our product launch timeline across all Gulf markets.",
      name: "Dr. Priya Nair",
      role: "VP Medical Affairs, International Biotech",
      initials: "PN",
    },
  ];
  return (
    <section className="testimonials" ref={ref}>
      <div className="container">
        <div className="testimonials-header fade-in">
          <span className="section-label">Client Stories</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Trusted by pharmaceutical companies and regulatory professionals across GCC and beyond.
          </p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card fade-in">
              <div className="testimonial-quote-icon">"</div>
              <div className="testimonial-stars">
                {[...Array(5)].map((_, j) => <span key={j} className="star">★</span>)}
              </div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.initials}</div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── LEAD CAPTURE ───────────────────────────────────────────────────────
function LeadCapture() {
  const ref = useFadeIn();
  const [form, setForm] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email) {
      console.log('Lead captured:', form);
      setSubmitted(true);
    }
  };

  return (
    <section className="lead-capture" ref={ref}>
      <div className="container">
        <div className="lead-capture-inner">
          <div className="lead-capture-text fade-in">
            <span className="section-label">Free Resource</span>
            <h2 className="section-title">Get Your Free Career Guide</h2>
            <p>
              Download our comprehensive PDF guide — written by Dr. Anwar Hussain Mohammed PhD —
              on how to build a successful career in GCC Regulatory Affairs.
            </p>
            <div className="lead-capture-pdf">
              <div className="lead-capture-pdf-icon">📄</div>
              <div className="lead-capture-pdf-info">
                <strong>"Guide to Building a Career in GCC Regulatory Affairs"</strong>
                <span>Free PDF • Expert insights from a seasoned professional</span>
              </div>
            </div>
            <div style={{ marginTop: '20px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              {['Career pathways in GCC RA', 'Key skills employers look for', 'Top regulatory bodies & roles', 'Salary benchmarks & growth'].map((p, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'rgba(255,255,255,0.75)' }}>
                  <CheckCircle size={14} style={{ color: 'var(--gold)', flexShrink: 0 }} /> {p}
                </div>
              ))}
            </div>
          </div>

          <div className="lead-capture-form-card fade-in">
            {submitted ? (
              <div className="form-success">
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎉</div>
                <h3 style={{ color: 'var(--gold)', marginBottom: '8px' }}>Thank you, {form.name}!</h3>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '15px' }}>
                  Your free guide is on its way to {form.email}. Check your inbox shortly.
                </p>
              </div>
            ) : (
              <>
                <h3>Download Free Guide</h3>
                <p>Enter your details to receive the guide instantly.</p>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      placeholder="Dr. Jane Smith"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}>
                    <Download size={16} /> Download Free Guide
                  </button>
                  <p style={{ textAlign: 'center', fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginTop: '12px' }}>
                    No spam. Unsubscribe anytime.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ────────────────────────────────────────────────────────────
function Contact() {
  const ref = useFadeIn();
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form:', form);
    setSubmitted(true);
  };

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }} className="fade-in">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Book a Consultation</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Ready to navigate GCC regulatory requirements with confidence?
            Schedule a consultation with Dr. Anwar Hussain Mohammed PhD today.
          </p>
        </div>
        <div className="contact-inner">
          <div className="fade-in">
            <h3 className="contact-info-title">Contact Information</h3>
            <p className="contact-info-sub">
              Reach out directly or fill in the form and we'll get back to you within 24 hours.
            </p>
            <div className="contact-detail">
              <div className="contact-detail-icon"><Mail size={20} /></div>
              <div>
                <div className="contact-detail-label">Email</div>
                <div className="contact-detail-value">info@regexcellence.com</div>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon"><Phone size={20} /></div>
              <div>
                <div className="contact-detail-label">Phone / WhatsApp</div>
                <div className="contact-detail-value">+971 50 000 0000</div>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon"><MapPin size={20} /></div>
              <div>
                <div className="contact-detail-label">Location</div>
                <div className="contact-detail-value">Dubai, United Arab Emirates</div>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon"><BookOpen size={20} /></div>
              <div>
                <div className="contact-detail-label">Calendly</div>
                <div className="contact-detail-value" style={{ color: 'var(--primary)', cursor: 'pointer' }}>
                  Schedule via Calendly (coming soon)
                </div>
              </div>
            </div>
          </div>

          <div className="fade-in">
            <div className="contact-form">
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
                  <h3 style={{ color: 'var(--primary-dark)', marginBottom: '8px' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    Thank you for reaching out. We'll respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontFamily: 'Inter', fontSize: '20px', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '24px' }}>
                    Send Us a Message
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input type="text" placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                    </div>
                    <div className="form-group">
                      <label>Email *</label>
                      <input type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Company / Organisation</label>
                    <input type="text" placeholder="Your company" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label>Service of Interest</label>
                    <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} style={{ backgroundColor: '#fff', color: '#1a2e2e' }}>
                      <option value="">Select a service...</option>
                      <option>GCC Regulatory Submissions</option>
                      <option>Product Registration</option>
                      <option>Market Access Strategy</option>
                      <option>CMC & Dossier Preparation</option>
                      <option>Career Mentoring</option>
                      <option>Corporate Training</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Message *</label>
                    <textarea placeholder="Tell us about your regulatory challenge..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required />
                  </div>
                  <button type="submit" className="btn-teal" style={{ width: '100%', justifyContent: 'center' }}>
                    Send Message <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── HOME PAGE ──────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientsPartners />
      <About />
      <Founder />
      <StatsCounter />
      <ServicesSection />
      <TherapeuticAreas />
      <Agencies />
      <Testimonials />
      <LeadCapture />
      <Contact />
    </>
  );
}
