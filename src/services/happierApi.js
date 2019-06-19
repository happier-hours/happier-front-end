import { post, get } from './request';

export const makePlace = place => post('/places', place);
export const getPlaces = () => get('/places');
export const getPlace = id => get(`/places/${id}`);
  // .then(json => console.log(json));
