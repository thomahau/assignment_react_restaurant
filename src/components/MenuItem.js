import React from 'react';
import './MenuItem.css';

const MenuItem = ({ item }) => {
  const { name, description, price } = item;

  return (
    <div className="MenuItem media col-sm-6">
      <div className="media-left">
        <img className="media-object" src="./menu-item.jpg" />
      </div>
      <div className="media-body">
        <h4 className="media-heading">
          {name} <small>${price}</small>
        </h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default MenuItem;
