import React from 'react'
import AboutUs from './Components/Sample/AboutUs';


import News from './Components/Sample/News';
import Audio from './Components/Sample/Audio';
import Video from './Components/Sample/Video';
import SocialMedia from './Components/Sample/SocialMedia';
import Eventsdetails from './Components/Sample/EventDetails';

const Home = () => {
  return (
    <div>
        
        <AboutUs/>
        <Eventsdetails/>
        <News/>
        <Audio/>
        <Video/>
        <SocialMedia/>
        

    </div>
  )
}

export default Home;