import React, { Component } from 'react';
import { Container, ModalButton } from './App.styled';
import { nanoid } from 'nanoid';

//components
import TodoEditor from './TodoEditor';
import Section from './Section';
import TodoList from './TodoList';
import Filter from './Filter';
import Modal from './Modal';
import Clock from './Clock';
import Tabs from './Tabs';
import HeaderContainter from './Header';
//data

import defaultTodos from '../data/defaultList';
import tabs from '../data/tabs.json';

class App extends Component {
  state = {
    todoList: defaultTodos,
    filter: '',
    showModal: false,
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

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    const filtredTodos = this.getFiltred(this.state.todoList);
    const sortedTodos = this.getSorted(filtredTodos);
    return (
      <Container>
        <HeaderContainter>
          {' '}
          <ModalButton onClick={this.toggleModal}>Show modal</ModalButton>
        </HeaderContainter>

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
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <ModalButton onClick={this.toggleModal}>Close modal</ModalButton>
            <Clock></Clock>
          </Modal>
        )}
        <Tabs items={tabs}></Tabs>
      </Container>
    );
  }
}

export default App;
