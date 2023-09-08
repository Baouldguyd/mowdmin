import React from 'react'

const Schedule = () => {
  return (
    <div>
        <h2>Schedule</h2>
        <div className="google-calendar-embed">
            
            <iframe
            src="https://calendar.google.com/calendar/embed?src=ec38d9607a869f008514b4fc083dcaffc0cbb6514b9ae064a8e744906b35d3e2%40group.calendar.google.com&ctz=Africa%2FLagos"
            style={{ border: '0' }}
            width="800"
            height="600"
            frameborder="0"
            scrolling ="no"
            >

            </iframe>
        </div>
        
    </div>
  )
}

export default Schedule