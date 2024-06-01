import * as React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import './StorePage.css';

export default function StorePage() {

  return (
    <div className='store-container'>
      <Navigation />
      <Header />
      <br></br>

      <div className="top-store-container">
        <h1>Store Page</h1>
      </div>

      <p>MARKETPLACE TO PURCHASE MERCHANDISE, ETC.</p>

    </div>
  );
};