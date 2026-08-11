import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, ChevronRight, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <div className="footer-new-wrapper">
      <footer className="footer-new">
        <div className="footer-new-content">
          <div className="footer-new-grid">
            {/* Col 1 */}
            <div className="footer-new-brand">
              <Link to="/" className="footer-new-logo">
                <img src="/logo.png" alt="Reg Excellence logo" />
              </Link>
              <p>Expert GCC and global pharmaceutical regulatory affairs consulting and corporate training led by Dr. Anwar Hussain Mohammed PhD.</p>
              <div className="footer-socials">
                <a href="https://www.linkedin.com/company/regexcellence" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="mailto:info@regexcellence.co.uk" className="social-icon" aria-label="Email"><Mail size={16} /></a>
              </div>
            </div>

            {/* Col 2 */}
            <div className="footer-new-col">
              <h4>QUICK LINKS</h4>
              <ul>
                <li><Link to="/about"><ChevronRight size={14} className="chevron" /> About Us</Link></li>
                <li><Link to="/services"><ChevronRight size={14} className="chevron" /> Our Services</Link></li>
                <li><Link to="/training"><ChevronRight size={14} className="chevron" /> Training & Mentoring</Link></li>
                <li><Link to="/corporate-training"><ChevronRight size={14} className="chevron" /> Corporate Training</Link></li>
                <li><Link to="/insights"><ChevronRight size={14} className="chevron" /> Insights</Link></li>
                <li><Link to="/consultation"><ChevronRight size={14} className="chevron" /> Contact Us</Link></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div className="footer-new-col">
              <h4>OUR SERVICES</h4>
              <ul>
                <li><Link to="/services/gcc-regulatory-affairs"><ChevronRight size={14} className="chevron" /> GCC Regulatory Affairs</Link></li>
                <li><Link to="/services/regulatory-strategy"><ChevronRight size={14} className="chevron" /> Regulatory Strategy</Link></li>
                <li><Link to="/services/product-registration"><ChevronRight size={14} className="chevron" /> Product Registration</Link></li>
                <li><Link to="/services/regulatory-submissions"><ChevronRight size={14} className="chevron" /> eCTD Submissions</Link></li>
                <li><Link to="/services/dossier-preparation"><ChevronRight size={14} className="chevron" /> Dossier Gap Analysis</Link></li>
                <li><Link to="/services/cmc-regulatory-support"><ChevronRight size={14} className="chevron" /> CMC & Quality Support</Link></li>
                <li><Link to="/services/pharmaceutical-market-access"><ChevronRight size={14} className="chevron" /> Market Access & Pricing</Link></li>
              </ul>
            </div>

            {/* Col 4 */}
            <div className="footer-new-col">
              <h4>TRAINING & MENTORING</h4>
              <ul>
                <li><Link to="/training/gcc-regulatory-affairs-masterclass"><ChevronRight size={14} className="chevron" /> GCC Regulatory Masterclass</Link></li>
                <li><Link to="/training/career-mentoring"><ChevronRight size={14} className="chevron" /> 1-on-1 Career Mentoring</Link></li>
                <li><Link to="/training/cv-linkedin-review"><ChevronRight size={14} className="chevron" /> CV & LinkedIn Review</Link></li>
                <li><Link to="/training/business-development-training"><ChevronRight size={14} className="chevron" /> Business Development</Link></li>
                <li><Link to="/corporate-training"><ChevronRight size={14} className="chevron" /> In-House Corporate Training</Link></li>
              </ul>
            </div>

            {/* Col 5 */}
            <div className="footer-new-col contact-col">
              <h4>CONTACT US</h4>
              <ul>
                <li>
                  <div className="contact-icon-wrapper"><MapPin size={16} /></div>
                  <span>Reg Excellence Ltd.<br/>3 Aimson Road West,<br/>Altrincham, Manchester,<br/>WA15 7XP, United Kingdom</span>
                </li>
                <li>
                  <div className="contact-icon-wrapper"><Mail size={16} /></div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <a href="mailto:info@regexcellence.co.uk" style={{ color: '#333333', textDecoration: 'none' }}>info@regexcellence.co.uk</a>
                    <a href="mailto:farheen@regexcellence.co.uk" style={{ color: '#333333', textDecoration: 'none' }}>farheen@regexcellence.co.uk</a>
                  </div>
                </li>
                <li>
                  <div className="contact-icon-wrapper"><Phone size={16} /></div>
                  <a href="tel:+447587570977" style={{ color: '#333333', textDecoration: 'none' }}>+44 758 757 0977</a>
                </li>
                <li>
                  <div className="contact-icon-wrapper"><Globe size={16} /></div>
                  <span>www.regexcellence.co.uk</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-new-middle">
            <div className="footer-new-middle-left">
              <div className="middle-shield">
                <ShieldCheck size={28} strokeWidth={2.5} />
              </div>
              <span><strong>EXPERTISE.</strong> <span className="red-text">COMPLIANCE.</span> <strong>EXCELLENCE.</strong></span>
            </div>
            <div className="footer-new-middle-right">
              Delivering clarity. Ensuring compliance. Driving excellence.
            </div>
          </div>
        </div>

        <div className="footer-new-bottom">
          <div className="footer-new-bottom-inner">
            <p>© {new Date().getFullYear()} Reg Excellence Ltd. All Rights Reserved.</p>
            <div className="footer-new-bottom-links">
              <Link to="/services">Services</Link>
              <span className="separator">|</span>
              <Link to="/training">Training</Link>
              <span className="separator">|</span>
              <a href="/sitemap.xml">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
