import React from 'react';
import Info from './Info';
import About from './About';
import Interests from './Interests';
import Footer from './Footer';

function Card() {
  return (
    <main>
      <div className="card--container">
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    </main>
  );
}

export default Card;
