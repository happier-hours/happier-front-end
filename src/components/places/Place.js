import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Place({ place }) {
  return (
    <Link to={`/${place._id}`}>{place.placeName}</Link>
  );
}

// Place.propTypes = {
//   place: PropTypes.object.isRequired
// };

Place.propTypes = {
  place: PropTypes.shape({
    _id: PropTypes.string.isRequired
    // etc
  })
};

export default Place;
