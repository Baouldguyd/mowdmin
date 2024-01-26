import React from 'react';
import {Link} from 'react-router-dom';




const ActionDetails = () => {
  return (
    <div className='event'>
        <div className='events'>
            <div className='lineAction'></div>
        
            <div className='eventsHeadline'>
                <h1> Action and Plan </h1>
            </div>
            <div className='lineAction'></div>
        </div>

        <Link to='/events' >
        
        <div className='action' style={{ height: '10rem' }}>
            
        </div>
        </Link>

        

    </div>
    
  )
}

export default ActionDetails;