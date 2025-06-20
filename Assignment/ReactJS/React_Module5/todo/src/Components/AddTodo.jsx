import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../recoil/Atoms';

const AddTodo = () => {
  const [text, setText] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addTodo = () => {
    if (text.trim() !== '') {
      setTodoList(oldList => [
        ...oldList,
        {
          id: Date.now(),
          text,
          completed: false,
        },
      ]);
      setText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="Add a task..."
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default AddTodo;
