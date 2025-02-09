import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {
    const form = useRef()
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(
            'service_8pqdc0q',  // Replace with your Service ID
            'template_0lfwndb', // Replace with your Template ID
            form.current, 
            'tVebSinud4TOI8c3U'   // Replace with your Public Key
          )
          .then(
            (result) => {
              console.log('SUCCESS!', result.text);
              // Clear the form after successful submission
              form.current.reset();
              // You can add a success message here
              alert('Email sent successfully!');
            },
            (error) => {
              console.log('FAILED...', error.text);
              // You can add an error message here
              alert('Failed to send email. Please try again.');
            },
          );
      };


  return (
    <div className="Join" id="join-us">
        <div className="left-j">
            <hr/>
            <div>
                <span className="stroke-text">READY TO</span>
                <span>LEVEL UP</span>
            </div>

            <div>
                <span>YOUR BODY</span>
                <span className="stroke-text">WITH US</span>
            </div>
        </div>
        <div className="right-j">

            <form ref={form} className='email-container' onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder='Enter your email address' />
                <button className='btn btn-j'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join
