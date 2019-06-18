import { createAction } from 'promise-middleware-redux';
import { makePlace, getPlaces, getPlace } from '../services/happierApi';
// services

export const [
  newPlace,
  NEW_PLACE,
  NEW_PLACE_PENDING
] = createAction('NEW_PLACE', makePlace);

export const [
  fetchPlaces,
  FETCH_PLACES,
  FETCH_PLACES_PENDING
] = createAction('FETCH_PLACES', getPlaces);

export const [
  fetchPlaceById,
  FETCH_PLACE_BY_ID,
  FETCH_PLACE_BY_ID_PENDING
] = createAction('FETCH_PLACES_BY_ID', getPlace);
