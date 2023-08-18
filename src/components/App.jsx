import React, { Component } from 'react';
import { Container } from './App.styled';
import { nanoid } from 'nanoid';

import TodoEditor from './TodoEditor';
import Section from './Section';
import TodoList from './TodoList';
import Filter from './Filter';
import defaultTodos from '../data/defaultList';

class App extends Component {
  state = {
    todoList: defaultTodos,
    filter: '',
  };

  componentDidMount() {
    const parsedInfo = JSON.parse(localStorage.getItem('todos'));
    if (parsedInfo) {
      this.setState({ todoList: parsedInfo });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.todoList !== prevState.todoList) {
      localStorage.setItem('todos', JSON.stringify(this.state.todoList));
    }
  }

  handleClearButton = () => {
    localStorage.clear();
    this.setState({ todoList: defaultTodos });
  };

  addFilter = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  getFiltred = tasks => {
    const filter = this.state.filter.toLowerCase();
    return tasks.filter(task => task.name.toLowerCase().includes(filter));
  };

  getSorted = tasks => {
    return tasks.sort((a, b) => {
      if (a.done === b.done) {
        return 0; // No change in order
      }
      if (a.done) {
        return 1; // a comes after b (a.done is true)
      }
      return -1; // b comes after a (b.done is false)
    });
  };

  addTodo = ({ name, description }) => {
    const taskId = nanoid();
    const newTodo = { id: taskId, name: name, description: description };
    this.setState(prevState => ({
      todoList: [newTodo, ...prevState.todoList],
    }));
  };

  changeStateTodo = id => {
    this.setState(prevState => {
      const result = prevState.todoList.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      );
      return { todoList: result };
    });
  };

  deleteById = id => {
    this.setState(prevState => ({
      todoList: prevState.todoList.filter(todo => todo.id !== id),
    }));
  };

  render() {
    const filtredTodos = this.getFiltred(this.state.todoList);
    const sortedTodos = this.getSorted(filtredTodos);
    return (
      <Container>
        <Section title="Додати завдання">
          <TodoEditor
            onSubmit={this.addTodo}
            onClear={this.handleClearButton}
          />
        </Section>
        <Section title="Перелік завдань">
          <Filter getFilterQ={this.addFilter} filter={this.state.filter} />
          <TodoList
            todos={sortedTodos}
            onStatusChange={this.changeStateTodo}
            onDeleteCross={this.deleteById}
          />
        </Section>
      </Container>
    );
  }
}

export default App;
