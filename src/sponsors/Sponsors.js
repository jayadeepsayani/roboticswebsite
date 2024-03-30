import React from 'react'

import './Sponsors.css';

const Sponsors = () => {
  return (
    <div className="sponsors-container">
        <h3 className="sponsor-title">Sponsors</h3>
        <div className="sponsors">
            <a href="https://www.finning.com/en_CA.html"><img src="https://www.finning.com/etc/designs/dxm/clientlibs/img/dxm/logo_finning-cat.png" alt="" /></a>
            <a href="https://local-pizza.ca"><img src="https://6e4a37452a1c8f927688.cdn6.editmysite.com/uploads/b/6e4a37452a1c8f927688683c2d0e439001777f5d1d68999a418465e3cfeda8cc/LOCAL%20Pizza_1650994056.png?width=2400&optimize=medium" alt="" /></a>
            <a href="https://www.bosch.ca"><img  className='bosch' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Bosch-logo.svg/2560px-Bosch-logo.svg.png" alt="" /></a>
            <a href="https://www.onefurall.com"><img src="https://www.onefurall.com/wp/wp-content/themes/fursuite/img/header_logo.png" alt="" /></a>
            <a href="http://www.victoriawaterjet.ca"><img src="https://i.ibb.co/tCykt3V/171183288192777251.png" alt="" /></a>
        </div>
    </div>
  )
}

export default Sponsors
