import React from 'react'
import { Link } from 'react-router-dom';
const NewTestamentBook = () => {

    const newTestamentBooks = [
    
        'Matthew',
        'Mark',
        'Luke',
        'John',
        'Acts',
        'Romans',
        '1 Corinthians',
        '2 Corinthians',
        'Galatians',
        'Ephesians',
        'Philippians',
        'Colossians',
        '1 Thessalonians',
        '2 Thessalonians',
        '1 Timothy',
        '2 Timothy',
        'Titus',
        'Philemon',
        'Hebrews',
        'James',
        '1 Peter',
        '2 Peter',
        '1 John',
        '2 John',
        '3 John',
        'Jude',
        'Revelation',
      ];



  return (
    <div
    style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '.5rem'

    }}
    >
        {newTestamentBooks.map((book,index) => (
           <Link key={index} to={`/new-testament/${index + 1}`}> <span  key={index} style={{ 
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

export default NewTestamentBook;