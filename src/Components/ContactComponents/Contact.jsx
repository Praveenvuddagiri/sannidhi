import React from 'react'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className='relative h-96'>
        <div>
            <h1>Image</h1>
        </div>
        <div className='absolute'>
            <ContactForm/>
        </div>
      
    </div>
  )
}

export default Contact
