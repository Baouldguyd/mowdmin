import React, { useState } from 'react';
import {  ValidationError } from '@formspree/react';
import axios from 'axios';

import styles from './Baptism.module.css';

function RequestForm() {
 

  const [prayer, setPrayer] = useState({
    pRequest: ''
  });



  const handlePrayerRequest = (event) => {
    setPrayer({
      pRequest: event.target.value
    });
  };

  const handleSubmitRequest = async (event) => {

   
    event.preventDefault();
  
    const requestData = {
      pRequest: event.target.prRequest.value,
    };
  
    try {
      const response = await axios.post(`https://prayer-request.onrender.com/api/v1/request/createRequest`
      , requestData , {
        
      });
  const apiResponse = response.data.responseMessage
  
 
      if (response.data.responseCode === '00') {
        console.log('Request created Succesfully');
        console.log(response);
        console.log(apiResponse);
      
        
        alert(`Your Prayer Request has been created succesfully . We will pray for you.`)
        

      } else {
        
        console.log('Failed to send prayer request');
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
   
    
    const form = document.getElementsByName('form')
    form.style.display = 'none'
    
  }
  
  
  return (
    <form onSubmit={handleSubmitRequest} className={styles.form}>

      <input
        type="text"
        id="name"
        name="name"
        placeholder="Your Name"
        className={styles.name}
        required
      />

      <input
        id="email"
        type="email"
        name="email"
        placeholder="Your Email"
        required
      />

      <ValidationError
        prefix="Email"
        field="email"
        
      />

      <input
        type="tel"
        name="phone"
        id="phone"
        placeholder="Phone"
        required
      />

      <input
        type="text"
        name="prRequest"
        id="prRequest"
        placeholder="Your Prayer Request"
        required
        className={styles.message}
        value={prayer.pRequest}
        onChange={handlePrayerRequest}
      />

      <button type="submit" className={styles.bn13} >
        SUBMIT
      </button>
    </form>
  );
}

export default RequestForm;
