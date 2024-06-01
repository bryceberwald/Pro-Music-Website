import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import './BiographyPage.css';

const BiographyPage = () => {
  return (
    <div className="Biography-container">
        
        <Navigation />
        <Header />
        <br></br>

        <div className='top-Biography-container'>
            <h1>Biography Page</h1>
        </div>
    </div>
  );
};

export default BiographyPage;