import {combineReducers} from 'redux';

import ticker from './ticker';
import account from './account';

const rootReducer = combineReducers({
  ticker,
  account,
});

export default rootReducer;
