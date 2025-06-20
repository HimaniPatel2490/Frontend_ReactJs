import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from '../recoil/Atoms';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <div>
      {todoList.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        todoList.map(item => <TodoItem key={item.id} item={item} />)
      )}
    </div>
  );
};

export default TodoList;
