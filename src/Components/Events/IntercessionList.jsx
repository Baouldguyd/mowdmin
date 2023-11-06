import React, { useState, useEffect } from "react";
import biblecross from "../../Assets/biblecross.jpg";

const IntercessionList = () => {
  const [requestData, setRequestData] = useState([]);

  useEffect(() => {
    try {
      const interUrl = `https://prayer-request.onrender.com/api/v1/request/getAllRequest`;
      fetch(interUrl)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.data);
          setRequestData(data.data);
        })
        .catch((error) => {
          console.error('Error fetching response', error);
        });
    } catch (error) {
      console.error('Error in the fetch try-catch block', error);
    }
  }, []); // The empty dependency array ensures this effect runs only once

  return (
    <div className="aboutpg fade-in appear">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
      </style>

      <div className="abouthead">
        <div className="aboutheadimg">
          <img src={biblecross} alt="" />
        </div>
      </div>

      <div>
        <h3 style={{ textAlign: 'center' }}>Please choose a prayer request from the list and pray for at least 30 minutes or more. May the Lord bless you as you do so.</h3>
        <h3 style={{ textAlign: 'center', textDecoration: 'underline', fontSize: '2rem' }}>Pray for :</h3>

        <p>° Pray for the peace of Israel. “Pray for the peace of Jerusalem: they shall prosper that love thee.” Bible verse (Psalms 122:6)</p>

        <p>° Pray to God: Do not abandon any of your loved ones to fall into the trap of evil men. Bible verse Psalm 91</p>

        <div style={{
          height: 'auto',
          display: 'flex',
          flexDirection: 'column-reverse',
          backgroundColor: 'rgb(13,15,54)',
          padding: '5px'
        }}>
          
            {requestData.map((request) => (
              <p key={request.id} style={{
                fontSize: '1.1rem'
              }}>{request.pRequest}</p>
              /* Replace 'someProperty' with the actual property you want to display from your API response */
            ))}
          
        </div>
      </div>
    </div>
  );
};

export default IntercessionList;
