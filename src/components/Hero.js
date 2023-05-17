import React, { useState } from 'react';
import { hero1, hero2, hero3, hero4, heroBanner, heroBg, luxCard } from '../assets/images';
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
    <section className="section hero" id="home" aria-label="home" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">World Gaming</p>
          <h1 className="h1 hero-title">
            Create <span className="span">Manage</span> Matches
          </h1>
          <p className="hero-text">
            Find technology or people for digital projects in the public sector and find an individual specialist developer or researcher.
          </p>
          <button className="btn skewBg">Read More</button>
        </div>
        {/* <figure className="hero-banner img-holder" style={{ '--width': 700, '--height': 700 }}>
          <img src={heroBanner} width="700" height="700" alt="hero banner" className="w-100" />
        </figure> */}
              <Carousel images={carouselImages} />
      </div>
    </section>
  );
};

export default Hero;
