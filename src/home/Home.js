import React from 'react';
import {BrowserRouter, Route, Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';
import Time from '../time/Time.js';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Home page
        </p>

        <Time />
      </header>
    </div>
  );
}

export default Home;
