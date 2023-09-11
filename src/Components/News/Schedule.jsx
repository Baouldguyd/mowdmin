import React from 'react'

const Schedule = () => {
  return (
    <div className='schedule'>
        <h2>Check calendar for Events</h2>

        

        <div className='scheduleText'>
          <h2>Every Monday</h2>
          <p>Dayspring from on high hath visited us: John 5v8.</p>
          <p>Le soleil levant nous a visités d'en haut. Jean 5v8</p>
        
          <h2>Every 1° Sunday of the Month:</h2>
          <p>The voice of the presence of God</p>
          <p>La voix de la présence de Dieu.</p>

          <h2>Every 2° Thursday of the Month:</h2>
          <p>Everyday people Everyday life.</p>
          <p>La vie de tous les jours, les hommes de tous les jours. </p>


          <h2>Every 3° Friday of the Month:</h2>
          <p>My Rood shall blossom because I am a chosen one.</p>
          <p>Ma verge fleurira parce que je suis un élu. </p>

          <h2>Every last Wednesday of the Month:</h2>
          <p>Power that swallows up powers.</p>
          <p>La puissance qui engloutit les puissances. </p>

          <h2>Every last Saturday of the Month:</h2>
          <p>Hour of the Truth. </p>
          <p>L´heure de la vérité</p>

          <a href="https://www.facebook.com/GospleofSalvation">
          <p>
          Follow Apostle Maurille Osse on, Facebook : maurille.osse, or Facebook : Das Evangelium der Erlösung - Mowdministries e.V, or Osse Maurille Bamigbola , or Facebook: Ephphatha Apôtre Maurille Mowdministries. 
          </p>
          </a>

          <a href="https://twitter.com/Mowdministries /">
          <p>
          On twitter: https://twitter.com/Mowdministries /
          </p>
          </a>

          <a href="https://www.instagram.com/mowdministries_e.v">
          <p>
          On Instagram: https://www.instagram.com/mowdministries_e.v
          </p>
          </a>
          
          <a href="https://www.youtube.com/channel/UCLEcq4XDtqcWSDys7_fmvYw">
          <p>
          On YouTube: Bamigbola Maurille Osse. Or on YouTube: Gospel of Salvation Ministries. Or Mowdministries e.V
          </p>
          </a>

          <a href="https://www.tiktok.com/@mowdministries">
          <p>
          On tiktok: www.tiktok.com/@mowdministries
          </p>
          </a>
          

          <p>
          On telegram: Mowdministries e V
          </p>

          <a href="https://www.mowdministries.org">
          <p>
          Check our website: www.mowdministries.org for more information
          </p>
          </a>
          

        </div>

        <div 
        style={{
            width: '100%',
            height: '50vh'
        }}
        >
            
            <iframe
            src="https://calendar.google.com/calendar/embed?src=ec38d9607a869f008514b4fc083dcaffc0cbb6514b9ae064a8e744906b35d3e2%40group.calendar.google.com&ctz=Europe%2FAmsterdam"
            style={{ border: '0', display: 'block', margin: "auto", padding: '5px' }}
            width="100%"
            height="90%"
            frameborder="0"
            scrolling ="no"
            title ='calendar'
            className='calendar'
            >

            </iframe>
        </div>

        
    </div>
  )
}

export default Schedule;