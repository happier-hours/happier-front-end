import reducer from './placeReducer';
// import { newPlace, NEW_PLACE, NEW_PLACE_PENDING } from '../actions/placeAction';

jest.mock('../services/happierApi.js');

describe('Places reducer', () => {
  it('Handles the NEW_PLACE_PENDING', () => {

    const initialState = {
      loading: false,
      list: []
    };
    const newState = reducer(initialState, {
      type: 'NEW_PLACE_PENDING'
    });

    expect(newState).toEqual({
      loading: true,
      list: []
    });
  });
});
