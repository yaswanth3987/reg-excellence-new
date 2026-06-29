import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Globe, FileText, TrendingUp, Microscope, Building2,
  Shield, Award, CheckCircle, ArrowRight, Phone, Mail,
  MapPin, Star, Users, Loader2
} from 'lucide-react';
import ConsultationForm from '../components/ConsultationForm';

// ─── EmailJS Configuration ────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || 'YOUR_PUBLIC_KEY';
// ─────────────────────────────────────────────────────────────────────────────

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

// HERO — uses the CSS .hero-content layout with .hero-bg overlay
function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            25+ Years Pharmaceutical Regulatory Experience
          </div>
          <h1 className="hero-title">
            Navigating <span className="gold">Regulatory</span><br />
            Excellence in GCC
          </h1>
          <p className="hero-subtitle">
            Pharmaceutical regulatory affairs consulting across GCC, MHRA, EMA
            and global markets &mdash; expert guidance for product registration, market access and business development.
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
              <div className="hero-stat-value">25+</div>
              <div className="hero-stat-label">Years Experience</div>
            </div>
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
              { icon: <FileText size={16} />, text: 'Product Registrations and Renewals' },
              { icon: <TrendingUp size={16} />, text: 'Market Access Strategy' },
              { icon: <Microscope size={16} />, text: 'Biologics, Vaccines and Oncology' },
              { icon: <Building2 size={16} />, text: 'Business Development' },
              { icon: <Shield size={16} />, text: 'CMC and Dossier Preparation' },
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

