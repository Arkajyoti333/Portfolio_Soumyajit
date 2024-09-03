import React from 'react'
import './resume.css'
import { FaFilePdf } from "react-icons/fa";
import CV from '../../assets/Soumyajit_Ray.pdf'

const Resume = () => {
  return (

    <section id='resume' className='resume'>
      <h2 className='resumeTitle'>Resume</h2>
      <div className='resumeContainer'>
        <a href={CV} target="_blank" rel="noopener noreferrer">
          <FaFilePdf className='pdfIcon' /><span>Open Resume</span>
        </a>
      </div>
    </section>
  )
}

export default Resume
