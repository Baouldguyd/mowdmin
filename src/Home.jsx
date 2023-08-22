import React from 'react'
import AboutUs from './Components/Sample/AboutUs';


import News from './Components/Sample/News';
import Audio from './Components/Sample/Audio';
import Video from './Components/Sample/Video';
import Eventsdetails from './Components/Sample/EventDetails';
import Ourcontact from './Components/Sample/Ourcontact';
import Gift from './Components/Sample/Gift';


const Home = () => {
  return (
    <div style={{
      padding: '3px',
    }}>
        
        <AboutUs/>
        <Eventsdetails/>
        <News/>
        <Audio/>
        <Video/>
        {/* <SocialMedia/> */}
        <Ourcontact/>
        <Gift/>

    </div>




  )
}

export default Home;