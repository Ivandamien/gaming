import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Top = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    showBackToTop && (
      <Link to="#top" className="back-top-btn" aria-label="back to top" data-back-top-btn onClick={handleScrollToTop}>
        <ion-icon name="caret-up"></ion-icon>
      </Link>
    )
  );
};

export default Top;
