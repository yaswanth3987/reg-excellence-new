// useSEO.js — Advanced SEO & Structured Data Hook for Reg Excellence
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DOMAIN = 'https://regexcellence.co.uk';

export default function useSEO({ title, description, keywords, schema }) {
  const location = useLocation();

  useEffect(() => {
    // 1. Document Title
    const finalTitle = title ? `${title} | Reg Excellence` : 'GCC & Global Pharmaceutical Regulatory Affairs Consultant | Reg Excellence UK';
    document.title = finalTitle;

    // 2. Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description || 'Reg Excellence — UK-based pharmaceutical regulatory affairs & business development consultancy led by Dr. Anwar Hussain Mohammed PhD.');
    }

    // 3. Meta Keywords
    if (keywords) {
      let metaKw = document.querySelector('meta[name="keywords"]');
      if (!metaKw) {
        metaKw = document.createElement('meta');
        metaKw.setAttribute('name', 'keywords');
        document.head.appendChild(metaKw);
      }
      metaKw.setAttribute('content', keywords);
    }

    // 4. Canonical URL
    const canonicalUrl = `${DOMAIN}${location.pathname === '/' ? '' : location.pathname}`;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', canonicalUrl);
    }

    // 5. Open Graph Metadata
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', finalTitle);
    
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description || '');
    
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);

    // 6. Twitter Card
    let twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', finalTitle);

    let twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', description || '');

    // 7. Dynamic JSON-LD Structured Data
    let schemaScript = document.getElementById('dynamic-page-schema');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'dynamic-page-schema';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    // Default BreadcrumbList Schema
    const pathParts = location.pathname.split('/').filter(Boolean);
    const breadcrumbItems = [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': DOMAIN,
      },
    ];

    pathParts.forEach((part, index) => {
      const formattedName = part.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      const itemUrl = `${DOMAIN}/${pathParts.slice(0, index + 1).join('/')}`;
      breadcrumbItems.push({
        '@type': 'ListItem',
        'position': index + 2,
        'name': formattedName,
        'item': itemUrl,
      });
    });

    const pageBreadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': breadcrumbItems,
    };

    const combinedSchema = schema ? [pageBreadcrumbSchema, schema] : [pageBreadcrumbSchema];
    schemaScript.textContent = JSON.stringify(combinedSchema);

    // Scroll to top on page load
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Cleanup function
    return () => {
      if (schemaScript) {
        schemaScript.textContent = '';
      }
    };
  }, [title, description, keywords, schema, location.pathname]);
}
