import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AddForm from '../../components/places/AddForm';
import { connect } from 'react-redux';
import { newPlace } from '../../actions/placeAction.js';


class CreatePlace extends PureComponent {
  static propTypes = {
    createPlace: PropTypes.func.isRequired
  }

  state = {
    placeName: '',
    address: '',
    startTime: '',
    endTime: '',
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
    sports: false,
    queer: false,
    fancy: false,
    patio: false,
    groups: false,
    dive: false,
    dog: false,
    games: false,
    dates: false,
    wheelchair: false,
    noisy: false,
    vegan: false,
    vegetarian: false
  }

  handleSubmit = event => {
    event.preventDefault();
    const { placeName, address, startTime, endTime, monday, tuesday, wednesday, thursday, friday, saturday, sunday, sports, queer, fancy, patio, groups, dive, dog, games, dates, wheelchair, noisy, vegan, vegetarian, gluten, parking, reservations } = this.state;

    this.props.createPlace({ placeName, address, startTime, endTime, monday, tuesday, wednesday, thursday, friday, saturday, sunday, sports, queer, fancy, patio, groups, dive, dog, games, dates, wheelchair, noisy, vegan, vegetarian, gluten, parking, reservations });
    
    this.setState({ placeName: '', address: '', startTime: '', endTime: '', monday: false, tuesday: false, wednesday: false, thursday: false, friday: false, saturday: false, sunday: false,  sports: false, queer: false, fancy: false, patio: false, groups: false, dive: false, dog: false, games: false, dates: false, wheelchair: false, noisy: false, vegan: false, vegetarian: false, gluten: false, parking: false, reservations: false });
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  render() {
    const { placeName, address, startTime, endTime, monday, tuesday, wednesday, thursday, friday, saturday, sunday, sports, queer, fancy, patio, groups, dive, dog, games, dates, wheelchair, noisy, vegan, vegetarian, gluten, parking, reservations } = this.state;
    return (
      <AddForm
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        placeName={placeName}
        address={address}
        startTime={startTime}
        endTime={endTime}
        monday={monday}
        tuesday={tuesday}
        wednesday={wednesday}
        thursday={thursday}
        friday={friday}
        saturday={saturday}
        sunday={sunday}
        sports={sports}
        queer={queer}
        fancy={fancy}
        patio={patio}
        groups={groups}
        dive={dive}
        dog={dog}
        games={games}
        dates={dates}
        wheelchair={wheelchair}
        noisy={noisy}
        vegan={vegan}
        vegetarian={vegetarian}
        gluten={gluten}
        parking={parking}
        reservations={reservations}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createPlace(place) {
    dispatch(newPlace(place));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(CreatePlace);
