import { createStore, applyMiddleware } from 'redux';
import  reducers from './reducers';
import counterMiddleware from './middleware/counterMiddleware'
// Connect our store to the reducers
const store = createStore(
    reducers,
    applyMiddleware(counterMiddleware));

export default store