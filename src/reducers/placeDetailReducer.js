import {
  FETCH_PLACE_BY_ID,
  FETCH_PLACE_BY_ID_PENDING
} from '../actions/placeAction';

const initialState = {
  loading: false,
  details: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_PLACE_BY_ID_PENDING:
      return { ...state, loading: true };
    case FETCH_PLACE_BY_ID:
      return { ...state, loading: false, details: action.payload };
    default:
      return state;
  }
}
