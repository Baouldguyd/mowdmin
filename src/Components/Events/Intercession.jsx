import React from "react";
import biblecross from "../../Assets/biblecross.jpg";
import { Link } from "react-router-dom";

const Intercession = () => {
  return (
    <div className="aboutpg fade-in appear">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
      </style>

      <div className="abouthead">
        <div className="aboutheadimg">
          <img src={biblecross} alt="" />
        </div>
      </div>

      

      <div className="scriptureDiv">
        <Link to="/request">
          <div className="oldTestament">
            <h2>PRAYER REQUEST</h2>
          </div>
        </Link>

        <Link to="/prayerlist">
          <div className="newTestament">
            <h2>INTERCESSION'S ARMY</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Intercession;
