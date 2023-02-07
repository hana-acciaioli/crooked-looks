import React, { useState } from 'react';
import './ShowForm.css';
import { createShow } from '../../services/shows.js';
import { useUIContext } from '../../context/UIContext.js';

export default function ShowForm() {
  const { shows, setShows, newShow, setNewShow } = useUIContext();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [link, setLink] = useState('');

  const newShowHandler = async (e) => {
    e.preventDefault();
    try {
      await createShow(title, date, time, location, link);
      //   const newShowList = [...shows];
      //   setShows();
      setNewShow('');
      setTitle('');
      setDate('');
      setTime('00:00 AM');
    } catch (e) {
      console.error(e.message);
    }
  };
  return (
    <div className="align">
      <form className="form show">
        <div className="form__field">
          <input
            type="text"
            className="form__input"
            placeholder="Show Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <input
            type="date"
            className="form__input"
            placeholder="2024-01-01"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          ></input>
          <input
            type="time"
            className="form__input"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          ></input>
          <input
            type="text"
            className="form__input"
            placeholder="Location"
            value={newShow.location}
            onChange={(e) => setLocation(e.target.value)}
          ></input>
          <input
            type="text"
            className="form__input"
            placeholder="Link"
            value={newShow.link}
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
