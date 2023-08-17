import React from 'react'
import { FaEnvelope, FaFacebook, FaPhone, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';


const SocialMedia = () => {
  return (
    <div className='.socials'>

        <div className='events'>
            <div className='line'></div>
        
            <div className='eventsHeadline'>
                <h1> Get in Touch </h1>
            </div>
            <div className='line'></div>
        </div>

        <div className='socialIcons'>
            <div className='playDiv'><button><FaEnvelope  className='playIcon'/></button></div>
            <div className='playDiv'><button><FaFacebook className='playIcon'/></button></div>
            <div className='playDiv'><button><FaTwitter className='playIcon'/></button></div>
            <div className='playDiv'><button><FaYoutube className='playIcon'/></button></div>
            <div className='playDiv'><button><FaTiktok className='playIcon'/></button></div>
            <div className='playDiv'><button><FaPhone className='playIcon'/></button></div>
            
            
            
            
            
            
        </div>

        <div className='events'>
            <div className='line'></div>
        
            <div className='eventsHeadline'>
                <h1> Donate </h1>
            </div>
            <div className='line'></div>
        </div>

        
        


    </div>
  )
}

export default SocialMedia;