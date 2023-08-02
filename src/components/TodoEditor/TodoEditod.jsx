import React, { Component } from 'react';
import {
  EditorForm,
  Label,
  TaskName,
  SubmitButton,
  TaskDescription,
} from './TodoEditor.styled';

class TodoEditor extends Component {
  state = {
    name: '',
    description: '',
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      description: '',
    });
  };

  render() {
    return (
      <EditorForm action="submit" onSubmit={this.onSubmit}>
        <Label>
          {'Назва'}
          <TaskName
            name="name"
            type="text"
            autoComplete="off"
            value={this.state.name}
            onChange={this.onChange}
          />
        </Label>
        <Label>
          {'Опис завдання'}
          <TaskDescription
            name="description"
            value={this.state.description}
            onChange={this.onChange}
            cols="30"
            rows="5"
          ></TaskDescription>
        </Label>
        <SubmitButton type="submit">Зберігти</SubmitButton>
      </EditorForm>
    );
  }
}

export default TodoEditor;
