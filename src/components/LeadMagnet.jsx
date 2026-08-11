import { useState } from 'react';
import { Download, CheckCircle, Mail, User, Briefcase, Lock } from 'lucide-react';

export default function LeadMagnet() {
  const [formData, setFormData] = useState({ name: '', email: '', role: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <section style={{
      background: 'linear-gradient(135deg, var(--primary-dark, #0a192f) 0%, #1e3a8a 100%)',
      padding: '70px 0',
      color: '#fff',
      borderRadius: 'var(--radius-lg, 16px)',
      margin: '60px auto',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          alignItems: 'center'
        }}>
          {/* Left Column — Value Prop */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(197, 160, 89, 0.2)',
              color: 'var(--gold, #d4af37)',
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '13px',
              fontWeight: 600,
              marginBottom: '16px'
            }}>
              <Download size={14} /> Free Technical Guide
            </div>
            <h3 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '30px',
              fontWeight: 700,
              lineHeight: 1.3,
              marginBottom: '16px',
              color: '#fff'
            }}>
              Guide to Building a Career in GCC &amp; Global Regulatory Affairs
            </h3>
            <p style={{
              fontSize: '15px',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.85)',
              marginBottom: '24px'
            }}>
              Master the essentials of GCC health authority submissions (SFDA, MOHAP, MOH Kuwait), eCTD Module 3 dossier compilation, and regulatory career progression pathways.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'Overview of SFDA & MOHAP approval pathways',
                'Essential skills every regulatory pharmacist needs',
                'Salary insights & career progression roadmap',
                'Dossier submission check-list for GCC markets'
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'rgba(255,255,255,0.9)' }}>
                  <CheckCircle size={16} style={{ color: 'var(--gold, #d4af37)', flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column — Form */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.06)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '16px',
            padding: '32px'
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'var(--gold, #d4af37)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                  color: 'var(--primary-dark)'
                }}>
                  <CheckCircle size={32} />
                </div>
                <h4 style={{ fontFamily: 'Playfair Display', fontSize: '22px', marginBottom: '10px', color: '#fff' }}>Access Granted!</h4>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', marginBottom: '20px' }}>
                  Thank you {formData.name}. We've dispatched your copy of the GCC Regulatory Affairs Guide to <strong>{formData.email}</strong>.
                </p>
                <a
                  href="/consultation"
                  className="btn-teal"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', textDecoration: 'none' }}
                >
                  Book a Career Coaching Session
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h4 style={{ fontFamily: 'Playfair Display', fontSize: '20px', marginBottom: '6px', color: '#fff' }}>
                  Download Your Free Copy
                </h4>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '20px' }}>
                  Get instant access to this industry guide.
                </p>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.9)', marginBottom: '6px' }}>
                    Full Name *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <User size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.5)' }} />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Al-Rashid"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 12px 10px 38px',
                        borderRadius: '8px',
                        border: '1px solid rgba(255,255,255,0.2)',
                        background: 'rgba(0,0,0,0.2)',
                        color: '#fff',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.9)', marginBottom: '6px' }}>
                    Work / Personal Email *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Mail size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.5)' }} />
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@pharma.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 12px 10px 38px',
                        borderRadius: '8px',
                        border: '1px solid rgba(255,255,255,0.2)',
                        background: 'rgba(0,0,0,0.2)',
                        color: '#fff',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.9)', marginBottom: '6px' }}>
                    Current Role (Optional)
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Briefcase size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.5)' }} />
                    <input
                      type="text"
                      placeholder="e.g. Regulatory Associate / Pharmacist"
                      value={formData.role}
                      onChange={e => setFormData({ ...formData, role: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 12px 10px 38px',
                        borderRadius: '8px',
                        border: '1px solid rgba(255,255,255,0.2)',
                        background: 'rgba(0,0,0,0.2)',
                        color: '#fff',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '8px',
                    border: 'none',
                    background: 'var(--gold, #c5a059)',
                    color: 'var(--primary-dark, #0b1f3a)',
                    fontWeight: 700,
                    fontSize: '15px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Download size={16} /> Get Free Guide Now
                </button>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginTop: '12px', fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>
                  <Lock size={12} /> We respect your privacy. No spam.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
