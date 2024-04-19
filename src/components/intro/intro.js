import React from 'react';
import './intro.css';
import bg from '../../assets/dp.png';
import {Link} from 'react-scroll'
import hm from '../../assets/hireme.png'
const Intro = () => {
  return (
    <section id='intro'>
      <h1 className='hello'>Hi There!<span className='wave'alt='wavy hand'>👋🏻</span></h1>
      <div className='introContent'>
        <h1 className='introText'><br/>I'm <span className='introName'>Soumyajit Ray</span><br/>Web developer</h1>
        <h2 className='introPara'>I used to design websites in Figma and made it using HTML,CSS,ReactJs.</h2>
        <Link><button className='btn'><img src={hm} alt='hire me'className='HM' />Hire me</button></Link>
      </div>
        <div>
          <img src={bg} alt='dp' className='bg'/>
        </div>  
    </section>
  )
}

export default Intro;