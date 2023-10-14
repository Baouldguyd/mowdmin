import React from 'react';

const Requests = () => {
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
        
        </div>
        
    </div>
  )
}

export default Requests;