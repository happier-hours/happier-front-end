import React from 'react';
import PropTypes from 'prop-types';

function AddForm({ onSubmit, onChange, placeName, address, startTime, endTime, submitText }) {
  return (
    <form onSubmit={onSubmit}>
      <input name="placeName" value={placeName} onChange={onChange} placeholder="Place Search" />
      <input name="address" value={address} onChange={onChange} placeholder="Address" />
      <input type="time" min="9:00" max="18:00" name="startTime" value={startTime} onChange={onChange} />
      <input type="time" min="9:00" max="18:00" name="endTime" value={endTime} onChange={onChange} />
      <input type="checkbox" id="monday" name="monday" onChange={onChange}/>
      <label htmlFor="monday">M</label>
      <input type="checkbox" id="tuesday" name="tuesday" onChange={onChange}/>
      <label htmlFor="tuesday">T</label>
      <input type="checkbox" id="wednesday" name="wednesday" onChange={onChange}/>
      <label htmlFor="wednesday">W</label>
      <input type="checkbox" id="thursday" name="thursday" onChange={onChange}/>
      <label htmlFor="thursday">TH</label>
      <input type="checkbox" id="friday" name="friday" onChange={onChange}/>
      <label htmlFor="friday">F</label>
      <input type="checkbox" id="saturday" name="saturday" onChange={onChange}/>
      <label htmlFor="saturday">Sat</label>
      <input type="checkbox" id="sunday" name="sunday" onChange={onChange}/>
      <label htmlFor="sunday">Sun</label>
      <button>{submitText}</button>
    </form>
  );
}

AddForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  placeName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  submitText: PropTypes.string
};

AddForm.defaultProps = {
  submitText: 'Hit it!'
};

export default AddForm;
