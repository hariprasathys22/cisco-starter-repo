import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';

class App extends Component {
  render() {
      return (
          <div className="App">
              <Banner bannerText="Sextant" />
              <Exhibit name="Sextant"></Exhibit>
              <Exhibit name="Home"></Exhibit>
              <Exhibit name="About"></Exhibit>
          </div>
      );
  }
}

export default App;
