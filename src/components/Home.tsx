import React from 'react';
import Navbar from './Navbar';
import './Home.css'; 

const Home = () => {
  return (
    <div id="hero" className="hero-section">
      <Navbar />
      <div className="container">
        <div className="spacer"></div>
        <div className="main-text">
          <div>
            <p>Explore</p>
            <p>My</p>
            <p>Page</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
