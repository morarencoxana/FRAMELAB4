import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const counter = useSelector((state) => state.counter); // Use selector to access counter state
  const dispatch = useDispatch(); // Use dispatcher for actions

  const increment = () => dispatch({ type: 'INCREMENT' }); // Simplified increment function
  const decrement = () => dispatch({ type: 'DECREMENT' }); // Simplified decrement function

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Increment</button> // Clearer button label
      <button onClick={decrement}>Decrement</button> // Clearer button label
    </div>
  );
};

export default Counter;
