import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingScreen from './LoadingScreen';
import HomePage from './Home';
import AboutPage from './Components/Pages/AboutPage';
import ContactPage from './Components/Contact/ContactPage';
import Baptism from './Components/Events/Baptism';
import Charity from './Components/Events/Charity';
import Concert from './Components/Events/Concert';
import Conference from './Components/Events/Conference';
import Scripture from './Components/Events/Scripture';
import Supper from './Components/Events/Supper';
import Books from './Components/Media/Audio/Books';
import Gospel from './Components/Media/Audio/Gospel';
import Lectures from './Components/Media/Audio/Lectures';
import Sermon from './Components/Media/Audio/Sermon';
import Testimonies from './Components/Media/Audio/Testimonies';
import Torah from './Components/Media/Audio/Torah';
import MinistrySchedule from './Components/News/MinistrySchedule';
import NewsPage from './Components/News/NewsPage';
import Questions from './Components/News/Questions';
import GiftPage from './Components/Pages/GiftPage';
import VideoPage from './Components/Media/Video/VideoPage';
import Convention from './Components/Events/Convention';
import Prayer from './Components/Events/Prayer';
import Symposium from './Components/Events/Symposium';
import CrusadeDetails from './Components/Events/CrusadeDetails';
import EventDetails from './Components/Sample/EventDetails';
import CryBook from './Components/Media/Books/CryBook';
import SeedBook from './Components/Media/Books/SeedBook';
import ProphecyBook from './Components/Media/Books/ProphecyBook';
import ScriptureText from './Components/Pages/ScriptureText'
import Intercession from './Components/Events/Intercession';
import Requests from './Components/Events/Requests';
import IntercessionList from './Components/Events/IntercessionList';
import SelectQA from './Components/News/SelectQA';
import Answers from './Components/News/Answers';
import BapLogin from './Components/Events/Baptism/BapLogin';
import BapReg from './Components/Events/Baptism/BapReg';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadingScreen />} />
        <Route  path="/home" element={<HomePage />} />
        
        
        <Route path='/aboutus' element={<AboutPage/>} />
        <Route path='/contactus' element={<ContactPage/>} />
        
        {/* Events pages */}
        <Route path='/events' element={ <EventDetails/> } />
        
        <Route path='/events/baptism' element={<Baptism/>} />
        <Route path='events/charity' element= {<Charity/>} />
        <Route path='/events/concert' element={<Concert/>} />
        <Route path='/events/conference' element={<Conference/>} />
        <Route path = '/events/scripture' element={<Scripture/>} />
        <Route path='/events/supper' element={<Supper/>} />
        <Route path='/events/convention' element={<Convention/>} />
        <Route path='/events/prayer' element={ <Prayer/> } />
        <Route path='/events/sympossium' element={ <Symposium/> } />
        <Route path='/events/crusade' element={ <CrusadeDetails/> } />
        <Route path='/scripturetext' element={ <ScriptureText/> } />        
        

        {/* Baptism Reg & Login */}
        <Route path='/bapreg' element={ <BapReg/> } />
        <Route path='/baplogin' element={ <BapLogin/> } />

        {/* Prayers & Request */}
        <Route path='/intercession' element={ <Intercession/> } />
        <Route path='/request' element={ <Requests/> } />
        <Route path='prayerlist' element={<IntercessionList/>} />


        {/* Audio Pages */}
        <Route path='/audio/books' element={<Books/>} />
        <Route path='/audio/gospel' element={<Gospel/>} />
        <Route path='/audio/lectures' element={<Lectures/>} />
        <Route path='/audio/sermon' element={<Sermon/>} />
        <Route path='/audio/testimonies' element={<Testimonies/>} />
        <Route path='/audio/torah' element={<Torah/>} />

        {/* Books Pages */}
        <Route path='/books/crybook' element={ <CryBook/> } />
        <Route path='/books/seedbook' element={ <SeedBook/> } />
        <Route path='/books/prophecybook' element={ <ProphecyBook/> } />


        {/* Videos Page */}
        <Route path='/video' element={<VideoPage/>} />

        {/* News Page */}
        <Route path='/ministryschedule' element={<MinistrySchedule/>} />
        <Route path='/newspage' element={<NewsPage/>} />
        
        {/* Questions & Answer Page */}
        <Route path='/questions' element={<Questions/>} />
        <Route path='/select' element={<SelectQA/>} />
        <Route path='/answer' element={ <Answers/>  } />

        <Route path='/gift' element={<GiftPage/>} />
      

      
      </Routes>
    </Router>
  );
};

export default App;

