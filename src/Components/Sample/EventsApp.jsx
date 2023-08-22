import React from 'react';
import { Carousel } from 'antd';
import { Link } from 'react-router-dom';


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

    
    
    
    
    
   

    <Link to='/events/scripture'> 
    <div className='scripture'>

      <h3 className='h3text' style={contentStyle
        
      }>Scripture Reading</h3>
    </div>
    </Link>

    <Link to='/events/charity'> 
    <div className='charity'>

      <h3 className='h3text' style={contentStyle}> Charitable Deeds</h3>
    </div>
    </Link>

    <Link to='/events/baptism'>
    <div className='baptism'>

      <h3 className='h3text' style={contentStyle}>Water Baptism</h3>
    </div>
    </Link>

    <Link to='/events/supper'> 
    <div className='supper'>
      <h3 className='h3text' style={contentStyle}>Lord Supper</h3>
    </div>
    </Link>

    <Link to='/events/convention'>    
    <div  className='convention'>
      <h3 className='h3text' style={contentStyle}>Holy Spirit Convention</h3>
    </div>
    </Link>

    <Link to='/events/conference'> 
    <div  className='convention'>
      <h3 className='h3text' style={contentStyle}>Conference</h3>
    </div>
    </Link>
    
    <Link to='/events/concert'> 
    <div  className='convention'>
      <h3 className='h3text' style={contentStyle}>Concert</h3>
    </div>
    </Link>

  </Carousel>
);
export default EventsApp;

