import TodoItem from './TodoItem';
import { List } from './TodoList.styled';

const TodoList = ({ todos, onStatusChange, onDeleteCross }) => {
  return (
    <List>
      {todos.map(({ id, name, description, done }) => (
        <TodoItem
          key={id}
          id={id}
          name={name}
          description={description}
          done={done}
          onStatusChange={() => onStatusChange(id)}
          onDelete={onDeleteCross}
        />
      ))}
    </List>
  );
};

export default TodoList;
