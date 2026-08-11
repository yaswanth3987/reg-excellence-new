import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQAccordion({ title = "Frequently Asked Questions", subtitle, faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (i) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="faq-section" style={{ padding: '80px 0', background: 'var(--gray-50)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--gold)', fontWeight: 600, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
            <HelpCircle size={18} /> Frequently Asked Questions
          </div>
          <h2 className="section-title" style={{ color: 'var(--primary-dark)', fontSize: '32px' }}>{title}</h2>
          {subtitle && <p className="section-subtitle" style={{ margin: '12px auto 0', maxWidth: '680px' }}>{subtitle}</p>}
        </div>

        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                style={{
                  background: '#fff',
                  borderRadius: 'var(--radius-lg, 12px)',
                  marginBottom: '16px',
                  border: '1px solid var(--gray-200, #e2e8f0)',
                  boxShadow: isOpen ? '0 10px 25px -5px rgba(0,0,0,0.05)' : '0 2px 5px rgba(0,0,0,0.02)',
                  overflow: 'hidden',
                  transition: 'all 0.25s ease'
                }}
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  style={{
                    width: '100%',
                    padding: '22px 28px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontFamily: 'inherit'
                  }}
                  aria-expanded={isOpen}
                >
                  <span style={{ fontSize: '17px', fontWeight: 600, color: 'var(--primary-dark, #0b1f3a)', paddingRight: '16px' }}>
                    {faq.q}
                  </span>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: isOpen ? 'var(--gold, #c5a059)' : 'var(--gray-100, #f1f5f9)',
                    color: isOpen ? '#fff' : 'var(--primary-dark, #0b1f3a)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 0.25s ease',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 28px 24px 28px',
                    fontSize: '15px',
                    lineHeight: '1.7',
                    color: 'var(--text-secondary, #475569)',
                    borderTop: '1px solid var(--gray-100, #f1f5f9)',
                    paddingTop: '16px'
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
