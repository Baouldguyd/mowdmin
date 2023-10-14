import React from "react";
import crusade from "../../Assets/crusade.jpg";

const Crusade = () => {
  return (
    <div className="aboutpg">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
      </style>

      <div className="abouthead">
        <div className="aboutheadimg">
          <img src={crusade} alt="" />
        </div>
      </div>

      <div className="actionPlan">
        <h2>Open Air Crusade</h2>

        <p>
          We have received the commission: “Go into all the world and preach the
          gospel to all creatures”. Mark 16, verse 15 “. This brought us
          together to organize an open-air evangelization in the city of Hamm
          (Westf) NRW for the first time in 2017. It is a moment that we meet to
          praise God the Almighty. There is always inspired gospel music, by
          different gospel singers who support the event.
        </p>

      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap:'1rem',
        width: '75vw',
        margin: '0 auto',
      }}>
        <button> Past Open Air Evangelisation </button>
        <button>Coming Open Air Evangelisation</button>
      </div>
    </div>
  );
};

export default Crusade;
