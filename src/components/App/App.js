import React, { Component } from 'react';
import './App.css';

import Card from '../Card/Card';
import Button from '../Button/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        Coming Soon
        <Card />
        <Button text="Click Me"/>
      </div>
    );
  }
}

export default App;
