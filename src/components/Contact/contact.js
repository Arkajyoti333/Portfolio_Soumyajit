import React, { useRef } from 'react';
import './contact.css';
import FBIcon from '../../assets/facebook-icon.png';
import IGIcon from '../../assets/instagram.png';
import X from '../../assets/twitter.png';
import Lin from '../../assets/linkedIn.png';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iyzoaeh', 'template_avdlkv7', form.current, 'HWMnd3nCBwrRVb7ji')
.then(
      (result) => {
        console.log('Email successfully sent!', result.text);
        toast.success('Email sent successfully!');
        form.current.reset();    // reset the from dataa in ui
      },
      (error) => {
        console.error('Failed to send email:', error.text);
        toast.error("Email sending failed.");
      }
    );
  };

  return (
    <section id='contactPage'>
      <div className='contact'>
        <h1 className='contactPageTitle'>Contact me</h1>
        <span className='contactDesc'>
          Please fill out this form below to discuss any work opportunities
        </span>

        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            className='name'
            placeholder='Your Name'
            name='your_name'
            required
          />
          <input
            type='email'
            className='email'
            placeholder='Your Email'
            name='your_email'
            required
          />
          <textarea
            className='msg'
            rows='10'
            placeholder='Your Message'
            name='message'
            required
          />
          <button className='submitBtn' type='submit'>
            Submit
          </button>

         <div className='links'> 
            <img src={FBIcon} alt='facebook' className='link' />
            <img src={IGIcon} alt='instagram' className='link' />
            <img src={X} alt='X' className='link' />
            <img src={Lin} alt='linkedIn' className='link' />
          </div>
         
        
        </form>
      </div>
    </section>
  );
};

export default Contact;
