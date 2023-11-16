import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "../Events/Baptism/Baptism.module.css";

function Pform() {
  const [state, handleSubmit] = useForm("mpzgearo");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
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

      <ValidationError prefix="Email" field="email" errors={state.errors} />
      {/* <textarea
        id="message"
        name="message"
      /> */}
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <input type="tel" name="phone" id="phone" placeholder="Phone" required />

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

      <input
        type="text"
        name="message"
        id="message"
        placeholder="Message"
        required
        className={styles.message}
      />

      <button type="submit" disabled={state.submitting} className={styles.bn13}>
        Submit
      </button>
    </form>
  );
}

export default Pform;
