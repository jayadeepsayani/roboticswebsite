import React from 'react'

import './Meettheteam.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

const Member = () => {
  return (
    <div className="member">
        <FontAwesomeIcon icon={faLightbulb} size="4x" />
        <p className="quote">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        <div className="person-info">
            <p className='name'>Anthony Pan</p>
            <p className='role'>Lead Programmer</p>
        </div>
    </div>
  )
}

export default Member
