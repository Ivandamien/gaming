import React from 'react';
import { brand1, brand2, brand3, brand4, brand5, brand6 } from '../assets/images';

const Brand = () => {
  const brandImages = [brand1, brand2, brand3, brand4, brand5, brand6];

  return (
    <section className="section brand" aria-label="brand">
      <div className="container">
        <ul className="has-scrollbar">
          {brandImages.map((image, index) => (
            <li className="brand-item" key={index}>
              <img src={image} width="90" height="90" loading="lazy" alt="brand logo" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Brand;
