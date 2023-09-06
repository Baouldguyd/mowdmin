import React from 'react'
import charity from '../../Assets/charity.jpg'

const Charity = () => {
  return (
    <div className='aboutpg'>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
      </style>

      <div className='abouthead'>
          <div className="aboutheadimg">
            <img src={charity} alt="" />
          </div>
       
      </div>

      <div className='charityDeeds'>
        <h2>Our Charitable Deeds</h2>
        <p>This involves reaching out to the needy amongst us by showing 
          love and spreading the goodnews of Jesus Christ and His Salvation.
        </p>
        <p>
        We support people with social and psychological problems. (2 Corinthians 9v9)
        </p>
        
        <p>
        No one comes to Christ and goes as He was! (For everyone who calls on the name of God will be saved "Romans 10:13").
        </p>

        <p>
          Sow a seed of love today.
        </p>
      
      </div>

    </div>
  )
}

export default Charity;