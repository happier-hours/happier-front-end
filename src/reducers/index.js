import { combineReducers } from 'redux';
import places from './placeReducer';
import session from './sessionReducer';
import detail from './placeDetailReducer';

export default combineReducers({
  places,
  session,
  detail
});
