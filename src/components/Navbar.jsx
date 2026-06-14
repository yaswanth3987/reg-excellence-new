import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path ? 'active' : '';

  const scrollToContact = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : 'transparent'}`}>
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo">
            <img
              src="/logo.png"
              alt="Reg Excellence Logo"
              style={{ height: '52px', width: 'auto', objectFit: 'contain', display: 'block' }}
            />
          </Link>

          <ul className="navbar-links">
            <li><Link to="/" className={isActive('/')}>Home</Link></li>
            <li><Link to="/about" className={isActive('/about')}>About</Link></li>
            <li><Link to="/services" className={isActive('/services')}>Services</Link></li>
            <li><Link to="/training" className={isActive('/training')}>Training & Mentoring</Link></li>
            <li><Link to="/insights" className={isActive('/insights')}>Insights</Link></li>
            <li><Link to="/corporate-training" className={isActive('/corporate-training')}>Corporate Training</Link></li>
            <li><Link to="/careers" className={isActive('/careers')}>Careers</Link></li>
          </ul>

          <div className="navbar-cta">
            <button className="navbar-book-btn" onClick={scrollToContact}>
              Book a Consultation
            </button>
            <button
              className="navbar-hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className={isActive('/')}>Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/training">Training & Mentoring</Link>
        <Link to="/insights">Insights</Link>
        <Link to="/corporate-training">Corporate Training</Link>
        <Link to="/careers">Careers</Link>
        <a href="/#contact" className="mobile-book-btn" onClick={scrollToContact}>
          Book a Consultation
        </a>
      </div>
    </>
  );
}
