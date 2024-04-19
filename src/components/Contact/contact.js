import React, { useRef } from 'react';
import './contact.css';
import FBIcon from '../../assets/facebook-icon.png'
import IGIcon from '../../assets/instagram.png'
import X from '../../assets/twitter.png'
import Lin from '../../assets/linkedIn.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
       const form = useRef();

       const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_tck00g1', 'template_nxs2mke', form.current, {publicKey: 'JyTa0tzO_-yP3yOkxxBeP'})
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
      };
    
  return (
    <section id='contactPage'>
        <div className='contact'>
            <h1 className='contactPageTitle'>Contact me</h1>
            <span className='contactDesc'>Please fill out this form below to discuss any work opportunities</span>
            
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='your_name'/>
                <input type='email' className='email' placeholder='Your Email' name="your_email"/>
                <textarea className='msg'  rows='10' placeholder='Your Message'name='message'/>
                <button className='submitBtn' type='submit' value='send'>Submit</button>
                         
                <div className='links'>
                    <img src={FBIcon} alt='facebook' className='link'/>
                    <img src={IGIcon} alt='instagram' className='link'/>
                    <img src={X} alt='X' className='link'/>
                    <img src={Lin} alt='linkedIn' className='link'/>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact