import React from 'react';
import data from '../data.js';

const Reservation = () => {
  return (
    <div className="container" id="reservation">
      <div className="row">
        <h2 className="text-center">{data.reservation.title}</h2>
        <div className="col-sm-5">
          <p>
            Book a table right here on the site, call us at{' '}
            {data.reservation.phone}, or send us an email on{' '}
            <a href="mailto:joe@diner.com">joe@diner.com</a>.
          </p>
          <p>OPENING HOURS</p>
          <p>Monday to Sunday 6pm-11pm</p>
        </div>
        <div className="col-sm-7">
          <form className="form-horizontal">
            <div className="form-group">
              <label for="date" className="col-sm-3 control-label">
                Date
              </label>
              <div className="col-sm-9">
                <input type="date" className="form-control" id="date" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
