
import React, { useRef } from 'react';
import { liveMatchPlayer1, liveMatchPlayer2, liveMatchVideo } from '../assets/images';

const LiveMatch = () => {
  const liveMatches = [
    {
      id: 1,
      video: liveMatchVideo,
      player1Image: liveMatchPlayer1,
      player2Image: liveMatchPlayer2,
      matchTime: '08:30',
      altText: 'Live Match Video',
    },
    // Add more live match objects as needed
  ];
  const videoRef = useRef();

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };
  

  return (
    <section className="section live-match" id="live" aria-label="live match">
      <div className="container">
        <h2 className="h2 section-title">
          Watch Live <span className="span">Match</span>
        </h2>

        {liveMatches.map((match) => (
          <div key={match.id} className="live-match-item">
            <div className="live-match-banner img-holder" style={{ '--width': '800px', '--height': '470px' }}>
              <video
                src={match.video}
                width="800"
                height="470"
                className="img-cover"
                playsInline
                preload="metadata"
                ref={videoRef}
              />

              <button className="play-btn" aria-label="play video" onClick={handlePlayPause}>
                <ion-icon name="play"></ion-icon>
              </button>
            </div>

            <div className="live-match-player">
              <figure
                className="player player-1 img-holder"
                style={{ '--width': '406px', '--height': '277px' }}
              >
                <img
                  src={match.player1Image}
                  width="406"
                  height="277"
                  loading="lazy"
                  alt="tokyo eagle"
                  className="w-100"
                />
              </figure>

              <div className="live-match-detail">
                <p className="live-match-subtitle">Upcoming Live Matches</p>
                <time className="live-match-time" dateTime={match.matchTime}>
                  {match.matchTime}
                </time>
              </div>

              <figure
                className="player player-2 img-holder"
                style={{ '--width': '400px', '--height': '305px' }}
              >
                <img
                  src={match.player2Image}
                  width="400"
                  height="305"
                  loading="lazy"
                  alt="new york hunter7"
                  className="w-100"
                />
              </figure>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LiveMatch;
