import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui.png';
import WebDev from '../../assets/webDev.png';
import AppDev from '../../assets/appDev.png';

const Skills = () => {
  return (
    <section id="skills" className="skillsContainer">
      <h2 className="skillsTitle">What I Do</h2>
      <p className="skillsDesc">
        I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. 
        I have a strong understanding of design and a keen eye for detail. 
        I am proficient in HTML, CSS, JavaScript, React, and NodeJS, as well as UI and UX design.
      </p>
      <div className="skillsBars">
        <div className="skillBar">
          <img src={WebDev} alt="Web Development" className="skillBarImg" />
          <div className="skillBarText">
            <h3>Web Development</h3>
            <p>I can write the content here when I have completed the whole thing.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={UIDesign} alt="UI/UX Design" className="skillBarImg" />
          <div className="skillBarText">
            <h3>UI/UX Design</h3>
            <p>I can write the content here when I have completed the whole thing.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDev} alt="App Development" className="skillBarImg" />
          <div className="skillBarText">
            <h3>App Development</h3>
            <p>I can write the content here when I have completed the whole thing.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
