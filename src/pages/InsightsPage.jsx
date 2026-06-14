import { useEffect, useRef, useState } from 'react';
import { Globe, TrendingUp, Briefcase, BookOpen, ArrowRight, Rss, Search } from 'lucide-react';

function useFadeIn() {
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    const els = ref.current?.querySelectorAll('.fade-in') || [];
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

const categories = [
  {
    icon: <Globe size={22} />,
    category: 'Regulatory Updates',
    title: 'GCC Regulatory Updates',
    articles: [
      'SFDA 2025 Dossier Submission Requirements — What Has Changed',
      'UAE MOHAP New Product Registration Guidelines Explained',
      'Kuwait MOH: Updated Stability Data Requirements',
      'NHRA Bahrain Registration Fast Track Programme',
      'Oman MOH Revised Fees & Timelines for 2025',
      'GCC Health Council: Mutual Recognition Agreement Updates',
    ],
  },
  {
    icon: <BookOpen size={22} />,
    category: 'Career Advice',
    title: 'Regulatory Affairs Career Advice',
    articles: [
      'How to Break Into GCC Regulatory Affairs as a Pharmacist',
      'Top Skills Every GCC Regulatory Affairs Professional Needs',
      'Moving from Pharma Operations to Regulatory Affairs — A Roadmap',
      'Negotiating Your Salary as a Regulatory Affairs Manager in GCC',
      'Building a Strong LinkedIn Profile for Pharma Professionals',
      'How to Prepare for a Regulatory Affairs Interview',
    ],
  },
  {
    icon: <TrendingUp size={22} />,
    category: 'Business Strategy',
    title: 'Business Development Strategies',
    articles: [
      'Entering the GCC Pharma Market: Licensing vs. Distribution',
      'Key Success Factors for Pharmaceutical Market Access in GCC',
      'How to Identify and Approach GCC Distribution Partners',
      'Understanding Price Referencing in Saudi Arabia & UAE',
      'Biosimilar Market Opportunities in the Gulf Region',
      'Pharmaceutical Partnerships: What GCC Companies Look For',
    ],
  },
  {
    icon: <Briefcase size={22} />,
    category: 'Market Access',
    title: 'Pharmaceutical Market Access',
    articles: [
      'HTA in GCC: How to Prepare a Compelling Value Dossier',
      'Reimbursement Strategies for Specialty Medicines in UAE',
      'Oncology Drug Access in Saudi Arabia: A Practical Guide',
      'How to Navigate the SFDA Pricing Committee Process',
      'Rare Disease Market Access: Opportunities in GCC',
      'Early Access Programs Across GCC — A Country-by-Country Guide',
    ],
  },
];

const ALL_CATS = 'All';

export default function InsightsPage() {
  const ref = useFadeIn();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState(ALL_CATS);

  const tabs = [ALL_CATS, ...categories.map(c => c.category)];

  const filtered = categories
    .filter(cat => activeCategory === ALL_CATS || cat.category === activeCategory)
    .map(cat => ({
      ...cat,
      articles: cat.articles.filter(a =>
        a.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter(cat => cat.articles.length > 0);

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="insights-hero">
        <div className="container">
          <span className="section-label">Insights</span>
          <h1 className="section-title" style={{ marginBottom: '16px' }}>
            Expert Insights &amp; Articles
          </h1>
          <p className="section-subtitle">
            Stay up to date with GCC regulatory news, career advice, and pharmaceutical
            business development strategies from Dr. Anwar Hussain Mohammed PhD.
          </p>
          {/* Search Bar */}
          <div className="insights-search-wrap">
            <div className="insights-search-box">
              <Search size={18} className="insights-search-icon" />
              <input
                id="insights-search"
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="insights-search-input"
                aria-label="Search articles"
              />
              {search && (
                <button className="insights-search-clear" onClick={() => setSearch('')} aria-label="Clear search">✕</button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="insights-tabs-bar">
        <div className="container">
          <div className="insights-tabs">
            {tabs.map(tab => (
              <button
                key={tab}
                className={`insights-tab${activeCategory === tab ? ' active' : ''}`}
                onClick={() => setActiveCategory(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <section className="insights-section">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="insights-empty fade-in">
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
              <h3>No articles found</h3>
              <p>Try a different search term or category.</p>
              <button className="btn-primary" style={{ marginTop: '20px' }} onClick={() => { setSearch(''); setActiveCategory(ALL_CATS); }}>
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="insights-grid">
              {filtered.map((cat, i) => (
                <div key={i} className="insight-card fade-in">
                  <div className="insight-card-header">
                    <div className="insight-card-header-icon">{cat.icon}</div>
                    <div>
                      <div className="insight-card-category">{cat.category}</div>
                      <div className="insight-card-header-title">{cat.title}</div>
                    </div>
                  </div>
                  <div className="insight-card-body">
                    <ul className="insight-articles">
                      {cat.articles.map((a, j) => (
                        <li key={j} onClick={() => { window.location.href = '/#contact'; }}>
                          {search ? (
                            <span dangerouslySetInnerHTML={{
                              __html: a.replace(
                                new RegExp(`(${search})`, 'gi'),
                                '<mark class="insight-highlight">$1</mark>'
                              )
                            }} />
                          ) : a}
                        </li>
                      ))}
                    </ul>
                    <button className="btn-teal" style={{ marginTop: '16px', fontSize: '13px', padding: '10px 20px' }}
                      onClick={() => { window.location.href = '/#contact'; }}>
                      Get Notified of New Articles <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ padding: '80px 0', background: 'var(--gray-50)' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, var(--primary-dark), var(--primary))',
            borderRadius: 'var(--radius-lg)', padding: '60px',
            textAlign: 'center',
          }} className="fade-in">
            <Rss size={40} style={{ color: 'var(--gold)', margin: '0 auto 16px' }} />
            <h2 className="section-title" style={{ color: '#fff', marginBottom: '12px' }}>
              Never Miss an Update
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '500px', margin: '0 auto 32px', fontSize: '16px' }}>
              Subscribe to receive the latest GCC regulatory insights, career advice and
              industry updates directly to your inbox.
            </p>
            <div style={{ display: 'flex', gap: '12px', maxWidth: '480px', margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
              <input
                type="email"
                placeholder="your@email.com"
                style={{
                  flex: 1, minWidth: '240px', padding: '13px 18px',
                  borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.2)',
                  background: 'rgba(255,255,255,0.1)', color: '#fff',
                  fontFamily: 'Inter', fontSize: '14px', outline: 'none',
                }}
              />
              <button className="btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="page-cta-strip">
        <div className="container">
          <div className="page-cta-strip-inner">
            <div>
              <h2>Have a regulatory question?</h2>
              <p>Book a consultation with our expert for personalised guidance.</p>
            </div>
            <button className="btn-teal" onClick={() => { window.location.href = '/#contact'; }}>
              Book a Consultation <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
