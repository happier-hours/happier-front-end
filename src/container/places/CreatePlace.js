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
    sunday: false
  }

  handleSubmit = event => {
    event.preventDefault();
    const { placeName, address, startTime, endTime, monday, tuesday, wednesday, thursday, friday, saturday, sunday } = this.state;
    this.props.createPlace({ placeName, address, startTime, endTime, monday, tuesday, wednesday, thursday, friday, saturday, sunday });
    this.setState({ placeName: '', address: '', startTime: '', endTime: '', monday: false, tuesday: false, wednesday: false, thursday: false, friday: false, saturday: false, sunday: false });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { placeName, address, startTime, endTime, monday, tuesday, wednesday, thursday, friday, saturday, sunday } = this.state;
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
