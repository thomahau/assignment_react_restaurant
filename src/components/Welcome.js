import React from 'react';
import data from '../data.js';

const Welcome = () => {
  return (
    <div className="container" id="welcome">
      <div className="row">
        <div className="col-sm-12">
          <h2 className="text-center">{data.welcome.title}</h2>
          <p>{data.welcome.text}</p>
          <p>{data.welcome.text}</p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
