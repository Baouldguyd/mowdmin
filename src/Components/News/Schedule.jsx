import React from 'react'

const Schedule = () => {
  return (
    <div>
        <h2>Check calendar for Events</h2>

        <div 
        style={{
            width: '100%',
            height: '50vh'
        }}
        >
            
            <iframe
            src="https://calendar.google.com/calendar/embed?src=ec38d9607a869f008514b4fc083dcaffc0cbb6514b9ae064a8e744906b35d3e2%40group.calendar.google.com&ctz=Europe%2FAmsterdam"
            style={{ border: '0', display: 'block', margin: "auto" }}
            width="100%"
            height="100%"
            frameborder="0"
            scrolling ="no"
            title='calendar'
            className='calendar'
            >

            </iframe>
        </div>
        
    </div>
  )
}

export default Schedule;