import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import newmowdlogo from './Assets/newmowdlogo.png'

const LoadingScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home'); // Redirect to the homepage after 7 seconds
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="loading-screen">

      <Link to='/home'>
      <div className='screen'>
          <div className='cross-logo'>
            <img src={newmowdlogo} alt=""  />
          </div>

          <div className='churchText'>
            <h2>Evangelium der Erlösung</h2>
            <h2> Gospel of salvation</h2>
            <h2>Évangile du Salut.</h2>

        </div>
      </div>

      

      <div className='pastor'>

      </div>
      </Link>
    </div>
  );
};

export default LoadingScreen;
