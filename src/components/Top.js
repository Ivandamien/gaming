import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {  RiArrowUpSFill } from 'react-icons/ri';

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
    <Link
      to="#top"
      className={`back-top-btn ${showBackToTop ? 'active' : ''}`}
      aria-label="back to top"
      data-back-top-btn
      onClick={handleScrollToTop}
    >
      <RiArrowUpSFill size={30} style={{ verticalAlign: 'middle' }} />
    </Link>
  );
};

export default Top;
