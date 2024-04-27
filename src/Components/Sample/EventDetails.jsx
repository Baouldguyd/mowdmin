import React from 'react'
import EventsApp from './EventsApp';


const Eventsdetails = () => {

  return (
    <div className='event'>
        <div className='events'>
            <div className='line'></div>
        
            <div className='eventsHeadline'>
                <h1> Action </h1>
            </div>
            <div className='line'></div>
        </div>

          

        <div>
            <EventsApp/>
            
        </div>

        

    </div>
    
  )
}

export default Eventsdetails;