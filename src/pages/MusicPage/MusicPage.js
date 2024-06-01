/* eslint-disable jsx-a11y/iframe-has-title */
import * as React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import './MusicPage.css';

export default function MusicPage() {

  return (
    <div className="music-container">
      <Navigation />
      <Header />
      <br></br>

      <div className="top-music-container">
        <h1>Music Page</h1>
      </div>

      <h2>New SoundCloud releases:</h2>

      <iframe className="music" width="40%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/850837564&color=%2374746c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
     
      <iframe className="music" width="40%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1266167815&color=%235c6464&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

      <iframe className="music" width="40%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1233171142&color=%238781a1&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    </div>
  );
};