import React from 'react'

import Logo from './Logo.js';
import Navlinks from './Navlinks.js';
import CTA from './CTA.js';

import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-stuff-container">
            <Logo />
            <Navlinks />
            <CTA />
        </div>
    </div>
  )
}

export default Navbar
