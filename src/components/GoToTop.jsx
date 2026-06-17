import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className={`go-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Go to top"
    >
      <ChevronUp size={20} />
    </div>
  );
}
