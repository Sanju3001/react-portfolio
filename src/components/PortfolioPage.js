import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = (props) => {

  return (
    <div>
      <h3>My Work</h3>
      <p>Checkout the stuff I've done:</p>
      <div>
        <Link to="/portfolio/1" >
          Item One
        </Link>
        <Link to="/portfolio/2" >
          Item Two
        </Link>
      </div>
    </div>
  );
};

export default PortfolioPage;