import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../store/counterSlice';

export default function Counter() {
  const count = useSelector(state => state.counter.value);
  const dipatch = useDispatch();
  return (
    <div>
      <button onClick={() => dipatch(increment())}>Increment</button>
      <span>{count}</span>
      <button onClick={() => dipatch(decrement())}>Decrement</button>
    </div>
  );
}
