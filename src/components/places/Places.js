import React from 'react';
import PropTypes from 'prop-types';
import Place from './Place';

function Places({ places }) {
  const placeList = places.map(place => (
    <li key={place._id}>
      <Place place={place} />
    </li>
  ));
  return (
    <ul>
      {placeList}
    </ul>
  );
}

Places.propTypes = {
  places: PropTypes.array.isRequired
};

export default Places;
