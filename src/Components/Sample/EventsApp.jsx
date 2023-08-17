import React from 'react'
import { FaCalendar } from 'react-icons/fa';
import MyCarousel from './MyCarousel';


const EventsApp = () => {
  return (
    <div className='event'>
        <div className='events'>
            <div className='line'></div>
        
            <div className='eventsHeadline'>
                <h1><FaCalendar/> Events </h1>
            </div>
            <div className='line'></div>
        </div>

        <div>
            <MyCarousel/>
        </div>

        

    </div>
    
  )
}

export default EventsApp;