import {
  NEW_PLACE,
  NEW_PLACE_PENDING,
  FETCH_PLACES,
  FETCH_PLACES_PENDING
} from '../actions/placeAction';

const initialState = {
  loading: false,
  list: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case NEW_PLACE_PENDING:
      return { ...state, loading: true };
    case NEW_PLACE:
      return { ...state, loading: false, list: [...state.list, action.payload] };
    case FETCH_PLACES_PENDING:
      return { ...state, loading: true };
    case FETCH_PLACES:
      return { ...state, loading: false, list: action.payload };
    default:
      return state;
  }
}
