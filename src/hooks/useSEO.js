// useSEO.js — sets unique page title + meta description to prevent duplicate content
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useSEO({ title, description }) {
  const location = useLocation();

  useEffect(() => {
    // Title
    document.title = title;
    // Meta description
    let meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', description);
    // OG tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);
    // Twitter
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', title);
    let twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', description);
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `https://www.regexcellence.com${location.pathname === '/' ? '' : location.pathname}`);
    }

    // OG URL
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', `https://www.regexcellence.com${location.pathname === '/' ? '' : location.pathname}`);
    }

    // Cleanup: restore defaults on unmount
    return () => {
      document.title = 'Reg Excellence | GCC & International Regulatory Affairs Consulting | UK';
    };
  }, [title, description, location.pathname]);
}
