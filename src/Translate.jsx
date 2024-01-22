import React, { useEffect } from 'react';

const Translate = () => {
  useEffect(() => {
    const googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
    };

    // Load the Google Translate API script
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.head.appendChild(script);

    // Initialize the translation element once the script is loaded
    script.onload = () => {
      googleTranslateElementInit();
    };

    // Cleanup the script on component unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div id="google_translate_element">
      {/* This is where the translation widget will be rendered */}
    </div>
  );
};

export default Translate;
