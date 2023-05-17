
import React, { useState, useEffect } from 'react';
import { ngameaLogo } from '../assets/images';
import { CgClose, CgMenu, CgSearch } from 'react-icons/cg'
const Header = () => {
    const [isNavbarActive, setNavbarActive] = useState(false);
    const [isSearchBoxActive, setSearchBoxActive] = useState(false);
  
    const handleNavbarToggle = () => {
      setNavbarActive((prevState) => !prevState);
    };
  
    const handleNavbarLinkClick = () => {
      setNavbarActive(false);
    };
  
    const handleSearchToggle = () => {
      setSearchBoxActive((prevState) => !prevState);
    };
  
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setNavbarActive(true);
      } else {
        setNavbarActive(false);
      }
    };
  
    // useEffect(() => {
    //   window.addEventListener('scroll', handleScroll);
    //   return () => {
    //     window.removeEventListener('scroll', handleScroll);
    //   };
    // }, []);
  return (
    <header className={`header ${isNavbarActive ? 'active' : ''}`}>
      <div className="header-top">
        <div className="container">
          <div className="countdown-text">
            Exclusive Black Friday ! offer{" "}
            <span className="span skewBg">10</span>Days
          </div>
          <div className="social-wrapper">
            <p className="social-title">Follow us on :</p>
            <ul className="social-list">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
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
      <div className={`header-bottom skewBg ${isNavbarActive ? 'active' : ''}`} data-header>
        <div className="container">
          <a href="/" className="logo">
            <img src={ngameaLogo} alt="" />
          </a>
          <nav className="navbar" data-navbar>
            <ul className="navbar-list">
              <li className="navbar-item">
                <a href="#home" onClick={handleNavbarLinkClick} className="navbar-link skewBg">
                  Home
                </a>
              </li>
              <li className="navbar-item">
                <a href="#live" onClick={handleNavbarLinkClick} className="navbar-link skewBg">
                  Live
                </a>
              </li>
              <li className="navbar-item">
                <a href="#featured" onClick={handleNavbarLinkClick} className="navbar-link skewBg">
                  Featured
                </a>
              </li>
              <li className="navbar-item">
                <a href="#blog" onClick={handleNavbarLinkClick} className="navbar-link skewBg">
                  Blog
                </a>
              </li>
              <li className="navbar-item">
                <a href="#contact" onClick={handleNavbarLinkClick} className="navbar-link skewBg">
                  Contact
                </a>
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
            {/* <ion-icon name="search-outline" /> */}
          </button>
          <button
            className="nav-toggle-btn "
            aria-label="toggle menu"
            data-nav-toggler
            // onClick={handleNavbarToggle}
          >
              
              <CgMenu className='menu' />
              <CgClose className='close'/>
             
          </button>
        </div>
        </div>
      </div>
     
    </header>
  );
}

export default Header