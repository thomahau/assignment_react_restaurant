import React from 'react';
import data from '../data.js';

const list = [
  {
    slot: '18:00',
    size: '1 person'
  },
  {
    slot: '18:30',
    size: '2 people'
  },
  {
    slot: '19:00',
    size: '3 people'
  },
  {
    slot: '19:30',
    size: '4 people'
  },
  {
    slot: '20:00',
    size: '5 people'
  },
  {
    slot: '20:30',
    size: '6 people'
  },
  {
    slot: '21:00',
    size: '7 people'
  },
  {
    slot: '21:30',
    size: '8 people'
  },
  {
    slot: '22:00',
    size: '9 people'
  }
];

const Reservation = () => {
  return (
    <div className="container" id="reservation">
      <div className="row">
        <h2 className="text-center">{data.reservation.title}</h2>
        <div className="col-sm-5">
          <p>
            Book a table right here on the site, call us at{' '}
            {data.reservation.phone},<br />or send us an email on{' '}
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
            <div className="form-group">
              <label for="time" className="col-sm-3 control-label">
                Time
              </label>
              <div className="col-sm-9">
                <select className="form-control" id="time">
                  {list.map(function(item) {
                    return <option>{item.slot}</option>;
                  })}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label for="diners" className="col-sm-3 control-label">
                Diners
              </label>
              <div className="col-sm-9">
                <select className="form-control" id="diners">
                  {list.map(function(item) {
                    return <option>{item.size}</option>;
                  })}
                </select>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-3 col-sm-9">
                <button type="submit" className="btn btn-primary">
                  Find a Table
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
