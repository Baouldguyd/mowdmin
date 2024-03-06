import React from 'react'
import "../myBible.css";
import NextButton from './NextButton';
import { Link } from 'react-router-dom';


const BibleSummary = () => {
  return (
    <div className='body'>
        
        <div className='welcomeScreen'>
            <div className="top">
                <div className="top-box"></div>
            </div>
            <div className="summaryDiv">
                <div className="vector"></div>
                <div className="summaryText">
                    <p className='summaryTitle'
                   
                    >BIBLE SUMMARY</p>
                    <p style={{
                        textAlign: 'center'
                    }}>The Bible promises that Jesus Christ will return to this earth as the conquering King. Only  those who live in repentant faith in Christ will escape God’s judgement and live joyfully in God’s presence for all eternity. God’s message is the same to all of us: repent and believe,  before it is too late.  </p>
                </div>
              <Link to='/bibleLanguage'> <NextButton/> </Link>   
            </div>
            <div className="bottom"><div className="bottom-box"></div></div>
            
        </div>
    </div>
  )
}

export default BibleSummary;