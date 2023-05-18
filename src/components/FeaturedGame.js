import React from 'react';

const FeaturedGame = () => {
  const games = [
    {
      id: 1,
      image: './assets/images/featured-game-1.jpg',
      title: 'Just for Gamers',
      platform: 'Playstation 5, Xbox'
    },
    {
      id: 2,
      image: './assets/images/featured-game-2.jpg',
      title: 'Need for Speed',
      platform: 'Playstation 5, Xbox'
    },
    {
      id: 3,
      image: './assets/images/featured-game-3.jpg',
      title: 'Egypt Hunting Gamers',
      platform: 'Playstation 5, Xbox'
    },
    {
      id: 4,
      image: './assets/images/featured-game-4.jpg',
      title: 'Just for Gamers',
      platform: 'Playstation 5, Xbox'
    }
  ];

  return (
    <section className="section featured-game" id="features" aria-label="featured game">
      <div className="container">
        <h2 className="h2 section-title">
          All Released <span className="span">Games</span>
        </h2>
        <ul className="has-scrollbar">
          {games.map(game => (
            <li key={game.id} className="scrollbar-item">
              <div className="featured-game-card">
                <figure className="card-banner img-holder" style={{ '--width': 450, '--height': 600 }}>
                  <img src={game.image} width="450" height="600" loading="lazy" alt={game.title} className="img-cover" />
                </figure>
                <div className="card-content">
                  <h3 className="h3">
                    <a href="#" className="card-title" tabIndex="-1">
                      {game.title}
                    </a>
                  </h3>
                  <span className="card-meta">
                    <ion-icon name="notifications"></ion-icon>
                    <span className="span">{game.platform}</span>
                  </span>
                </div>
                <div className="card-content-overlay">
                  <img src="./assets/images/featured-game-icon.png" width="36" height="61" loading="lazy" alt="" className="card-icon" />
                  <h3 className="h3">
                    <a href="#" className="card-title">
                      {game.title}
                    </a>
                  </h3>
                  <span className="card-meta">
                    <ion-icon name="notifications"></ion-icon>
                    <span className="span">{game.platform}</span>
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeaturedGame;
