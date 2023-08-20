import React, { Component } from 'react';
import { Container } from './App.styled'; //ModalButton
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
import IconButton from './IconButton';
import Statistics from './Statisctics';

//images
import { ReactComponent as Image1 } from '../icons/icon1.svg';
import { ReactComponent as Image2 } from '../icons/icon2.svg';

//data
import defaultTodos from '../data/defaultList';
import tabs from '../data/tabs.json';

class App extends Component {
  state = {
    todoList: [],
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    const parsedInfo = JSON.parse(localStorage.getItem('todos'));
    if (parsedInfo) {
      this.setState({ todoList: parsedInfo });
    } else {
      this.setState({ todoList: defaultTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const prevTodo = prevState.todoList;
    const curruntTodo = this.state.todoList;

    if (curruntTodo !== prevTodo) {
      localStorage.setItem('todos', JSON.stringify(curruntTodo));
    }
    if (curruntTodo.length > prevTodo.length && prevTodo.length !== 0) {
      this.toggleModal();
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
    // this.toggleModal();
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
          <IconButton onClick={this.toggleModal} aria-label="Open modal">
            <Image1 width="32px" height="32px" fill="#FFF" />
          </IconButton>
        </HeaderContainter>

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
            <IconButton onClick={this.toggleModal} aria-label="Close modal">
              <Image2 width="32px" height="32px" fill="#FFF" />
            </IconButton>
            <Clock></Clock>
            <Section title="Додати завдання">
              <Statistics todoList={this.state.todoList}></Statistics>
              <TodoEditor
                onSubmit={this.addTodo}
                onClear={this.handleClearButton}
              />
            </Section>
          </Modal>
        )}
        <Tabs items={tabs}></Tabs>
      </Container>
    );
  }
}

export default App;
