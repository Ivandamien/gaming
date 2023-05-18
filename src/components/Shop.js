import React from 'react';
import { shopImg1, shopImg2, shopImg3, shopImg4 } from '../assets/images';

const Shop = () => {
  const products = [
    {
      id: 1,
      image: shopImg1,
      badge: 't-shirt',
      title: 'Women Black T-Shirt',
      price: '$29.00'
    },
    {
      id: 2,
      image: shopImg2,
      badge: 'x-box',
      title: 'Gears 5 Xbox Controller',
      price: '$29.00'
    },
    {
      id: 3,
      image: shopImg3,
      badge: 'Graphics',
      title: 'GeForce RTX 2070',
      price: '$29.00'
    },
    {
      id: 4,
      image: shopImg4,
      badge: 'VR-Box',
      title: 'Virtual Reality Smiled',
      price: '$29.00'
    }
  ];

  return (
    <section className="section shop" id="shop" aria-label="shop" style={{ backgroundImage: "url('./assets/images/shop-bg.jpg')" }}>
      <div className="container">
        <h2 className="h2 section-title">
          Gaming Product <span className="span">Corner</span>
        </h2>
        <p className="section-text">
          Compete with 100 players on a remote island for winner takes showdown known issue where certain skin strategic
        </p>
        <ul className="has-scrollbar">
          {products.map(product => (
            <li key={product.id} className="scrollbar-item">
              <div className="shop-card">
                <figure className="card-banner img-holder" style={{ '--width': 300, '--height': 260 }}>
                  <img src={product.image} width="300" height="260" loading="lazy" alt={product.title} className="img-cover" />
                </figure>
                <div className="card-content">
                  <a href="/" className="card-badge skewBg">{product.badge}</a>
                  <h3 className="h3">
                    <a href="/" className="card-title">{product.title}</a>
                  </h3>
                  <div className="card-wrapper">
                    <p className="card-price">{product.price}</p>
                    <button className="card-btn">
                      <ion-icon name="basket"></ion-icon>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Shop;
