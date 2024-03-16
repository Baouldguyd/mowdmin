import React, { useState, useEffect } from 'react';
import './welcome.css'; // Import your CSS file;

const Typewriter = ({ texts }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index < texts[textIndex].length) {
        setDisplayText(prevText => prevText + texts[textIndex][index]);
        setIndex(prevIndex => prevIndex + 1);
      } else {
        // Reset index and move to the next text
        setIndex(0);
        setTextIndex(prevTextIndex => (prevTextIndex + 1) % texts.length);
        setDisplayText(''); // Clear displayed text
      }
    }, 190); // Adjust the typing speed here

    return () => clearTimeout(timer);
  }, [index, textIndex, texts]);

  return (
    <div className="typewriter" style={{
    textAlign: 'center', color: 'white', height:'auto', fontSize: '1.3rem'
    }}>
      {displayText}
      <span className="cursor" /> {/* Blinking cursor */}
    </div>
  );
};

export default Typewriter;
