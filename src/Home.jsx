import React from 'react'
import AboutUs from './Components/Sample/AboutUs';
// import EventsApp from './Components/Sample/EventsApp';
import Header from './Components/Sample/Header';
import News from './Components/Sample/News';
import Audio from './Components/Sample/Audio';
import Video from './Components/Sample/Video';
import SocialMedia from './Components/Sample/SocialMedia';

const Home = () => {
  return (
    <div>
        <Header/>
        <AboutUs/>
        {/* <EventsApp /> */}
        <News/>
        <Audio/>
        <Video/>
        <SocialMedia/>
        

    </div>
  )
}

export default Home;