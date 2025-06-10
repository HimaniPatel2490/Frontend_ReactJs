// src/StateContext.jsx
import React, { useReducer, useContext, createContext } from 'react';

// Context and Initial State
const StoreContext = createContext();
const initialState = { count: 0 };

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Store Provider
const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

// Custom Hooks
const useSelector = (selectorFn) => {
  const { state } = useContext(StoreContext);
  return selectorFn(state);
};

const useDispatch = () => {
  const { dispatch } = useContext(StoreContext);
  return dispatch;
};

// UI Component
const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Counter App </h2>
      <h3>Count: {count}</h3>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      &nbsp;
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
};

// Main Exported Component
const StateContext = () => {
  return (
    <StoreProvider>
      <Counter />
    </StoreProvider>
  );
};

export default StateContext;
