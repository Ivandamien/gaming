
import React, { useState } from 'react';
import { ngameaLogo } from '../assets/images';
import { CgClose, CgMenu, CgSearch } from 'react-icons/cg'
import SearchBox from './SearchBox';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {

  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const handleLinkClick = () => {
    if (isActive) {
      setIsActive(false);
    }
  };
 
  const [isSearchBoxActive, setIsSearchBoxActive] = useState(false);

  const handleSearchToggle = () => {
    setIsSearchBoxActive((prevState) => !prevState);
  };

  const handleSearchClose = () => {
    setIsSearchBoxActive(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <header className={`header ${isActive ? 'active' : ''} ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-top">
        <div className="container">
          <div className="countdown-text">
            Major Updates Comming Soon{" "}
            <span className="span skewBg">393</span>Days
          </div>
          <div className="social-wrapper">
            <p className="social-title">Follow us on :</p>
            <ul className="social-list">
              
              <li>
                <a href="/" className="social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
              <li>
                <a href="/" className="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>
              <li>
                <a href="/" className="social-link">
                  <ion-icon name="logo-pinterest"></ion-icon>
                </a>
              </li>
              <li>
                <a href="/" className="social-link">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`header-bottom skewBg ${isScrolled ? 'active' : ''}`} data-header>
        <div className="container">
          <Link href="/" className="logo">
            <img src={ngameaLogo} alt="" />
          </Link>
          <nav className={`navbar ${isActive ? 'active' : ''}`} data-navbar>
            <ul className="navbar-list">
              <li className="navbar-item">
                <Link href="/"  className="navbar-link skewBg" onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              <li className="navbar-item">
                <Link href="/"  className="navbar-link skewBg" onClick={handleLinkClick}>
                  Live
                </Link>
              </li>
              <li className="navbar-item">
                <Link href="/"  className="navbar-link skewBg" onClick={handleLinkClick}>
                  Featured
                </Link>
              </li>
              <li className="navbar-item">
                <Link href="/"  className="navbar-link skewBg" onClick={handleLinkClick}>
                  Blog
                </Link>
              </li>
              <li className="navbar-item">
                <Link href="/"  className="navbar-link skewBg" onClick={handleLinkClick}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        <div className="header-actions">
          <button className="cart-btn" aria-label="cart">
            <ion-icon name="cart" />
            <span className="cart-badge">0</span>
          </button>
          <button
            className="search-btn" 
            aria-label="open search"
            data-search-toggler
            onClick={handleSearchToggle}
            >
              <CgSearch style={{ display: 'flex', alignItems:'center', justifyItems:'center', fontSize:'20px', fontWeight:'bold'}}/>
            
          </button>
          <button className={`nav-toggle-btn ${isActive ? 'active' : ''}`} aria-label="toggle menu" onClick={toggleMenu}>
            <CgMenu className="menu" style={{ display: isActive ? 'none' : 'block' }} />
            <CgClose className="close" style={{ display: isActive ? 'block' : 'none' }} />
          </button>            
        </div>
        </div>
      </div>
      
      <SearchBox isActive={isSearchBoxActive} onClose={handleSearchClose} />
    </header>
  );
}

export default Header