import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Menu, Calendar, Home, User, Briefcase, GraduationCap, Users, FileText, Mail, Phone } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isActive = (path) => location.pathname === path;

  const handleBookConsultation = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    const isHome = location.pathname === '/';
    if (isHome) {
      const el = document.getElementById('contact');
      if (el) {
        const navbarHeight = document.querySelector('.re-navbar')?.offsetHeight || 80;
        const top = el.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    } else {
      window.location.href = '/#contact';
    }
  };

  const navLinks = [
    { to: '/', label: 'Home', icon: <Home size={18} /> },
    { to: '/about', label: 'About', icon: <User size={18} /> },
    { to: '/services', label: 'Services', icon: <Briefcase size={18} /> },
    { to: '/training', label: 'Training & Mentoring', icon: <GraduationCap size={18} /> },
    { to: '/corporate-training', label: 'Corporate Training', icon: <Users size={18} /> },
    { to: '/insights', label: 'Insights', icon: <FileText size={18} /> },
  ];

  return (
    <>
      {/* ── Desktop / Tablet Navbar ── */}
      <header className={`re-navbar${scrolled ? ' re-navbar--scrolled' : ''}`}>
        <div className="re-navbar__inner">

          {/* Logo */}
          <Link to="/" className="re-navbar__logo" aria-label="Reg Excellence — Home">
            <img src="/logo.png" alt="Reg Excellence" />
          </Link>
          <div className="re-navbar__divider"></div>

          {/* Center Nav Links */}
          <nav className="re-navbar__links" aria-label="Primary navigation">
            <ul>
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className={`re-nav-link${isActive(to) ? ' re-nav-link--active' : ''}`}
                  >
                    {label}
                    <span className="re-nav-link__underline" />
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="re-nav-link"
                  onClick={handleBookConsultation}
                >
                  Contact
                  <span className="re-nav-link__underline" />
                </a>
              </li>
            </ul>
          </nav>

          {/* CTA */}
          <div className="re-navbar__cta">
            <button
              className="re-navbar__book-btn"
              onClick={handleBookConsultation}
              aria-label="Book a Consultation"
            >
              <Calendar size={16} /> Book a Consultation
            </button>

            {/* Hamburger */}
            <button
              className="re-navbar__hamburger"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
            >
              <Menu size={26} strokeWidth={2} />
            </button>
          </div>

        </div>
      </header>

      {/* ── Mobile Slide-out Menu ── */}
      <div
        className={`re-mobile-overlay${menuOpen ? ' re-mobile-overlay--open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
      <aside className={`re-mobile-menu${menuOpen ? ' re-mobile-menu--open' : ''}`} aria-label="Mobile navigation">
        <div className="re-mobile-menu__header">
          <Link to="/" className="re-mobile-menu__logo" onClick={() => setMenuOpen(false)}>
            <img src="/logo.png" alt="Reg Excellence" />
          </Link>
          <button
            className="re-mobile-menu__close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            <X size={24} strokeWidth={1.8} />
          </button>
        </div>

        <nav className="re-mobile-menu__nav">
          {navLinks.map(({ to, label, icon }) => (
            <Link
              key={to}
              to={to}
              className={`re-mobile-nav-link${isActive(to) ? ' re-mobile-nav-link--active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              <span className="re-mobile-nav-icon">{icon}</span>
              {label}
            </Link>
          ))}
          <a
            href="#contact"
            className="re-mobile-nav-link"
            onClick={handleBookConsultation}
          >
            <span className="re-mobile-nav-icon"><Mail size={18} /></span>
            Contact
          </a>
        </nav>

        <div className="re-mobile-menu__footer">
          <button
            className="re-navbar__book-btn re-navbar__book-btn--full"
            onClick={handleBookConsultation}
          >
            <Calendar size={18} /> Book a Consultation
          </button>
          <div className="re-mobile-menu__contact">
            <a href="mailto:info@regexcellence.co.uk"><Mail size={16} /> info@regexcellence.co.uk</a>
            <a href="tel:+447506775997"><Phone size={16} /> +44 7506 775 997</a>
          </div>
        </div>
      </aside>
    </>
  );
}
