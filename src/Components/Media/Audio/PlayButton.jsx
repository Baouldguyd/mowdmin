import React from 'react';

function PlayButton() {
  return (
    <div className="container">
      <label>
        <input className="play-btn" type="checkbox" />
        <div className="play-icon"></div>
        <div className="pause-icon"></div>
      </label>
    </div>
  );
}

export default PlayButton;
