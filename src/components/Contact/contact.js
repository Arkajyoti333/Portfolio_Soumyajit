import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID, 
      process.env.REACT_APP_TEMPLATE_ID, 
      form.current, 
      process.env.REACT_APP_PUBLIC_KEY)
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
          </form>
         <div className='contact-links'> 
           <a href='https://www.facebook.com/soumyajit.ray.75'><FaFacebook color='Gold'/> </a>
           <a href='https://www.instagram.com/soumyajit_ray/'> <FaInstagram color='Gold'/></a>
           <a href='https://x.com/SoumyajitRay5'> <FaSquareXTwitter color='Gold'/> </a>
           <a href='https://www.linkedin.com/in/soumyajit-ray2002/'> <FaLinkedin color='Gold'/></a>
           <a href='https://github.com/somu46'> <FaGithub color='Gold'/></a>
          </div>
        
      </div>
    </section>
  );
};

export default Contact;
