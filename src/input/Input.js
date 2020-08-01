import React from 'react';
import '../App.css';
import './input.css';
import List from './List.js'

class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      feedbacks : []
    }

    this.handleOnKeyUp = this.keyUpHandler.bind(this);
  }

  keyUpHandler(e) {
    if (e.keyCode === 13 ) {
      this.setState({
        feedbacks: [...this.state.feedbacks, e.target.value]
      });
      e.target.value = '';
    }
  }

  render() {
    return (
      <div>
        <input type="text" name="username" placeholder="Feedback" onKeyUp={this.handleOnKeyUp} />
        <List items={this.state.feedbacks} />
      </div>
    )
  }
}

export default Input;
