import React from 'react'
import './works.css';
import IMG1 from '../../assets/ZX10R.png'

const Works = () => {
  return (
    <section id='works'>
      <h2 className='worksTitle'>My Achievements</h2>
      <span className='worksDesc'>I am skilled and passionate web designer with experience in creating visually appealing and user-friendly websites.I have a strong understanding of design and a keen eye for deatail.i am proficient in HTML,CSS,JavaScript and React,NodeJS as well as design UI and UX.</span>
      <div className='worksImgs'>
        <img src={IMG1} alt='' className='worksImg'/>
        <img src={IMG1} alt='' className='worksImg'/>
        <img src={IMG1} alt='' className='worksImg'/>
        <img src={IMG1} alt='' className='worksImg'/>
        <img src={IMG1} alt='' className='worksImg'/>
        <img src={IMG1} alt='' className='worksImg'/>
      </div>
      {/* <button className='workBtn'>See more</button> */}
    </section>
  )
}

export default Works;