// we have installed the react in node modules
// this gives file wide access to React
import React, { Component }   from 'react'
import HomeScreen             from './HomeScreen'


export default class App extends Component {
  render() {
    return (
      <div>
         <h3 className="search-bar">Welcome to The Video Searching App - Shiraz Bhalla</h3>
         <HomeScreen />
      </div>
    );
  }
}
