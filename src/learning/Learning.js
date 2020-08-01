import React from 'react';
import logo from './me.jpg';
import './Learning.css';
import '../App.css';
import Time from '../time/Time.js';
import Input from '../input/Input.js';

class Learning extends React.Component {
  render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} alt="logo" />

            <Input />
            <Time />
          </header>
        </div>
      );
  }
}

export default Learning;
