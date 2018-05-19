import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import counter from './counter';
import alert from './alert.reducer';
import registration from './register.reducer';

const root = combineReducers({
  router: routerReducer,
  counter,
  alert,
  registration
});

export default root;