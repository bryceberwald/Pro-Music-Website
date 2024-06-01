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

      <h3>Marketplace store will allow fans to be able to purchase merchandise (Shirts, Hats, Stickers, Key Holder's, Etc.)</h3><br />
      <p>Page is currently under construction...</p>

    </div>
  );
};