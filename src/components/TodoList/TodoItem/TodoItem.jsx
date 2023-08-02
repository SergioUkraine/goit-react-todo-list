import React from 'react';
import {
  ListItem,
  Checkbox,
  Name,
  Description,
  DeleteButton,
  Task,
} from './TodoItem.styled';

const TodoItem = ({
  id,
  name,
  description,
  done,
  onStatusChange,
  onDelete,
}) => {
  return (
    <ListItem done={done}>
      <Checkbox
        type="checkbox"
        name="done"
        checked={done}
        onChange={onStatusChange}
      />
      <Task done={done}>
        <Name>{name}</Name> <Description>{description}</Description>
      </Task>
      <DeleteButton
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </DeleteButton>
    </ListItem>
  );
};

export default TodoItem;
