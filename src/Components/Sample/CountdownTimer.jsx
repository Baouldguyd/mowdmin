import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const difference = +new Date(targetDate) - +new Date();
    let time = {};

    if (difference > 0) {
      time = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return time;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, );

  return (
    <div className='timer'>
        <div className='time-box'>
            <p>Days</p>
            <div>
            {timeRemaining.days} 
            </div>
        </div>

        <div className='time-box'>
            <p>Hours</p>
            <div>
            {timeRemaining.hours} 
            </div>
        </div>

        <div className='time-box'>
            <p>Minutes</p>
            <div>
            {timeRemaining.minutes} 
            </div>
        </div>

        <div className='time-box'>
            <p>Seconds</p>
            <div>
            {timeRemaining.seconds}
            </div>
        </div>
      
    </div>
  );
};

export default CountdownTimer;
