import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import './App.css';
import {increment, decrement} from './store/counter/actions'

const App = () => {
  const counter = useSelector(state => state.counter)

  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increase Counter</button>
      <button onClick={() => dispatch(decrement())}>Decrease Counter</button>
    </div>
  );
}

export default App;
