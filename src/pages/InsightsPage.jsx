import { useEffect, useRef, useState } from 'react';
import { Globe, TrendingUp, Briefcase, BookOpen, ArrowRight, Rss, Search, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import LeadMagnet from '../components/LeadMagnet';

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
    title: 'GCC & Global Regulatory Updates',
    pillarLink: '/insights/gcc-regulatory-updates',
    pillarTitle: 'GCC Pharmaceutical Regulatory Affairs: A Practical Guide to SFDA & MOHAP Approvals',
    articles: [
      'SFDA 2025 Dossier Submission Requirements — What Has Changed',
      'UAE MOHAP New Product Registration Guidelines Explained',
      'Kuwait MOH: Updated Stability Data Requirements (Zone IVb)',
      'NHRA Bahrain Registration Fast Track Programme',
      'Oman MOH Revised Fees & Timelines for 2025',
      'Gulf Health Council: Centralized Registration Updates',
    ],
  },
  {
    icon: <BookOpen size={22} />,
    category: 'Career Advice',
    title: 'Regulatory Affairs Career Advice',
    pillarLink: '/insights/regulatory-affairs-career',
    pillarTitle: 'How to Build a High-Growth Career in Regulatory Affairs: Roadmap for Pharmacists',
    articles: [
      'How to Break Into GCC & Global Regulatory Affairs as a Pharmacist',
      'Top Skills Every Regulatory Affairs Professional Needs in 2026',
      'Moving from Pharma Operations to Regulatory Affairs — Step-by-Step',
      'Negotiating Your Salary as a Regulatory Affairs Manager',
      'Building an ATS-Optimized LinkedIn Profile for Pharma Roles',
      'Preparing for Technical Health Authority Interview Questions',
    ],
  },
  {
    icon: <TrendingUp size={22} />,
    category: 'Business Strategy',
    title: 'Business Development Strategies',
    pillarLink: '/insights/business-development',
    pillarTitle: 'GCC Pharmaceutical Business Development: In-Licensing vs. Distribution',
    articles: [
      'Entering the Gulf Pharma Market: In-Licensing vs. Local Distribution',
      'Key Success Factors for Pharmaceutical Market Access Globally',
      'Screening & Vetting Regional Pharma Distribution Partners',
      'Understanding Price Referencing & Commercial Negotiations in Saudi & UAE',
      'Biosimilar & Biologics Expansion Opportunities in Middle East',
      'Commercial Due Diligence Checklist for Pharma Partnerships',
    ],
  },
  {
    icon: <Briefcase size={22} />,
    category: 'Market Access',
    title: 'Pharmaceutical Market Access',
    pillarLink: '/insights/pharmaceutical-market-access',
    pillarTitle: 'Pharmaceutical Market Access & Pricing Strategy in Saudi Arabia & UAE',
    articles: [
      'HTA in GCC: How to Prepare a Compelling Value Dossier',
      'Reimbursement Strategies for Specialty Medicines in UAE',
      'Oncology Drug Access & Hospital Formularies in Saudi Arabia',
      'Navigating the SFDA Pricing Committee Approval Process',
      'Rare Disease & Orphan Drug Market Access Opportunities',
      'Early Access Programs Across Gulf States — Country Guide',
    ],
  },
];

const ALL_CATS = 'All';

export default function InsightsPage() {
  const ref = useFadeIn();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState(ALL_CATS);
  useSEO({
    title: 'GCC & Global Pharmaceutical Regulatory Insights & Articles | Reg Excellence',
    description: 'Expert regulatory updates, SFDA/MOHAP submission guides, pharmaceutical career advice, HTA market access, & business development insights by Dr. Anwar Hussain Mohammed PhD.',
    keywords: 'GCC regulatory insights, SFDA submission guide, MOHAP registration article, regulatory affairs career advice, pharma market access GCC',
    schema: {
      '@type': 'CollectionPage',
      'name': 'Pharmaceutical Regulatory Insights',
      'provider': { '@id': 'https://regexcellence.co.uk/#organization' }
    }
  });

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
            Expert Insights &amp; Technical Articles
          </h1>
          <p className="section-subtitle">
            Stay up to date with GCC and global regulatory updates, career advice, and pharmaceutical
            business development strategies from Dr. Anwar Hussain Mohammed PhD.
          </p>
          {/* Search Bar */}
          <div className="insights-search-wrap">
            <div className="insights-search-box">
              <Search size={18} className="insights-search-icon" />
              <input
                id="insights-search"
                type="text"
                placeholder="Search articles & guides..."
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
                <div key={i} className="insight-card fade-in" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div className="insight-card-header">
                      <div className="insight-card-header-icon">{cat.icon}</div>
                      <div>
                        <div className="insight-card-category">{cat.category}</div>
                        <div className="insight-card-header-title">{cat.title}</div>
                      </div>
                    </div>

                    <div className="insight-card-body">
                      {/* Featured Pillar Guide Link */}
                      {cat.pillarLink && (
                        <div style={{ background: 'var(--gray-50)', padding: '14px', borderRadius: '8px', borderLeft: '3px solid var(--gold)', marginBottom: '16px' }}>
                          <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Featured Guide</span>
                          <Link to={cat.pillarLink} style={{ display: 'block', fontWeight: 600, fontSize: '14px', color: 'var(--primary-dark)', textDecoration: 'none', marginTop: '4px' }}>
                            {cat.pillarTitle} <ChevronRight size={14} style={{ display: 'inline', verticalAlign: 'middle' }} />
                          </Link>
                        </div>
                      )}

                      <ul className="insight-articles">
                        {cat.articles.map((a, j) => (
                          <li key={j}>
                            <Link to={cat.pillarLink || '/insights'} style={{ color: 'inherit', textDecoration: 'none' }}>
                              {search ? (
                                <span dangerouslySetInnerHTML={{
                                  __html: a.replace(
                                    new RegExp(`(${search})`, 'gi'),
                                    '<mark class="insight-highlight">$1</mark>'
                                  )
                                }} />
                              ) : a}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div style={{ padding: '0 24px 24px 24px' }}>
                    <Link to={cat.pillarLink} className="btn-teal" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13px', padding: '10px 18px', width: '100%', justifyContent: 'center', textDecoration: 'none' }}>
                      Read Full Category Guide <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lead Magnet Capture Component */}
      <LeadMagnet />

      {/* CTA */}
      <div className="page-cta-strip">
        <div className="container">
          <div className="page-cta-strip-inner">
            <div>
              <h2>Have a specific regulatory query?</h2>
              <p>Book a consultation with Dr. Anwar Hussain Mohammed PhD for expert guidance.</p>
            </div>
            <a href="/consultation" className="btn-teal">
              Book a Consultation <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
