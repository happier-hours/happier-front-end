import { newPlace } from './placeAction';

jest.mock('../services/happierApi.js', () => ({
  makePlace() {
    return Promise.resolve([]);
  }
}));

describe('placedetail action', () => {
  it('creates an action to post a place', () => {
    const placeAction = newPlace({
      placeName: 'saucygirffin',
      address: 'neverwhere'
    });

    expect(placeAction).toEqual({
      type: 'NEW_PLACE',
      pendingType: 'NEW_PLACE_PENDING',
      payload: expect.any(Promise),
      fulfilledType: 'NEW_PLACE_FULFILLED',
      rejectedType: 'NEW_PLACE_REJECTED',
    });
  });

});
