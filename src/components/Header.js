import React from 'react'
import { ngameaLogo } from '../assets/images'

const Header = () => {

  return (
    <header className="header">
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
      <div className="header-bottom skewBg" data-header>
        <div className="container">
          <a href="/" className="logo">
            <img src={ngameaLogo} alt="" />
          </a>
          <nav className="navbar" data-navbar>
            <ul className="navbar-list">
              <li className="navbar-item">
                <a href="#home" className="navbar-link skewBg">
                  Home
                </a>
              </li>
              <li className="navbar-item">
                <a href="#live" className="navbar-link skewBg">
                  Live
                </a>
              </li>
              <li className="navbar-item">
                <a href="#featured" className="navbar-link skewBg">
                  Featured
                </a>
              </li>
              <li className="navbar-item">
                <a href="#blog" className="navbar-link skewBg">
                  Blog
                </a>
              </li>
              <li className="navbar-item">
                <a href="#contact" className="navbar-link skewBg">
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
          >
            <ion-icon name="search-outline" />
          </button>
          <button
            className="nav-toggle-btn"
            aria-label="toggle menu"
            data-nav-toggler
          >
            <ion-icon name="menu-outline" className="menu" />
            <ion-icon name="close-outline" className="close" />
          </button>
        </div>
        </div>
      </div>
    </header>
  );
}

export default Header