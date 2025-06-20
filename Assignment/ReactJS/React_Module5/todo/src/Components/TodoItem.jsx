import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../recoil/Atoms';

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const toggleComplete = () => {
    setTodoList(oldList =>
      oldList.map(todo =>
        todo.id === item.id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteItem = () => {
    setTodoList(oldList => oldList.filter(todo => todo.id !== item.id));
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={toggleComplete}
      />
      <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
        {item.text}
      </span>
      <button onClick={deleteItem}>Delete</button>
    </div>
  );
};

export default TodoItem;
