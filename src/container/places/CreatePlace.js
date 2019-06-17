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
    day: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    const { placeName, address, startTime, endTime, day } = this.state;
    this.props.createPlace({ placeName, address, startTime, endTime, day });
    this.setState({ placeName: '', address: '', startTime: '', endTime: '', day: '' });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { placeName, address, startTime, endTime, day } = this.state;
    return (
      <AddForm
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        placeName={placeName}
        address={address}
        startTime={startTime}
        endTime={endTime}
        day={day}
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
