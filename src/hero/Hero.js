import React from 'react'
import './Hero.css';
import CTA from './../navbar/CTA.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';


const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content-container">
        <FontAwesomeIcon icon={faRobot} size="10x"/>
        <h2 className="hero-title">Rambots<br />FTC 22557</h2>
        <p className="hero-text">Located in Victoria, B.C, Canada</p>
        <CTA />
      </div>

      <div className="image-container-one">
        <img src="https://i.ibb.co/wzRKh6Z/IMG-20240127-WA0000.jpg" alt="" />
        <img src="https://i.ibb.co/hYkMnCS/IMG-0281.jpg" />
      </div>
      <div className="image-container-two">
        <img src="https://i.ibb.co/W69Xw4d/IMG-0385.jpg" alt="" />
        <img src="https://i.ibb.co/ZVL659m/IMG-1354.jpg" alt="" />
        </div>
    </div>

    
  )
}

export default Hero
