import React from 'react';
import '../App.css';

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: new Date().toLocaleTimeString() }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <span> {this.state.time} </span>
  }
}


export default Time;
