import React from "react";
import request from '../../Assets/bible.jpg'
import RequestForm from "./Baptism/RequestForm";

const Requests = () => {

  return (
    <div className="aboutpg fade-in appear">
      
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
      </style>

      <div className="abouthead">
        <div className="aboutheadimg">
          <img src={request} alt="" />
        </div>
      </div>

      <div>
        <h3
            style={{
                textAlign: 'center'
            }}
        >Submit Your Prayer Requests</h3>

            <RequestForm/>
      </div>



    </div>
  );
};

export default Requests;
