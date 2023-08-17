import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoadingScreen() {
  const [showLoading, setShowLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoading(false);
      navigate.push('/'); // Redirect to the home page after 6 seconds
    }, 6000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  if (showLoading) {
    return (
      <div className="loading-screen">
        {/* You can customize the loading screen content here */}
        <p>Loading...</p>
        <h1>Loading</h1>
      </div>
    );
  }

  return null;
}

export default LoadingScreen;
