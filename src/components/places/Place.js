import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Place({ place }) {
  return (
    <Link to={`places/${place._id}`}>{place.placeName}</Link>
  );
}

Place.propTypes = {
  place: PropTypes.object.isRequired
};

export default Place;
