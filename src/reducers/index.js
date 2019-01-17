import { combineReducers } from 'redux';

import { counter } from './user-reducer';

const rootReducer = combineReducers({
  counter
})

export default rootReducer;