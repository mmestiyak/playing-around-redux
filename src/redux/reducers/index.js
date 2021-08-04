import { combineReducers } from 'redux';
import shoppingReducer from './shoppingReducer';

const reducers = combineReducers({
  shopping: shoppingReducer,
});

export default reducers;
