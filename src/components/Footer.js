import React from 'react';
import { footerBottomImg, ngameaLogo } from '../assets/images';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-brand">
            <a href="/" className="logo">
            <img className='logo' src={ngameaLogo} alt="ngamia logo" />
                
            </a>
            <p className="footer-text">
            Ngamea Games Gaming, Game Development and E-sports platform
            </p>
            <ul className="contact-list">
              <li className="contact-item">
                <div className="contact-icon">
                  <ion-icon name="location"></ion-icon>
                </div>
                <address className="item-text">
                  Address : PO Box W75 Street lan West new queens
                </address>
              </li>
              {/* <li className="contact-item">
                <div className="contact-icon">
                  <ion-icon name="headset"></ion-icon>
                </div>
                <a href="tel:+241245654235" className="item-text">Phone : +24 1245 654 235</a>
              </li> */}
              <li className="contact-item">
                <div className="contact-icon">
                  <ion-icon name="mail-open"></ion-icon>
                </div>
                <a href="mailto:hello@ngamiagames.io" className="item-text">Email : hello@ngameagames.io</a>
              </li>
            </ul>
          </div>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Esports</p>
            </li>
            <li>
              <a href="/" className="footer-link">Graphics </a>
            </li>
            <li>
              <a href="/" className="footer-link">PlayStation 5 </a>
            </li>
            <li>
              <a href="/" className="footer-link">XBox </a>
            </li>
            <li>
              <a href="/" className="footer-link">Android / IOS</a>
            </li>
            <li>
              <a href="/" className="footer-link">WEB </a>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Contact Us</p>
            </li>
            <li>
              <a href="/" className="footer-link">Home</a>
            </li>
            <li>
              <a href="/" className="footer-link">Live/Esports</a>
            </li>
            <li>
              <a href="/" className="footer-link">Gamification</a>
            </li>
            <li>
              <a href="/" className="footer-link">Affiliate</a>
            </li>
            <li>
              <a href="/" className="footer-link">Use Cases</a>
            </li>
          </ul>
          <div className="footer-wrapper">
            <div className="social-wrapper">
              <p className="footer-list-title">Follow Us</p>
              <ul className="social-list">
                <li>
                  <a href="/" className="social-link" style={{ backgroundColor: '#3b5998' }}>
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="/" className="social-link" style={{ backgroundColor: '#55acee' }}>
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="/" className="social-link" style={{ backgroundColor: '#d71e18' }}>
                    <ion-icon name="logo-pinterest"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="/" className="social-link" style={{ backgroundColor: '#1565c0' }}>
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-newsletter">
              <p className="footer-list-title">Newsletter Sign Up</p>
              <form action="" className="footer-newsletter">
                <input type="email" name="email_address" aria-label="email" placeholder="Enter your email" required className="email-field" />
                <button type="submit" className="footer-btn" aria-label="submit">
                  <ion-icon name="rocket"></ion-icon>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2023 Gamics. All Right Reserved by <a href="/" className="copyright-link">NgameaGames.io</a>
          </p>
          <img src={footerBottomImg} width="340" height="21" loading="lazy" alt="" className="footer-bottom-img" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
