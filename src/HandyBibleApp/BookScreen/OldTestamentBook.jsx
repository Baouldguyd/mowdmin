import React from 'react'
import { Link } from 'react-router-dom';


const OldTestamentBook = () => {

    const oldTestamentBooks = [
    
        'Genesis',
      'Exodus',
      'Leviticus',
      'Numbers',
      'Deuteronomy',
      'Joshua',
      'Judges',
      'Ruth',
      '1 Samuel',
      '2 Samuel',
      '1 Kings',
      '2 Kings',
      '1 Chronicles',
      '2 Chronicles',
      'Ezra',
      'Nehemiah',
      'Esther',
      'Job',
      'Psalms',
      'Proverbs',
      'Ecclesiastes',
      'Song of Solomon',
      'Isaiah',
      'Jeremiah',
      'Lamentations',
      'Ezekiel',
      'Daniel',
      'Hosea',
      'Joel',
      'Amos',
      'Obadiah',
      'Jonah',
      'Micah',
      'Nahum',
      'Habakkuk',
      'Zephaniah',
      'Haggai',
      'Zechariah',
      'Malachi',
        
        /* Add more books here */
      ];
      

  return (
    <div
    style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '.5rem'

    }}
    >
        {oldTestamentBooks.map((book,index) => (
           <Link key={index} to={`/old-testament/${index + 1}`}>

           
           <span  key={index} style={{ 
            color: 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '27vw',
            height: '3.5rem',
            border: '2px solid black',
        
        }}> {book}</span>
        </Link>
        ))
        }
    </div>
  )
}

export default OldTestamentBook;