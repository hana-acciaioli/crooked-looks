import React from 'react';
import ShowForm from './ShowForm.js';
import { useUIContext } from '../../context/UIContext.js';
import { useUserContext } from '../../context/UserContext.js';

export default function VideoList() {
  const { user } = useUserContext();
  const { shows } = useUIContext();
  return (
    <div>
      {/* {user &&  */}
      <ShowForm />
      {/* } */}
      <div>
        {shows.map((show) => (
          <div key={show.id} className="show-showcase">
            {show.date}
            {show.title}
            {show.time}
            {show.location}
          </div>
        ))}
      </div>
    </div>
  );
}
