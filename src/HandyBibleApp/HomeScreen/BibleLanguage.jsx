import React from 'react'
import { Link } from 'react-router-dom';


const BibleLanguage = () => {

    const languageSelect = [
        {
            language : 'English',
            path : '/english'
        },
        {
            language : 'German',
            path : '/german'
        },
        {
            language : 'French',
            path : '/french'
        }

    ]

  return (
    <div className='body'>
        
        <div className='welcomeScreen'>
            <div className="top">
                <div className="top-box"></div>
            </div>
            <div className="">
                {/* <div className="vector"></div> */}
                <div className="summaryText">
                    <p className='summaryTitle'
                   style={{
                    textAlign: 'center',
                    fontSize: '1.6rem'
                }}
                    >SELECT PREFERRED LANGUAGE</p>
                                        {
                        languageSelect.map((item, index)=> (
                            <Link key={index} to={item.path}>
                                <p
                                style={{
                                    marginLeft: '2rem',
                                    fontSize: '1.4rem'
                                }}
                                >{item.language}</p>
                            </Link>
                            
                        ))
                    }
                </div>
              
            </div>
            <div className="bottom"><div className="bottom-box"></div></div>
            
        </div>
    </div>
  )
}

export default BibleLanguage;