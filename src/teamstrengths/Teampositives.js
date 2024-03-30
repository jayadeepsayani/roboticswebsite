import React from 'react'
import Positive from './Positive.js';
import './Teampositives.css';


const Teampositives = () => {
  return (
    <div className="team-positives-container">
        <div className="team-positives">
            <Positive message="gears" titlepos="Innovation like never before" paragraph="As we enter the upcoming season, our robotics team's drive for innovation shines stronger than ever." />
            <Positive message="clock" titlepos="Precision in every move" paragraph="We stand committed to honing our skills and pushing the boundaries of what's possible in the world of Robotics" />
            <Positive message="fire" titlepos="Igniting our passion for robotics" paragraph="Entering our third year in FTC, our robotics team is fueled by a relentless passion for innovation and technology" />
        </div>
    </div>
  )
}

export default Teampositives
