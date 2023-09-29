import React from 'react'
// import annVideo from '../../Assets/video/annvideo1.mp4'

const NewsPage = () => {
  return (
    <div className='newsPage'>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
      </style>
      <div className='video'>
      {/* <iframe
  className='videoplay'
  src="https://www.youtube.com/embed/hIqhXWY0zVE?autoplay=1&loop=1"
  title="Announcement Video"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe> */}

<video
  src="https://res.cloudinary.com/dxjjjt3zt/video/upload/v1695990681/annvideo1_dt8klu.mp4"
  autoPlay
  loop
  className="videoplay"
  // Add this line if you want to display video controls (play, pause, volume, etc.)
></video>

      </div>

      <div>
      <p>
        1 Chronicles 16 vs 23 
        Sing to the Lord, all the earth;
        Proclaim the good news of His salvation from day to day.
      </p>

      <p>
        24.
        Declare His glory among the nations,
        His marvelous works among all peoples.
      </p>

      </div>

      <div className='newsLink'>
        <a href="https://www.mowdministries.org/events">Click Here</a> <span>
           to stay connected and be the first to be informed.
        </span>
      </div>

    </div>
  )
}

export default NewsPage;