// CLIENTS AND PARTNERS — marquee using correct CSS classes
function ClientsPartners() {
  const clients = [
    { src: '/clients/pfizer.png', alt: 'Pfizer' },
    { src: '/clients/astrazeneca.png', alt: 'AstraZeneca' },
    { src: '/clients/ablynx.png', alt: 'Ablynx - A Sanofi Company' },
    { src: '/clients/teva.png', alt: 'Teva Pharmaceuticals' },
    { src: '/clients/qlife.jpg', alt: 'QLife Pharma' },
  ];
  const doubled = [...clients, ...clients];
  return (
    <section className="clients-section">
      <div className="container">
        <div className="clients-header">
          <span className="section-label">Trusted By</span>
          <h2 className="section-title">Clients and Partners</h2>
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

// ABOUT
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
                'Biologics and Biosimilars',
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

// FOUNDER
function Founder() {
  const ref = useFadeIn();
  const tags = [
    'GCC Regulatory Affairs', 'CMC', 'Biologics', 'Vaccines',
    'Oncology', 'Rare Diseases', 'Market Access', 'Lifecycle Management',
    'Business Development', 'Product Registration',
  ];
  const founderStats = [
    { value: '25+', label: 'Years Experience' },
    { value: 'GCC & Global', label: 'Market Expertise' },
    { value: '100s', label: 'Regulatory Submissions' },
  ];
  return (
    <section className="founder" ref={ref}>
      <div className="container">
        <div className="founder-inner">
          <div className="founder-image-wrap fade-in">
            <div className="founder-image-frame">
              <img
                src="/founder.png"
                alt="Dr. Anwar Hussain Mohammed PhD - Founder"
                className="founder-image"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.target.style.background = 'linear-gradient(135deg,#0b5c5e,#127a7d)';
                }}
              />
              <div className="founder-gold-accent" />
            </div>
          </div>
          <div className="founder-text fade-in">
            <span className="section-label">Meet Our Founder</span>
            <h2 className="section-title">Dr. Anwar Hussain Mohammed PhD</h2>
            <p className="section-subtitle" style={{ marginBottom: '20px' }}>
              Dr. Anwar Hussain Mohammed PhD, is a Regulatory Affairs and Business Development
              professional with over 25 years of experience in the pharmaceutical industry.
            </p>
            <p className="founder-bio">
              He has extensive expertise in GCC and global regulatory submissions, product
              registrations, lifecycle management, market access, CMC, biologics, vaccines,
              oncology and rare diseases.
            </p>
            <div className="founder-expertise">
              {tags.map((tag, i) => (
                <span key={i} className="founder-tag">{tag}</span>
              ))}
            </div>
            <div className="founder-stats-row" style={{ marginBottom: '24px' }}>
              {founderStats.map((s, i) => (
                <div key={i} className="founder-stat-card">
                  <div className="founder-stat-value">{s.value}</div>
                  <div className="founder-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
            <button className="btn-primary" onClick={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Book a Consultation <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// STATS COUNTER — 5 items in a 5-col grid
function StatsCounter() {
  const stats = [
    { value: 25,  suffix: '+', label: 'Years Experience',      icon: <Award size={24} /> },
    { value: 50,  suffix: '+', label: 'Products Registered',   icon: <FileText size={24} /> },
    { value: 8,   suffix: '+', label: 'GCC & Global Markets',  icon: <Globe size={24} /> },
    { value: 100, suffix: '+', label: 'Professionals Trained', icon: <Users size={24} /> },
    { value: 10,  suffix: '+', label: 'Therapeutic Areas',     icon: <Microscope size={24} /> },
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

// SERVICES
function ServicesSection() {
  const ref = useFadeIn();
  const services = [
    { icon: <Globe size={24} />, title: 'GCC Regulatory Submissions', desc: 'Expert preparation and submission of regulatory dossiers for GCC markets including UAE, Saudi Arabia, Kuwait, Qatar, Bahrain and Oman.' },
    { icon: <FileText size={24} />, title: 'Product Registration', desc: 'End-to-end product registration management from initial filing through approval, covering all therapeutic categories.' },
    { icon: <TrendingUp size={24} />, title: 'Market Access Strategy', desc: 'Comprehensive market access planning to accelerate product launches and optimize reimbursement outcomes in GCC markets.' },
    { icon: <Microscope size={24} />, title: 'CMC and Dossier Preparation', desc: 'Chemistry, Manufacturing and Controls documentation expertise for small molecules, biologics, vaccines and complex formulations.' },
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

// THERAPEUTIC AREAS
function TherapeuticAreas() {
  const ref = useFadeIn();
  const areas = [
    'Oncology', 'Rare Diseases', 'Biologics', 'Biosimilars',
    'Vaccines', 'Cardiovascular', 'Diabetes and Metabolic',
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

// GLOBAL REACH
function Agencies() {
  const ref = useFadeIn();
  const countries = [
    { flagCode: 'us', country: 'US FDA' },
    { flagCode: 'jp', country: 'PMDA (Japan)' },
    { flagCode: 'gb', country: 'HA (Health Authority)' },
    { flagCode: 'br', country: 'ANVISA (Brazil)' },
    { flagCode: 'eu', country: 'EMA (Europe)' },
    { flagCode: 'sa', country: 'KSA / SFDA' },
    { flagCode: 'ae', country: 'UAE / MOHAP' },
  ];
  return (
    <section className="agencies" ref={ref}>
      <div className="container">
        <div className="agencies-header fade-in">
          <span className="section-label">Global Reach</span>
          <h2 className="section-title">Markets We Serve</h2>
          <p className="section-subtitle" style={{ margin: '0 auto', color: 'rgba(255,255,255,0.65)' }}>
            Reg Excellence supports regulatory submissions across major global markets.
          </p>
        </div>
        <div className="agencies-grid fade-in">
          {countries.map((c, i) => (
            <div key={i} className="agency-card">
              <img
                src={"https://flagcdn.com/w80/" + c.flagCode + ".png"}
                alt={c.country}
                className="agency-flag"
                loading="lazy"
              />
              <span className="agency-name">{c.country}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// TESTIMONIALS
function Testimonials() {
  const ref = useFadeIn();
  const testimonials = [
    {
      name: 'Dr. Sarah Al-Rashidi',
      role: 'Regulatory Director, Gulf Pharma',
      text: "Reg Excellence transformed our GCC market entry strategy. Their expertise in UAE and Saudi Arabia regulatory requirements saved us months of delays.",
      rating: 5,
    },
    {
      name: 'James Thornton',
      role: 'VP Regulatory Affairs, BioTech UK',
      text: "Outstanding depth of knowledge in CMC and biologics submissions. Dr. Anwar's team delivered exactly what we needed for our MENA expansion.",
      rating: 5,
    },
    {
      name: 'Dr. Fatima Hassan',
      role: 'Head of RA, Pan Gulf Medical',
      text: "Professional, responsive and highly knowledgeable. They handled our product registration renewals seamlessly across 6 GCC markets.",
      rating: 5,
    },
  ];
  return (
    <section className="testimonials" ref={ref}>
      <div className="container">
        <div className="testimonials-header fade-in">
          <span className="section-label">Client Feedback</span>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card fade-in">
              <div className="testimonial-stars">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
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

// FLOATING CONTACT US BUTTON
function FloatingContact() {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="floating-contact"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={scrollToContact}
    >
      <div className={`floating-contact-tooltip${hovered ? ' visible' : ''}`}>
        <div className="fct-title">Contact Us</div>
        <div className="fct-row">
          <Mail size={13} />
          <a href="mailto:admin@regexcellence.co.uk">admin@regexcellence.co.uk</a>
        </div>
        <div className="fct-row">
          <Phone size={13} />
          <a href="tel:+447587570977">+44 7587 570977</a>
        </div>
        <div className="fct-row">
          <MapPin size={13} />
          <span>3 Aimson Rd W, Timperley<br />Altrincham, WA15 7XP, UK</span>
        </div>
      </div>
      <span className="floating-contact-label">Contact Us</span>
      <Phone size={18} />
    </div>
  );
}

// CONTACT
function Contact() {
  const ref = useFadeIn();
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [submitError, setSubmitError] = useState('');
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    position: '', department: '', company: '', country: '', message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    setSubmitStatus('submitting');

    const templateParams = {
      first_name:  form.firstName,
      last_name:   form.lastName,
      from_name:   `${form.firstName} ${form.lastName}`,
      from_email:  form.email,
      phone:       form.phone,
      position:    form.position,
      department:  form.department,
      company:     form.company,
      country:     form.country,
      message:     form.message,
      reply_to:    form.email,
      to_name:     'Reg Excellence Team',
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      setSubmitStatus('success');
      setForm({ firstName: '', lastName: '', email: '', phone: '', position: '', department: '', company: '', country: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setSubmitStatus('error');
      setSubmitError('Something went wrong. Please try again or email admin@regexcellence.co.uk directly.');
    }
  };

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }} className="fade-in">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Submit a Request</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Ready to navigate GCC regulatory requirements with confidence?
            Contact Dr. Anwar Hussain Mohammed PhD and the team today.
          </p>
        </div>
        <div className="contact-inner">
          <div className="fade-in">
            <h3 className="contact-info-title">Contact Us</h3>
            <p className="contact-info-sub">
              Reach out directly or fill in the form and we will get back to you within 2 hours.
            </p>
            <div className="contact-detail">
              <div className="contact-detail-icon"><Mail size={20} /></div>
              <div>
                <div className="contact-detail-label">Email</div>
                <div className="contact-detail-value">
                  <a href="mailto:admin@regexcellence.co.uk" style={{ color: 'var(--primary)', textDecoration: 'none' }}>
                    admin@regexcellence.co.uk
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon"><Phone size={20} /></div>
              <div>
                <div className="contact-detail-label">Mobile / WhatsApp</div>
                <div className="contact-detail-value">
                  <a href="tel:+447587570977" style={{ color: 'inherit', textDecoration: 'none' }}>
                    +44 7587 570977
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon"><MapPin size={20} /></div>
              <div>
                <div className="contact-detail-label">Office Location</div>
                <div className="contact-detail-value">
                  <a
                    href="https://www.google.com/maps/place/3+Aimson+Rd+W,+Timperley,+Altrincham+WA15+7XP,+UK/@53.3978943,-2.3153038,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--primary)', textDecoration: 'none', lineHeight: 1.6, display: 'block' }}
                  >
                    3 Aimson Road West, Timperley<br />Altrincham, WA15 7XP<br />Manchester, United Kingdom
                  </a>
                </div>
              </div>
            </div>
            <div style={{ marginTop: '28px', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--gray-200)' }}>
              <iframe
                title="Reg Excellence Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.0!2d-2.3175765!3d53.3978943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bace39fe31a95%3A0xbbc960b040961bdf!2s3%20Aimson%20Rd%20W%2C%20Timperley%2C%20Altrincham%20WA15%207XP%2C%20UK!5e0!3m2!1sen!2suk!4v1718300000000"
                width="100%"
                height="220"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="fade-in">
            <div className="contact-form">
              {submitStatus === 'success' ? (
                <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                  <div style={{ fontSize: '56px', marginBottom: '16px' }}>&#10003;</div>
                  <h3 style={{ color: 'var(--primary-dark)', marginBottom: '8px', fontFamily: 'Playfair Display', fontSize: '24px' }}>Request Sent!</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    Thank you for reaching out. We will respond within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontFamily: 'Inter', fontSize: '20px', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '24px' }}>
                    Submit a Request
                  </h3>

                  {submitStatus === 'error' && (
                    <div style={{ background: '#fff0f0', border: '1px solid #C8382A', borderRadius: '8px', padding: '12px 16px', marginBottom: '20px', color: '#C8382A', fontSize: '14px' }}>
                      {submitError}
                    </div>
                  )}

                  <div className="form-row">
                    <div className="form-group">
                      <label>First Name *</label>
                      <input type="text" placeholder="First Name" value={form.firstName} onChange={set('firstName')} required disabled={submitStatus === 'submitting'} />
                    </div>
                    <div className="form-group">
                      <label>Last Name *</label>
                      <input type="text" placeholder="Last Name" value={form.lastName} onChange={set('lastName')} required disabled={submitStatus === 'submitting'} />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Email *</label>
                      <input type="email" placeholder="Email" value={form.email} onChange={set('email')} required disabled={submitStatus === 'submitting'} />
                    </div>
                    <div className="form-group">
                      <label>Contact Number</label>
                      <input type="tel" placeholder="Contact Number" value={form.phone} onChange={set('phone')} disabled={submitStatus === 'submitting'} />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Position</label>
                      <input type="text" placeholder="Position" value={form.position} onChange={set('position')} disabled={submitStatus === 'submitting'} />
                    </div>
                    <div className="form-group">
                      <label>Department</label>
                      <input type="text" placeholder="Department" value={form.department} onChange={set('department')} disabled={submitStatus === 'submitting'} />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Company Name</label>
                      <input type="text" placeholder="Company Name" value={form.company} onChange={set('company')} disabled={submitStatus === 'submitting'} />
                    </div>
                    <div className="form-group">
                      <label>Country</label>
                      <input type="text" placeholder="Country" value={form.country} onChange={set('country')} disabled={submitStatus === 'submitting'} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Project Requirements *</label>
                    <textarea
                      placeholder="Tell us about your regulatory challenge or project requirements..."
                      value={form.message}
                      onChange={set('message')}
                      required
                      disabled={submitStatus === 'submitting'}
                      style={{ minHeight: '120px' }}
                    />
                  </div>
                  <button type="submit" className="btn-teal" style={{ width: '100%', justifyContent: 'center' }} disabled={submitStatus === 'submitting'}>
                    {submitStatus === 'submitting' ? (
                      <><Loader2 size={16} className="spinner" /> Sending...</>
                    ) : (
                      <>Send <ArrowRight size={16} /></>
                    )}
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

// HOME PAGE
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
      <ConsultationForm />
      <FloatingContact />
    </>
  );
}
