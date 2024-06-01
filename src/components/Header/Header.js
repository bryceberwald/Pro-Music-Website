/* eslint-disable jsx-a11y/img-redundant-alt */
/* Header.js */
import React from 'react';
import './Header.css';

const Header = () => {  
  return (
    <header className="header-container">
      <h1>PRO</h1>
      {/* <h2>The official website for my creative content.</h2> */}
      <br></br>
      <div className="music-links">
        <a href="https://open.spotify.com/artist/3BrQXqyaCeKEcV6aSkfwyT?si=i4ASsBD4SWmsaNEnWohOhQ" target="_blank" rel="noopener noreferrer">
          <img src="./images/spotify/spotify_icon.png" alt="Spotify" />
        </a>
        <a href="https://on.soundcloud.com/GjqUs6TRfgZL9ywA7" target="_blank" rel="noopener noreferrer">
          <img src="./images/soundcloud/soundcloud_icon.jpeg" alt="SoundCloud" />
        </a>
      </div>
    </header>
  );
};

export default Header;
