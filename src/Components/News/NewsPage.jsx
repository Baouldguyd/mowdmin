import React from 'react'
// import annVideo from '../../Assets/video/annVideo.mp4'

const NewsPage = () => {
  return (
    <div className='newsPage'>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
      </style>
      <div className='video'>
      <iframe 
       className='videoplay'
      src="https://www.youtube.com/embed/7P7opwNKIow" 
      title="Announcement" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

      </iframe>
        {/* <video src={annVideo} autoPlay className='videoplay'></video> */}
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