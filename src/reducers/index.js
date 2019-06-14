import { combineReducers } from 'redux';
import places from './placeReducer';
import session from './sessionReducer';

export default combineReducers({
  places,
  session
});
