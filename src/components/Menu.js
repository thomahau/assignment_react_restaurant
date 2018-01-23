import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({ menuItems }) => {
  const cards = menuItems.map(item => <MenuItem item={item} key={item.name} />);

  return (
    <div className="container" id="menu">
      <h2 className="text-center">Menu</h2>
      {cards}
    </div>
  );
};

export default Menu;
