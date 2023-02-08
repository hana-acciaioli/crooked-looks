import React from 'react';
import ShowForm from './ShowForm.js';
import { Button } from '@mui/material';
import { useUIContext } from '../../context/UIContext.js';
import { useUserContext } from '../../context/UserContext.js';
import './ShowList.css';

export default function VideoList() {
  const { user } = useUserContext();
  const { shows } = useUIContext();
  return (
    <div>
      {/* {user &&  */}
      <ShowForm />
      {/* } */}
      <div className="show-showcase">
        <h2>Upcoming Shows</h2>
        {shows.map((show) => (
          <div key={show.id} className="show-container">
            <div className="date-container">{show.date}</div>
            <div className="location-container">{show.location}</div>
            <div className="city-container">{show.city}</div>
            <Button as="a" href={show.link} className="link-button">
              Details
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
