import * as React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import './EventsPage.css';

export default function EventsPage() {

  return (
    <div className='events-container'>
      <Navigation />
      <Header />
      <br></br>

      <div className="top-events-container">
        <h1>Events Page</h1>
      </div>

      <p>Content to be added...</p>

    </div>
  );
};