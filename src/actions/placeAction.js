import { createAction } from 'promise-middleware-redux';
// services

export const [
  newPlace,
  NEW_PLACE,
  NEW_PLACE_PENDING
] = createAction('NEW_PLACE', createPlace);
