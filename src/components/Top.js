import React from 'react';

const Top = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a href="#top" className="back-top-btn" aria-label="back to top" data-back-top-btn onClick={handleScrollToTop}>
      <ion-icon name="caret-up"></ion-icon>
    </a>
  );
};

export default Top;
