// we have installed the react in node modules
// this gives file wide access to React
import React, { Component }   from 'react'
import HomeScreen             from './HomeScreen'

export default class App extends Component {
  render() {
    return (
      <div>
         <HomeScreen />
      </div>
    );
  }
}
