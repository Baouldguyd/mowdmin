import React from 'react';
import { Carousel } from 'antd';


const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  marginTop : '2rem',
  fontFamily : 'sava-pro-semibold, sans-serif'
  
};


const onChange = (currentSlide) => {
  console.log(currentSlide);
}

const EventsApp = () => (

  
  

  <Carousel afterChange={onChange}>
    <div className='scripture'>

      <h3 className='h3text' style={contentStyle
        
      }>Scripture Reading</h3>
    </div>
    <div className='charity'>

      <h3 className='h3text' style={contentStyle}> Charitable Deeds</h3>
    </div>
    <div className='baptism'>

      <h3 className='h3text' style={contentStyle}>Water Baptism</h3>
    </div>
    <div className='supper'>
      <h3 className='h3text' style={contentStyle}>Lord Supper</h3>
    </div>

    <div  className='convention'>
      <h3 className='h3text' style={contentStyle}>Holy Spirit Convention</h3>
    </div>

    
  </Carousel>
);
export default EventsApp;

