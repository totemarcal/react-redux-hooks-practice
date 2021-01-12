import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from './store/counter/actions'
import {setUser, logOut} from './store/currentUser/actions'
import './App.css';

const App = () => {
  const counter = useSelector(state => state.counter)
  const currentUser = useSelector(state => state.currentUser)

  const dispatch = useDispatch()
  const user = {name: "Carlos"}

  useEffect(() => {
    dispatch(setUser(user))
  }, [])

  return (
    <div className="App">
    {   currentUser.loggedIn ? 
      <>
      <h1>Olá, {currentUser.user.name}</h1>
      <button onClick={() => {dispatch(logOut())}}>Logout</button>
      </>
      :
      <>
      <h1>Logout</h1>
      <button onClick={() => {dispatch(setUser(user))}}>Login</button>
      </>
    }
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increase Counter</button>
      <button onClick={() => dispatch(decrement())}>Decrease Counter</button>
    </div>
  );
}

export default App;
