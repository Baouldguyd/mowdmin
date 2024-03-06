import React from 'react'
import { Link } from 'react-router-dom';


const German = () => {
    const testamentSelect = [
        {
            testament : 'Altes Testament',
            path : '/german/oldTestament'
        },
        {
            testament : 'Neues Testament',
            path : '/german/newTestament'
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
                    >SELECT BOOK</p>
                                        {
                        testamentSelect.map((item, index)=> (
                            <Link key={index} to={item.path}>
                                <p
                                style={{
                                    marginLeft: '2rem',
                                    fontSize: '1.4rem'
                                }}
                                >{item.testament}</p>
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

export default German;