import React, { useState } from "react";
import {  ValidationError } from "@formspree/react";
import axios from "axios";

import styles from "./Baptism.module.css";

function RequestForm() {
  const [prayer, setPrayer] = useState({
    pRequest: "",
  });

  const handlePrayerRequest = (event) => {
    setPrayer({
      pRequest: event.target.value,
    });
  };

  const handleSubmitRequest = async (event) => {
    event.preventDefault();

    const requestData = {
      pRequest: event.target.prRequest.value,
     
    };

    try {
      // Send data to your first API (prRequest API)
      const responseAPI = await axios.post(
        "https://prayer-request.onrender.com/api/v1/request/createRequest",
        requestData
      );

      if (responseAPI.data.responseCode === "00") {
        console.log("Request created successfully");
        console.log(responseAPI);
        alert(
          `Your prayer request has been received. The Intercessors Army are standing with you  in prayer of agreement and intercedes on your behalf. 

          Please don´t forget to come back and share your testimony so that through the testimony of what the Lord has done for you, the faith of others shall be lifted and they will believe in God that answering prayer.`
        );
      } else {
        console.log("Failed to send prayer request to prRequest API");
      }
    } catch (error) {
      console.error("An error occurred while sending data to prRequest API:", error);
    }

    try {
      // Send data to Formspree
      const responseFormspree = await axios.post("https://formspree.io/f/xnqkyaze", {
        name: requestData.name,
        country: requestData.country,
        state: requestData.state,
        address: requestData.address,
        phone: requestData.phone,
        email: requestData.email,
        prRequest: requestData.pRequest,
      });

      if (responseFormspree.status === 200) {
        console.log("Form data sent to Formspree successfully");
        return <p>Thank you. We will join you in Prayers</p>
      } else {
        console.log("Failed to send form data to Formspree");
      }
    } catch (error) {
      console.error("An error occurred while sending data to Formspree:", error);
    }

    // Optionally hide the form after submission
    const form = document.getElementsByName("form")[0];
    form.style.display = "none";
  };

  return (
    <form onSubmit={handleSubmitRequest} className={styles.form} name="form">
      {/* ... (rest of your form inputs) */}
       <input
        type="text"
        id="name"
        name="name"
        placeholder="Your Full Name"
        className={styles.name}
        required
      />

      <input
        id="country"
        type="text"
        name="country"
        placeholder="Your Country"
        required
      />

      <input
        id="state"
        type="text"
        name="state"
        placeholder="Your State"
        required
      />

      <input
        id="address"
        type="text"
        name="address"
        placeholder="Your Address"
        required
      />

      <input type="tel" name="phone" id="phone" placeholder="Phone" required />

      <input
        id="email"
        type="email"
        name="email"
        placeholder="Your Email"
        required
      />

      <ValidationError prefix="Email" field="email" />

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
      {/* ... (rest of your form inputs) */}
      <button type="submit" className={styles.bn13}>
        SUBMIT
      </button>
    </form>
  );
}

export default RequestForm;


