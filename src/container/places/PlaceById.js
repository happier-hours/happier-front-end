import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PlaceDetail from '../../components/places/PlaceDetail';
import { fetchPlaceById } from '../../actions/placeDetailAction';
import { getPlaceDetail } from '../../selectors/detailPlaceSelector';

class PlaceById extends PureComponent {
  static propTypes = {
    place: PropTypes.object.isRequired,
    // place: PropTypes.shape({
    //   details: PropTypes.object.isRequired
    // }).isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const place = this.props;
    return <PlaceDetail place={place} />;
  }
}

const mapStateToProps = state => ({
  place: getPlaceDetail(state)
});

const mapDispatchToProps = (dispatch, { match }) => ({
  fetch() {
    dispatch(fetchPlaceById(match.params.id));
  }
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceById));
