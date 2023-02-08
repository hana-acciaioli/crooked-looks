import React from 'react';
import ShowForm from './ShowForm.js';
import { Button } from '@mui/material';
import { useUIContext } from '../../context/UIContext.js';
import { useUserContext } from '../../context/UserContext.js';
import './ShowList.css';

export default function VideoList() {
  const { user } = useUserContext();
  const { shows } = useUIContext();

  function dateToString(date) {
    const [year, month, day] = date.split('-');
    const dateObj = { month, day, year };
    let long = '';
    {
      dateObj.month === '01' && (long = 'Jan');
    }
    {
      dateObj.month === '02' && (long = 'Feb');
    }
    {
      dateObj.month === '03' && (long = 'March');
    }
    {
      dateObj.month === '04' && (long = 'April');
    }
    {
      dateObj.month === '05' && (long = 'May');
    }
    {
      dateObj.month === '06' && (long = 'June');
    }
    {
      dateObj.month === '07' && (long = 'July');
    }
    {
      dateObj.month === '08' && (long = 'Aug');
    }
    {
      dateObj.month === '09' && (long = 'Sept');
    }
    {
      dateObj.month === '10' && (long = 'Oct');
    }
    {
      dateObj.month === '11' && (long = 'Nov');
    }
    {
      dateObj.month === '12' && (long = 'Dec');
    }

    return long + ' ' + dateObj.day;
  }
  return (
    <div>
      {user && <ShowForm />}
      <div className="show-showcase">
        {/* <h2>Upcoming Shows</h2> */}
        {shows.map((show) => (
          <div key={show.id} className="show-container">
            <div className="date-container">{dateToString(show.date)}</div>
            <div className="details-container">
              <div className="location-container">{show.location}</div>
              <div className="city-container">{show.city}</div>
              <Button as="a" href={show.link} className="link-container">
                Details
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
