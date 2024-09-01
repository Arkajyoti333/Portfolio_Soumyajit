import React from 'react'
import './works.css';


const Works = () => {
  return (
    <section id='works'>
      <div>
        <h2 className='worksTitle'>My Achievements</h2>
        <span className='worksDesc'>I am skilled and passionate web designer with experience in creating visually appealing and user-friendly websites.I have a strong understanding of design and a keen eye for deatail.i am proficient in HTML,CSS,JavaScript and React,NodeJS as well as design UI and UX.</span>
      <div className='worksBars'>

        <div className='worksBar'>
          <h2>Portfolio</h2>
          <div className='projectsBarText'>
            <p>This Project is Live and now you are in this Project. Here is a more detailed description that expands on the features and goals of this project.</p>
          </div>
        </div>
        
        <div className='worksBar'>
          <h2>Portfolio</h2>
          <div className='projectsBarText'>
            <p>This Project is Live and now you are in this Project. Here is a more detailed description that expands on the features and goals of this project.</p>
          </div>
        </div>

        <div className='worksBar'>
          <h2>Portfolio</h2>
          <div className='projectsBarText'>
            <p>This Project is Live and now you are in this Project. Here is a more detailed description that expands on the features and goals of this project.</p>
          </div>
        </div>

        <div className='worksBar'>
          <h2>Portfolio</h2>
          <div className='projectsBarText'>
            <p>This Project is Live and now you are in this Project. Here is a more detailed description that expands on the features and goals of this project.</p>
          </div>
        </div>

      </div>
      </div>
    </section>
  )
}

export default Works;