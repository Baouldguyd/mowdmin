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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadingScreen />} />
        <Route  path="/home" element={<HomePage />} />
        
        <Route path='/aboutus' element={<AboutPage/>} />
        <Route path='/contactus' element={<ContactPage/>} />
        {/* Events pages */}
        <Route path='/events/baptism' element={<Baptism/>} />
        <Route path='events/charity' element= {<Charity/>} />
        <Route path='/events/concert' element={<Concert/>} />
        <Route path='/events/conference' element={<Conference/>} />
        <Route path = '/events/scripture' element={<Scripture/>} />
        <Route path='/events/supper' element={<Supper/>} />
        <Route path='/events/convention' element={<Convention/>} />

        {/* Audio Pages */}
        <Route path='/audio/books' element={<Books/>} />
        <Route path='/audio/gospel' element={<Gospel/>} />
        <Route path='/audio/lectures' element={<Lectures/>} />
        <Route path='/audio/sermon' element={<Sermon/>} />
        <Route path='/audio/testimonies' element={<Testimonies/>} />
        <Route path='/audio/torah' element={<Torah/>} />

        {/* Videos Page */}
        <Route path='/video' element={<VideoPage/>} />

        {/* News Page */}
        <Route path='/ministryschedule' element={<MinistrySchedule/>} />
        <Route path='/newspage' element={<NewsPage/>} />
        <Route path='/questions' element={<Questions/>} />
        
        <Route path='/gift' element={<GiftPage/>} />
      

      
      </Routes>
    </Router>
  );
};

export default App;

