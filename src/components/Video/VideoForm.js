import React from 'react';
import './VideoForm.css';

export default function VideoForm() {
  return (
    <div className="align">
      <form action="https://httpbin.org/post" method="POST" className="form video">
        <div className="form__field">
          <input
            id="login__username"
            type="text"
            name="video"
            className="form__input"
            placeholder="Video URL"
            required
          ></input>
        </div>
        <div className="form__field">
          <input type="submit" value="Submit"></input>
        </div>
      </form>
    </div>
  );
}
