import { post, get } from './request';

export const makePlace = place => post('/api/v1/places', place);
export const getPlaces = () => get('/api/v1/places');
export const getPlace = id => get(`/api/v1/places/${id}`);
