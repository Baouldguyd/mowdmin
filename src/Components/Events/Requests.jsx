import React from 'react';
// import { useState } from 'react';

const Requests = () => {

    // const apiUrl = process.env.REACT_APP_REQUEST_URL

    // const [prayer_request, setPrayer_Request] = useState({
    //     request: '',
    // });

    // const handleInputChange = (event) => {
    //     const {name, value} = event.target;
    //     setPrayer_Request((prevData) => ({ ...prevData, [name]: value }));
    // } 

    // const handleSubmit = ()=>{

    //     try {
            
    //        const response = 
        
    //     } 
        
    //     catch (error) {
            
    //     }

    // }

    



  return (
    <div className='fade-in appear'>
    
        <div 
        style={{
            width: '100%',
            height: '100vh'
        }}
        >
            <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLScUcEFYN4YFjJGoKNK5fPiduu-yjnMCBTk8hiEYULYnwP37nw/viewform?embedded=true" 
            style={{ border: '0', display: 'block', margin: "auto", padding: '5px' }}
            width="100%"
            height="90%" 
            frameborder="0" 
            marginheight="0" 
            marginwidth="0"
            title='question'
            >
                
                Loading…
                
                </iframe>

            <form action="" method="post">
                
                <label htmlFor="request">Enter Your Prayer Request Below</label>
                <input type="text" name="request" id="request" />

            </form>
        
        </div>
        
    </div>
  )
}

export default Requests;