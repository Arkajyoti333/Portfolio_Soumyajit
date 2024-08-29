import React from 'react';
import './projects.css';
import portfolio from '../../assets/Portfolio_pr1.png';
import { FaGithub } from "react-icons/fa";

const projects = () => {
  return (
    <section id='projects'>
      <div className='projectsTitle'>
        <h1>Projects</h1>
        <div className='projectsBars'>
          
          <div className='projectsBar'>
            <img src={portfolio} alt='Portfolio' />
            <div className='projectsBarText'>
              <h2>Portfolio</h2>
              <p>This Project is Live and now you are in this Project. Here is a more detailed description that expands on the features and goals of this project.</p>
              <div className='links'>
                <a href="#more">See More</a>
                <a href="https://github.com/somu46/Portfolio"><FaGithub color='goldenrod' /> GitHub</a>
              </div>
            </div>
          </div>
          
          <div className='projectsBar'>
            <img src={portfolio} alt='Project 2' />
            <div className='projectsBarText'>
              <h2>Weather App</h2>
              <p>A weather forecasting application that provides real-time data on weather conditions in different cities. Built using React and OpenWeather API.</p>
              <div className='links'>
                <a href="#more">See More</a>
                <a href="https://github.com/somu46/WeatherApp"><FaGithub color='goldenrod' /> GitHub</a>
              </div>
            </div>
          </div>
          
          <div className='projectsBar'>
            <img src={portfolio} alt='Project 3' />
            <div className='projectsBarText'>
              <h2>ToDo List</h2>
              <p>A simple yet powerful ToDo list application to keep track of tasks. Features include task addition, deletion, and marking tasks as completed.</p>
              <div className='links'>
                <a href="#more">See More</a>
                <a href="https://github.com/somu46/ToDoList"><FaGithub color='goldenrod' /> GitHub</a>
              </div>
            </div>
          </div>
          
          <div className='projectsBar'>
            <img src={portfolio} alt='Project 4' />
            <div className='projectsBarText'>
              <h2>E-commerce Site</h2>
              <p>An e-commerce platform offering a wide range of products with features like user authentication, product search, and online payment integration.</p>
              <div className='links'>
                <a href="#more">See More</a>
                <a href="https://github.com/somu46/EcommerceSite"><FaGithub color='goldenrod' /> GitHub</a>
              </div>
            </div>
          </div>


          {/* More projects can be added here, and after a certain number (e.g., 8), you can add a "See More" button */}
          
        </div>
      </div>
    </section>
  )
}

export default projects;
