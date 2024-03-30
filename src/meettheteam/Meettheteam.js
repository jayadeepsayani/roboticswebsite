import React from 'react'

import Member from './Member.js';
import './Meettheteam.css';

const Meettheteam = () => {
  return (
    <div className="meet-the-team-container">
        <h3 className='meet-title'>Meet the Team</h3>
        <div className="members-container">
            <Member />
            <Member />
            <Member />
            <Member />
        </div>
        <div className="members-container">
            <Member />
            <Member />
            <Member />
            <Member />
        </div>
    </div>
  )
}

export default Meettheteam
