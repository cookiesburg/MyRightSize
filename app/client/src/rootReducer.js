import { combineReducers } from 'redux';

import shirts from './Components/Shirts/reducer';

const rootReducer = combineReducers({
  shirts,
});

export default rootReducer;
