import React from 'react'

const QuestionForm = () => {
  return (
    <div>
        <h2>Send in your Questions</h2>

        <div 
        style={{
            width: '100%',
            height: '60vh'
        }}
        >
            <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSc5QCWDRXtUjdWPW87A9JsRzPOVAYNc_FuPopSCXryIWSEOJQ/viewform?embedded=true" 
            style={{ border: '0', display: 'block', margin: "auto", padding: '5px' }}
            width="100%"
            height="90%" 
            frameborder="0" 
            marginheight="0" 
            marginwidth="0"
            title='question'
            >
                
                Loading…
                
                </iframe>
        
        </div>
        
    </div>
  )
}

export default QuestionForm;