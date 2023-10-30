import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import styles from './Baptism.module.css';


function RegForm () {
  const [state, handleSubmit] = useForm("mknlylyw");
  
  if (state.succeeded) {
      return <p> Thank You. We will contact You Shortly!</p>;
  }

  return (
      <form onSubmit={handleSubmit} className={styles.form}> 
    
        <input 
        type="text" 
        id='name'
        name='name'
        placeholder='Your Name'
        className={styles.name}
        required
        />


      
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='Your Email'
        required
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      {/* <textarea
        id="message"
        name="message"
      /> */}
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
        
        
        <input type="tel" 
        name="phone" 
        id="phone"
        placeholder='Phone'
        required
        />

        
        <input type="text" 
        name="message" 
        id="message" 
        placeholder='Message'
        required
        className={styles.message}
        />

      <button type="submit" className={styles.bn13} disabled={state.submitting}>
        Register
      </button>
    </form>
  );
}

export default RegForm;