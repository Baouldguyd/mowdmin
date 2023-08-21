import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import cross from './Assets/crosslogo.png'

const LoadingScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home'); // Redirect to the homepage after 7 seconds
    }, 7000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="loading-screen">

      <div className='screen'>
          <div className='cross-logo'>
            <img src={cross} alt=""  />
          </div>

          <div className='churchText'>
            <h3>Evangelium der Erlösung</h3>
            <h3> Gospel of salvation</h3>
            <h3>Évangile du Salut.</h3>

        </div>
      </div>

      

      <div className='pastor'>

      </div>

    </div>
  );
};

export default LoadingScreen;
