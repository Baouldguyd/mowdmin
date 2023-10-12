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
        <p style={{ textAlign: 'center' }}>Use any of our payment methods below</p>
      </div>

      <div style={{
        width: '100vw',
        display: 'flex'
        
      }}>
        <a href="https://donate.stripe.com/bIY2aqg7R0Z9c6YaEH">
        <img style={giftStyle} src={stripe} alt="" />
        </a>

        <img style={giftStyle} src={paypal} alt="" />
      </div>

    </div>
  )
}

export default GiftPage;