import { createAction } from 'promise-middleware-redux';
import { makePlace } from '../services/happierApi';
// services

export const [
  newPlace,
  NEW_PLACE,
  NEW_PLACE_PENDING
] = createAction('NEW_PLACE', makePlace);
