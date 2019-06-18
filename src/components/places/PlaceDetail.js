import React from 'react';
import PropTypes from 'prop-types';

function PlaceDetail({ place }) {
  const {
    placeName,
    address,
    startTime,
    endTime,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday,
    sports,
    queer,
    fancy,
    ac,
    patio,
    groups,
    dive,
    dog,
    games,
    dates,
    wheelchair,
    noisy,
    vegan,
    vegetarian,
    gluten,
    parking,
    reservations
  } = place;

  const displayPlace = (
    <>
      <h2>{placeName}</h2>
      <p>{address}</p>
      <section>
        {startTime}
        {endTime}
      </section>
      <section>
        {monday}
        {tuesday}
        {wednesday}
        {thursday}
        {friday}
        {saturday}
        {sunday}
      </section>
      <section>
        {sports}
        {queer}
        {fancy}
        {ac}
        {patio}
        {groups}
        {dog}
        {dive}
        {games}
        {dates}
        {wheelchair}
        {noisy}
        {vegan}
        {vegetarian}
        {gluten}
        {parking}
        {reservations}
      </section>
    </>
  );

  return displayPlace;
}

PlaceDetail.propTypes = {
  place: PropTypes.object
}.isRequired;
