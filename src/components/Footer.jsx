import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{
                background: '#ffffff',
                borderRadius: '10px',
                padding: '8px 14px',
                display: 'inline-flex',
                alignItems: 'center',
              }}>
                <img
                  src="/logo.png"
                  alt="Reg Excellence Logo"
                  style={{ height: '52px', width: 'auto', objectFit: 'contain', display: 'block' }}
                />
              </div>
            </div>
            <p>Expert GCC Regulatory Affairs and Business Development consulting for pharmaceutical companies across GCC and global markets.</p>
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>
                <Mail size={14} style={{ color: '#C8382A' }} />
                info@regexcellence.com
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>
                <Phone size={14} style={{ color: '#C8382A' }} />
                +971 50 000 0000
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>
                <MapPin size={14} style={{ color: '#C8382A' }} />
                Dubai, UAE
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
            Dr. Anwar Hussain Mohammed PhD | GCC Regulatory Affairs Expert
          </p>
        </div>
      </div>
    </footer>
  );
}
