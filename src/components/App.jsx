import React, { Component } from 'react';
import { Container } from './App.styled';
import { nanoid } from 'nanoid';

import TodoEditor from './TodoEditor';
import Section from './Section';
import TodoList from './TodoList';
import Filter from './Filter';

class App extends Component {
  state = {
    todoList: [
      {
        id: 'id-1',
        name: 'Щось зробити',
        description: 'І ось такий текст завдання',
        done: false,
      },
      {
        id: 'id-2',
        name: 'Ще щось зробити',
        description: 'Ну ось такий текст завдання',
        done: false,
      },
      {
        id: 'id-3',
        name: 'Ще ось таке',
        description: 'І ось такий текст завдання',
        done: false,
      },
      {
        id: 'id-4',
        name: 'І таке',
        description: 'Ну ось такий текст завдання',
        done: true,
      },
    ],
    filter: '',
  };

  addFilter = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  getFiltred = tasks => {
    const filter = this.state.filter.toLowerCase();
    return tasks.filter(task => task.name.toLowerCase().includes(filter));
  };

  addTodo = ({ name, description }) => {
    const taskId = nanoid();
    console.log(this.state.todoList);
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
    console.log(this.state);
    return (
      <Container>
        <Section title="Додати завдання">
          <TodoEditor onSubmit={this.addTodo} />
        </Section>
        <Section title="Перелік завдань">
          <Filter getFilterQ={this.addFilter} filter={this.state.filter} />
          <TodoList
            todos={this.getFiltred(this.state.todoList)}
            onStatusChange={this.changeStateTodo}
            onDeleteCross={this.deleteById}
          />
        </Section>
      </Container>
    );
  }
}

export default App;
