import React from 'react'

import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBinoculars } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer">
        <h2 className="socials-title">Socials</h2>
        <div className="social-links-container">
            <a href="/" className="social"><FontAwesomeIcon icon={faInstagram} size="2xl" /></a>
            <a href="/" className="social"><FontAwesomeIcon icon={faEnvelope} size="2xl" /></a>
            <a href="/" className="social"><FontAwesomeIcon icon={faBinoculars} size="2xl" /></a>
        </div>
        <p className="copyright">Copyright © 2024 FTC 22557 Rambots. All rights reserved.</p>
    </div>
  )
}

export default Footer
