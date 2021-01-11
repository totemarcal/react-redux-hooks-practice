import { createStore } from 'redux';

//import reducers from '../reducers.js'; //Import the reducer
import  reducers from './reducers';

//console.log(reducers)

// Connect our store to the reducers
const store = createStore(reducers);

export default store