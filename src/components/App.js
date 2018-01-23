import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Welcome from './Welcome';
import Reservation from './Reservation';
import Menu from './Menu';
import data from '../data.js';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Welcome />
        <Reservation />
        <Menu menuItems={data.menuItems} />
      </div>
    );
  }
}

export default App;
