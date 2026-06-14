// useSEO.js — sets unique page title + meta description to prevent duplicate content
import { useEffect } from 'react';

export default function useSEO({ title, description }) {
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
    // Cleanup: restore defaults on unmount
    return () => {
      document.title = 'Reg Excellence | GCC & International Regulatory Affairs Consulting | UK';
    };
  }, [title, description]);
}
