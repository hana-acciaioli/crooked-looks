import React, { useState } from 'react';
import './ShowForm.css';
import { createShow } from '../../services/shows.js';

export default function ShowForm() {
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [link, setLink] = useState('');

  const newShowHandler = async (e) => {
    e.preventDefault();
    try {
      await createShow(date, city, location, link);
      setCity('');
      setDate('');
      setLocation('');
      setLink('');
    } catch (e) {
      console.error(e.message);
    }
  };
  return (
    <div className="align">
      <form className="form show">
        <div className="form__field">
          <input
            type="date"
            className="form__input"
            placeholder="2024-01-01"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          ></input>
          <input
            type="text"
            className="form__input"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></input>
          <input
            type="text"
            className="form__input"
            placeholder="Venue"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          ></input>
          <input
            type="text"
            className="form__input"
            placeholder="Link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          ></input>{' '}
        </div>
        <div className="form__field">
          <input type="submit" onClick={newShowHandler}></input>
        </div>
      </form>
    </div>
  );
}
