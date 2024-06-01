import * as React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import './MusicPage.css';

export default function MusicPage() {

  return (
    <div className='music-container'>
      <Navigation />
      <Header />
      <br></br>

      <div className="top-music-container">
        <h1>Music Page</h1>
      </div>

      <p>Music will be added shortly!</p>

    </div>
  );
};