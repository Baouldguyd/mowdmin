import React from 'react'
import gift from '../../Assets/gift.png'
import paypal from '../../Assets/paypal.png'
import stripe from '../../Assets/stripe.png'


const giftStyle = {
  width: '40vw',
  height: '4rem',
  display: 'block',
  margin : 'auto',
  marginTop : '10px',
  backgroundColor: 'white',
  borderRadius : '10px'
}


const GiftPage = () => {
  return (
    <div className='aboutpg fade-in appear'>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
      </style>

      <div className='abouthead'>
          <div className="aboutheadimg">
            <img src={gift} alt="" />
          </div>
       
      </div>

      <div>
        <h2>Make a Gift</h2>
        <p style={{ textAlign: 'center' }}>
          “He that hath pity upon the poor lendeth unto the LORD; And that which
          he hath given will he pay him again.” Proverbs 19:17 
        </p>
        <p style={{ textAlign: 'center' }}>
        Please Choose one of the methods below to make a donation..</p>
      </div>

      <div style={{
        width: '100vw',
        display: 'flex',
        justifyContent: 'space-around',
        
      }}>
        <a href="https://donate.stripe.com/bIY2aqg7R0Z9c6YaEH">
        <img style={giftStyle} src={stripe} alt="" />
        </a>

        <a href="https://www.paypal.com/paypalme/Mowdministries?country.x=US&locale.x=en_US">
        <img style={giftStyle} src={paypal} alt="" />
        </a>
        
      </div>

    </div>
  )
}

export default GiftPage;