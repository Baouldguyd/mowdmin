import React from 'react'
import { Link } from 'react-router-dom';



const Audio = () => {
  
  return (
    <div className='audio fade-in appear'>
        <div className='events'>
            <div className='line'></div>
        
            <div className='eventsHeadline'>
                <h1> Audio</h1>
            </div>
            <div className='line'></div>
        </div>

        <div className="audioList">
        
        <Link to='/audio/torah' >
            <div className='torah'>
            <p>TORAH</p>
            </div>
          </Link>
          
          <a href="https://audiomack.com/apostle-maurille/album/leternel-est-bon">
           <div className='audiogospel'>
            <p>GOSPEL MUSIC</p>
          </div>
          </a>
          
        
          <Link to='/audio/sermon' >
          <div className='sermon'>
            <p>SERMON</p>
    
          </div>
          </Link>
          <Link to='/audio/testimonies' >
          <div className='testimony'>
            <p>TESTIMONIES</p>
          </div>
          </Link>
          
          <Link to='/audio/lectures' >
          <div className='lecture'>
            <p>LECTURE</p>
          </div>
          </Link>

          <Link to='/audio/books' >
          <div className='bookBg'>
            <p>BOOKS</p>
          </div>
          </Link>

        </div>

        
    </div>
  )
}

export default Audio;