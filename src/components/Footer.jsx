import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo-link">
              <div className="footer-logo-container">
                <img src="/logo.png" alt="Reg Excellence Logo" />
              </div>
            </Link>
            <p>UK-based pharmaceutical regulatory affairs and business development consulting for GCC and global pharmaceutical companies.</p>
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>
                <Mail size={14} style={{ color: '#C8382A' }} />
                <a href="mailto:admin@regexcellence.co.uk" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>
                  admin@regexcellence.co.uk
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>
                <Phone size={14} style={{ color: '#C8382A' }} />
                <a href="tel:+447587570977" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>+44 7587 570977</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>
                <MapPin size={14} style={{ color: '#C8382A', flexShrink: 0, marginTop: '2px' }} />
                <a
                  href="https://www.google.com/maps/place/3+Aimson+Rd+W,+Timperley,+Altrincham+WA15+7XP,+UK/@53.3978943,-2.3153038,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', lineHeight: 1.6 }}
                >
                  3 Aimson Rd W, Timperley<br />Altrincham, WA15 7XP, UK
                </a>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">GCC Regulatory Affairs</Link></li>
              <li><Link to="/services">Product Registration</Link></li>
              <li><Link to="/services">Lifecycle Management</Link></li>
              <li><Link to="/services">Market Access</Link></li>
              <li><Link to="/services">CMC & Biologics</Link></li>
              <li><Link to="/services">Business Development</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Training</h4>
            <ul>
              <li><Link to="/training">GCC Masterclass</Link></li>
              <li><Link to="/training">Career Mentoring</Link></li>
              <li><Link to="/training">CV & LinkedIn Review</Link></li>
              <li><Link to="/training">BD Training</Link></li>
              <li><Link to="/corporate-training">Corporate Training</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/">About</Link></li>
              <li><Link to="/insights">Insights</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><a href="/#contact">Contact Us</a></li>
              <li><a href="/#contact">Book Consultation</a></li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Reg Excellence. All rights reserved.</p>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)' }}>
            Dr. Anwar Hussain Mohammed PhD | GCC &amp; International Regulatory Affairs Expert | UK
          </p>
        </div>
      </div>
    </footer>
  );
}
