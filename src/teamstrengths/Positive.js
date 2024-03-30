import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears, faClock, faFire } from '@fortawesome/free-solid-svg-icons';

import "./Teampositives.css";

const Positive = ({ message, titlepos, paragraph }) => {
    
    console.log(titlepos);
    var theIcon = "<FontAwesomeIcon icon={faGears} />";
    switch (message) {
        case 'gears':
            theIcon = <FontAwesomeIcon icon={faGears} size="4x"/>;
            break;
        case 'clock':
            theIcon = <FontAwesomeIcon icon={faClock} size="4x" />
            break;
        case 'fire':
            theIcon = <FontAwesomeIcon icon={faFire} size="4x" />;
            break;
        default:
            // If no matching iconName is found, you can render a default icon or handle it as needed
            theIcon = <FontAwesomeIcon icon={faGears} />;
    }
  return (
    <div className="positive">
        {theIcon}
        <div className="positive-content">
            <h2 className="positive-title">{ titlepos }</h2>
            <h3 className="positive-text">{ paragraph }</h3>
        </div>
    </div>
  )
}

export default Positive
