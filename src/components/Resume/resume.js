import React from 'react'
import './resume.css'
import { FaFilePdf } from "react-icons/fa";
const Resume = () => {
  return (
    <div className='resume'>
    <h2 className='resumeTitle'>Resume</h2>
    <div className='resumeContainer'>
        <FaFilePdf className='pdfIcon' />
    </div>
    </div>
  )
}

export default Resume