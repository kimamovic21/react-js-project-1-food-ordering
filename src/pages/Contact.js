import React from 'react'
import '../styles/Contact.css'
import ContactImage from '../assets/contact.jpg'

function Contact() {
    return (
        <div className='contact'>

            <div className='leftSide' style={{backgroundImage:`url(${ContactImage})`}}>

            </div>

            <div className='rightSide'>
                <h1>Contact us</h1>
                <form id='contact-form' method='POST'>
                    <label htmlFor='name'>Full name</label>
                    <input name='name' 
                           type='text' 
                           placeholder='Enter your name'/>
                    <label htmlFor='email'>Email</label>
                    <input name='email' 
                           type='email' 
                           placeholder='Enter youe email address'/>
                    <label htmlFor='message'>Message</label>
                    <textarea name='message' 
                              id='msg' 
                              rows='7'
                              placeholder='Enter your message'>
                    </textarea>
                    <button type='submit'>Send message</button>
                </form>
            </div>

        </div>
    )
}

export default Contact
