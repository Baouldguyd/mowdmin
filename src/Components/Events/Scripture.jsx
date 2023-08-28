import React from 'react'
import biblecross from '../../Assets/biblecross.jpg'


// const apiUrl = ''

// try {
  
// } catch (error) {
  
// }


const Scripture = () => {
  return (
    <div className='aboutpg'>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
      </style>

      <div className='abouthead'>
          <div className="aboutheadimg">
            <img src={biblecross} alt="" />
          </div>
       
      </div>

      <div className='scriptureDiv'>
          <div className='oldTestament'>
            <h2>OLD TESTAMENT</h2>
     
          </div>

          <div className='newTestament'>
            <h2>NEW TESTAMENT</h2>
        </div>
      </div>


    </div>
  )
}

export default Scripture;