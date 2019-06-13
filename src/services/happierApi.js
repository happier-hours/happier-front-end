import { post } from './request';

export const makePlace = place => post('/api/v1/places', place);
