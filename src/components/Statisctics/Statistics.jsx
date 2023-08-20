import React, { Component } from 'react';
import { StatContainer, Title, InfoLine } from './Statistics.styled';

class Statistics extends Component {
  state = {
    quantity: 0,
    doneQuantity: 0,
    notDoneQuantity: 0,
  };

  todos = this.props.todoList;

  getDoneQuantity = () => {
    const result = this.todos.filter(todo => todo.done === true);
    return result.length;
  };

  getNotDoneQuantity = () => {
    const result = this.todos.filter(todo => todo.done === false);
    return result.length;
  };

  render() {
    console.log(this.todos.length);
    return (
      <StatContainer>
        <Title>Statistics</Title>
        <InfoLine>Total: {this.todos.length}</InfoLine>
        <InfoLine>Done: {this.getDoneQuantity()}</InfoLine>
        <InfoLine>Not done {this.getNotDoneQuantity()}</InfoLine>
      </StatContainer>
    );
  }
}

export default Statistics;
