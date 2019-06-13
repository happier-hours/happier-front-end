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
    address: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    const { placeName, address } = this.state;
    this.props.createPlace({ placeName, address });
    this.setState({ placeName: '', address: '' });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { placeName, address } = this.state;
    return (
      <AddForm
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        placeName={placeName}
        address={address}
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
