import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui.png'
import WebDev from '../../assets/webDev.png'
import AppDev from '../../assets/appDev.png'

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do </span>
        <span className='skillDesc'>I am skilled and passionate web designer with experience in creating visually appealing and user-friendly websites.I have a strong understanding of design and a keen eye for deatail.i am proficient in HTML,CSS,JavaScript and React,NodeJS as well as design UI and UX.</span>
        <div className='skillsBars'>
            <div className='skillBar'>
            <img src={WebDev} alt='' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h1>Web dev</h1>
                    <p>I can write the content here when i made the whole thing</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={UIDesign} alt='' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h1>UI&UX</h1>
                    <p>I can write the content here when i made the whole thing</p>
                </div>
            </div>
            <div className='skillBar'>
            <img src={AppDev} alt='' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h1>App dev</h1>
                    <p>I can write the content here when i made the whole thing</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills