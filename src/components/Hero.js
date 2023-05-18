
import React, { useState } from 'react';
import { hero1, hero2, hero3, hero4, heroBanner, bgVideo, luxCard } from '../assets/images';
import { useEffect } from 'react';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [images]);

  return (
    <figure className="hero-banner img-holder" style={{ '--width': 700, '--height': 700 }}>
      <img src={images[currentImageIndex]} width="700" height="700" alt="hero banner" className="w-100" />
    </figure>
  );
};

const Hero = () => {
  const carouselImages = [
    heroBanner,
    hero1,
    hero2,
    hero3,
    hero4,
    luxCard
    // Add more image URLs as needed
  ];

  return (
    <section className="section hero" id="home" aria-label="home">
      <div className="hero-video-container">
        <video className="hero-video" autoPlay loop muted>
          <source src={bgVideo} type="video/mp4" />
        </video>
      </div>
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">World Gaming</p>
          <h1 className="h1 hero-title">
            Ngamea <br /><span className="span">Games</span> 
          </h1>
          <p className="hero-text">
            Find technology or people for digital projects and Join Other players for match making tournaments.
          </p>
          <button className="btn skewBg">Read More</button>
        </div>
        <Carousel images={carouselImages} />
      </div>
    </section>
  );
};

export default Hero;

