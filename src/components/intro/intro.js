import React from 'react';
import './intro.css';
import bg from '../../assets/dp.png';
// import FBIcon from '../../assets/facebook-icon.png'
// import IGIcon from '../../assets/instagram.png'
// import X from '../../assets/twitter.png'
// import Lin from '../../assets/linkedIn.png'
// import git from '../../assets/git.png'
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
          {/* <div className='links'>
                  <a href='https://www.facebook.com/soumyajit.ray.75'>
                  <img src={FBIcon} alt='facebook' className='link'/>
                  </a>
                  <a href='https://www.instagram.com/soumyajit_ray/'>
                  <img src={IGIcon} alt='insta' className='link'/>
                  </a>
                  <a href='https://twitter.com/SoumyajitRay5'>
                  <img src={X} alt='facebook' className='link'/>
                  </a>
                  <a href='https://www.linkedin.com/in/soumyajit-ray2002/'>
                  <img src={Lin} alt='linkedIn' className='link'/>
                  </a>
                  <a href='https://github.com/somu46'>
                  <img src={git} alt='github' className='link'/>
                  </a>
            </div> */}
        </div>  
    </section>
  )
}

export default Intro;