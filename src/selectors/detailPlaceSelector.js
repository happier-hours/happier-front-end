// export const getPlaceByDetail = state => state.detail.details;

export const getPlaceDetailState = state => state.placeDetail;
export const getPlaceDetail = state => getPlaceDetailState(state).detail;
// here his demo goes on to have a separate selector \
// for each piece of state

export const getPlaceDetailPlaceName = state => getPlaceDetail(state).placeName;
// etc

// I also think we may need the loading.
