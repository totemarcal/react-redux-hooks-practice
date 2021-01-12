import counter from './counter/reducer';
import currentUser from './currentUser/reducer';

import { combineReducers } from 'redux';

const appReducer = combineReducers({
    counter,
    currentUser
  })
const rootReducer = (state, action) => {
return appReducer(state, action)
}

export default rootReducer;
