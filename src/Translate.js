import React, { useEffect, useState } from 'react';

const Translate = () => {
//   const [isTranslateAPIReady, setIsTranslateAPIReady] = useState(false);

  useEffect(() => {
    function googleTranslateElementInit() {
    //   setIsTranslateAPIReady(true);
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en', layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE },
        'google_translate_element'
      );
    }

    if (!window.google || !window.google.translate) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      script.onload = () => {
        googleTranslateElementInit();
      };
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    } else {
      googleTranslateElementInit();
    }
  }, []);

  return (
    <div className='lang'>
     
        <div id="google_translate_element"></div>
      
        <p>Loading Google Translate...</p>
    
      <p>Translate to Your Language</p>
    </div>
  );
};

export default Translate;
