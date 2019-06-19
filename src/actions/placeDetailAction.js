import { createAction } from 'promise-middleware-redux';
import { getPlace } from '../services/happierApi';

export const [
  fetchPlaceById,
  FETCH_PLACE_BY_ID,
  FETCH_PLACE_BY_ID_PENDING
] = createAction('FETCH_PLACE_BY_ID', getPlace);
