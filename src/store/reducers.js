import counter from './counter/reducer';
import { combineReducers } from 'redux';

const appReducer = combineReducers({
    counter
  })
const rootReducer = (state, action) => {
return appReducer(state, action)
}

export default rootReducer;
