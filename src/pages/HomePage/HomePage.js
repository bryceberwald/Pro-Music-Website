import React from 'react';
import './HomePage.css';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';

const HomePage = () => {
  return (
    <div className="home-container">

        <Navigation />
        <Header />
        <br></br>
        
        <div className='top-home-container'>
            <h1>Home Page</h1>
        </div>

      <div className='main-content'>
        <section>
          <h2>Introduction</h2>
          <p>
            words goes here...
          </p>
        </section>

        <section>
          <h2>Overview</h2>
          <p>
          words goes here...
          </p>
        </section>

        <section>
        <h2>More</h2>
          <p>
          words goes here...
          </p>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
