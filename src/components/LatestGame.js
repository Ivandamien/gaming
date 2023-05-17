import React from 'react';
import { latestGame1, latestGame2, latestGame3 } from '../assets/images';

const LatestGame = () => {
  const gameData = [
    {
      image: latestGame1,
      alt: 'White Walker Daily',
      badge: 'Zombie',
      title: 'White Walker',
      subtitle: 'Daily',
      price: 'Free'
    },
    {
      image: latestGame2,
      alt: 'Hunter Killer II',
      badge: 'Adventure',
      title: 'Hunter Killer',
      subtitle: 'II',
      price: '$25.00'
    },
    {
      image: latestGame3,
      alt: 'Cyberpunk Daily',
      badge: 'Action',
      title: 'Cyberpunk',
      subtitle: 'Daily',
      price: '$25.00'
    }
  ];

  return (
    <section className="section latest-game" aria-label="latest game">
      <div className="container">
        <p className="section-subtitle">Latest Releases</p>
        <h2 className="h2 section-title">
          Create &amp; <span className="span">Manage</span>
        </h2>
        <ul className="has-scrollbar">
          {gameData.map((game, index) => (
            <li key={index} className="scrollbar-item">
              <div className="latest-game-card">
                <figure className="card-banner img-holder" style={{ '--width': 400, '--height': 470 }}>
                  <img
                    src={game.image}
                    width="400"
                    height="470"
                    loading="lazy"
                    alt={game.alt}
                    className="img-cover"
                  />
                </figure>
                <div className="card-content">
                  <a href="/" className="card-badge skewBg">
                    {game.badge}
                  </a>
                  <h3 className="h3">
                    <a href="/" className="card-title">
                      {game.title} <span className="span">{game.subtitle}</span>
                    </a>
                  </h3>
                  <p className="card-price">
                    Entry Fee: <span className="span">{game.price}</span>
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LatestGame;
