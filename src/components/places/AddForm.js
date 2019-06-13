import React from 'react';
import PropTypes from 'prop-types';

function AddForm({ onSubmit, onChange, placeName, address, submitText }) {
  return (
    <form onSubmit={onSubmit}>
      <input name="placeName" value={placeName} onChange={onChange} placeholder="Place Search" />
      <input name="address" value={address} onChange={onChange} placeholder="Address" />
      <button>{submitText}</button>
    </form>
  );
}

AddForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  placeName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  submitText: PropTypes.string
};

AddForm.defaultProps = {
  submitText: 'Hit it!'
};

export default AddForm;
