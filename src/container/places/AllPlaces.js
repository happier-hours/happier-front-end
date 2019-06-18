import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Places from '../../components/places/Places';
import { getAllPlaces } from '../../selectors/placeSelector';
import { fetchPlaces } from '../../actions/placeAction';

class AllPlaces extends PureComponent {
  static propTypes = {
    places: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const {
      places
    } = this.props;

    return <Places places={places} />;
  }
}

const mapStateToProps = state => ({
  places: getAllPlaces(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchPlaces());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPlaces);
