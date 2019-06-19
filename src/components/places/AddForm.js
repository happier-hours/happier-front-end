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

      <input type="checkbox" id="sports" name="sports" onChange={onChange}/>
      <label htmlFor="sports">Sports Bar</label>
      <input type="checkbox" id="queer" name="queer" onChange={onChange}/>
      <label htmlFor="queer">Queer Friendly</label>
      <input type="checkbox" id="fancy" name="fancy" onChange={onChange}/>
      <label htmlFor="fancy">Fancy</label>
      <input type="checkbox" id="ac" name="ac" onChange={onChange}/>
      <label htmlFor="ac">A/C</label>
      <input type="checkbox" id="patio" name="patio" onChange={onChange}/>
      <label htmlFor="patio">Patio</label>
      <input type="checkbox" id="groups" name="groups" onChange={onChange}/>
      <label htmlFor="groups">Groups</label>
      <input type="checkbox" id="dive" name="dive" onChange={onChange}/>
      <label htmlFor="dive">Dive</label>
      <input type="checkbox" id="dog" name="dog" onChange={onChange}/>
      <label htmlFor="dog">Dog Friendly</label>
      <input type="checkbox" id="games" name="games" onChange={onChange}/>
      <label htmlFor="games">Games</label>
      <input type="checkbox" id="dates" name="dates" onChange={onChange}/>
      <label htmlFor="dates">Date Friendly</label>
      <input type="checkbox" id="wheelchair" name="wheelchair" onChange={onChange}/>
      <label htmlFor="wheelchair">Wheelchair Access</label>
      <input type="checkbox" id="noisy" name="noisy" onChange={onChange}/>
      <label htmlFor="noisy">Noisy</label>
      <input type="checkbox" id="vegan" name="vegan" onChange={onChange}/>
      <label htmlFor="vegan">Vegan</label>
      <input type="checkbox" id="vegetarian" name="vegetarian" onChange={onChange}/>
      <label htmlFor="vegetarian">Vegetarian</label>
      <input type="checkbox" id="gluten" name="gluten" onChange={onChange}/>
      <label htmlFor="gluten">Gluten Free</label>
      <input type="checkbox" id="parking" name="parking" onChange={onChange}/>
      <label htmlFor="parking">Parking</label>
      <input type="checkbox" id="reservations" name="reservations" onChange={onChange}/>
      <label htmlFor="reservations">Reservations</label>

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
  submitText: PropTypes.string,
  monday: PropTypes.bool,
  tuesday: PropTypes.bool,
  wednesday: PropTypes.bool,
  thursday: PropTypes.bool,
  friday: PropTypes.bool,
  saturday: PropTypes.bool,
  sunday: PropTypes.bool,
  sports: PropTypes.bool,
  queer: PropTypes.bool,
  fancy: PropTypes.bool,
  ac: PropTypes.bool,
  patio: PropTypes.bool,
  groups: PropTypes.bool,
  dive: PropTypes.bool,
  dog: PropTypes.bool,
  games: PropTypes.bool,
  dates: PropTypes.bool,
  wheelchair: PropTypes.bool,
  noisy: PropTypes.bool,
  vegan: PropTypes.bool,
  vegetarian: PropTypes.bool,
  gluten: PropTypes.bool,
  parking: PropTypes.bool,
  reservations: PropTypes.bool

};

AddForm.defaultProps = {
  submitText: 'Hit it!'
};

export default AddForm;
