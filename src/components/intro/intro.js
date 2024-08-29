import React from 'react';
import './intro.css';
import bg from '../../assets/dp.png';
import cv from '../../assets/SoumyajitRay_CV.docx'; 
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaDownload } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Intro = () => {
  const email = "soumyajitray2002@gmail.com"; 

  return (
    <section id='intro'>
      <h1 className='hello'>Hi There!<span className='wave' alt='wavy hand'>👋🏻</span></h1>
      <div className='introContent'>
        <h1 className='introText'>
          <br />I'm <span className='introName'>Soumyajit Ray</span><br />Web developer
        </h1>
        <h2 className='introPara'>
          I used to design websites in Figma and made it using HTML, CSS, ReactJs.
        </h2>
        
        <div className='btn-container'>
          <button className='btn'>
            <a href={`mailto:${email}`} className='email-link'>
              <SiGmail className='HM' />
            </a>
            <p>Hire me</p>
          </button>
          <button id='resume' className='download-btn'>
            <a href={cv} download > 
              <FaDownload color='Black' className='download-icon' />Resume
            </a>
          </button>
        </div>
      </div>
     <div className='profile_image'> <img src={bg} alt='dp' className='bg' />
      
      <div className='intro-links'>
        <a href='https://www.facebook.com/soumyajit.ray.75'><FaFacebook color='Gold' /></a>
        <a href='https://www.instagram.com/soumyajit_ray/'><FaInstagram color='Gold' /></a>
        <a href='https://x.com/SoumyajitRay5'><FaSquareXTwitter color='Gold' /></a>
        <a href='https://www.linkedin.com/in/soumyajit-ray2002/'><FaLinkedin color='Gold' /></a>
        <a href='https://github.com/somu46'><FaGithub color='Gold' /></a>
      </div>
      </div>
    </section>
  );
}

export default Intro;
