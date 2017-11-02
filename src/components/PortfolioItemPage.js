import React from 'react';

const PortfolioItem = (props) => (
  <div>
    <h3>A thing I've Done</h3>
    <p>This page is for the item with the id of {props.match.params.id}</p>
  </div>
);

export default PortfolioItem;