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
                <img src="/logo.png" alt="Reg Excellence" />
              </Link>
              <p>Expert regulatory affairs consulting and training solutions with 25+ years of global pharmaceutical industry experience.</p>
              <div className="footer-socials">
                <a href="#" className="social-icon" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#" className="social-icon" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
                <a href="mailto:info@regexcellence.co.uk" className="social-icon" aria-label="Email"><Mail size={16} /></a>
              </div>
            </div>

            {/* Col 2 */}
            <div className="footer-new-col">
              <h4>QUICK LINKS</h4>
              <ul>
                <li><Link to="/"><ChevronRight size={14} className="chevron" /> About Us</Link></li>
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
                <li><Link to="/services"><ChevronRight size={14} className="chevron" /> Regulatory Strategy</Link></li>
                <li><Link to="/services"><ChevronRight size={14} className="chevron" /> Dossier Writing & Publishing</Link></li>
                <li><Link to="/services"><ChevronRight size={14} className="chevron" /> Submission Management</Link></li>
                <li><Link to="/services"><ChevronRight size={14} className="chevron" /> CMC & Quality Support</Link></li>
                <li><Link to="/services"><ChevronRight size={14} className="chevron" /> Gap Analysis & Compliance</Link></li>
                <li><Link to="/services"><ChevronRight size={14} className="chevron" /> Audit & Inspection Support</Link></li>
              </ul>
            </div>

            {/* Col 4 */}
            <div className="footer-new-col">
              <h4>TRAINING & MENTORING</h4>
              <ul>
                <li><Link to="/training"><ChevronRight size={14} className="chevron" /> Regulatory Affairs Training</Link></li>
                <li><Link to="/training"><ChevronRight size={14} className="chevron" /> IND/IMPD Training</Link></li>
                <li><Link to="/training"><ChevronRight size={14} className="chevron" /> Mentoring Programs</Link></li>
                <li><Link to="/training"><ChevronRight size={14} className="chevron" /> Workshops & Webinars</Link></li>
                <li><Link to="/corporate-training"><ChevronRight size={14} className="chevron" /> Corporate Training Programs</Link></li>
              </ul>
            </div>

            {/* Col 5 */}
            <div className="footer-new-col contact-col">
              <h4>CONTACT US</h4>
              <ul>
                <li>
                  <div className="contact-icon-wrapper"><MapPin size={16} /></div>
                  <span>Reg Excellence Ltd.<br/>71-75, Shelton Street,<br/>Covent Garden, London,<br/>WC2H 9JQ, United Kingdom</span>
                </li>
                <li>
                  <div className="contact-icon-wrapper"><Mail size={16} /></div>
                  <span>info@regexcellence.co.uk</span>
                </li>
                <li>
                  <div className="contact-icon-wrapper"><Phone size={16} /></div>
                  <span>+44 7506 775 997</span>
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
              <Link to="#">Privacy Policy</Link>
              <span className="separator">|</span>
              <Link to="#">Terms & Conditions</Link>
              <span className="separator">|</span>
              <Link to="#">Sitemap</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
