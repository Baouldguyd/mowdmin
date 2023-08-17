import React from 'react';
// import { Router, Route} from 'react-router-dom';
// import { Routes } from "react-router"
import Home from './Home'; // Import your home component
// import LoadingScreen from './LoadingScreen'; // Import the loading screen component
import './App.css'


const App = () => {
  
  return (
    <Home/>
    // <Router>
    //   <Home/>
    //   <Routes>
    //     <Route path="/" exact component={Home} />
    //     {/* Other routes */}
    //   </Routes>
    // </Router>
  );
}

export default App;
