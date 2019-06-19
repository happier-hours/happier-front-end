import { combineReducers } from 'redux';
import places from './placeReducer';
import place from './placeReducer';
import session from './sessionReducer';
import detail from './placeDetailReducer';

export default combineReducers({
  place,
  places,
  session,
  detail
});
