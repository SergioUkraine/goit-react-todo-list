import React, { Component } from 'react';
import { ClockTimer } from './Clock.styled';

class Clock extends Component {
  state = { time: new Date().toLocaleTimeString() };

  intervalId = null;

  componentDidMount() {
    this.intervalId = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    return <ClockTimer>{this.state.time}</ClockTimer>;
  }
}

export default Clock;
