import React from 'react'

import Logo from '../assets/brunel_logo.png'
function Header() {
  return (
    <div className="header">


    <img class="logo" src={Logo} alt="logo" />
    
<div className="header_buttons">
   <button className='button'>
    Get Projects
   </button>
   <button className='button'>
    Onboard Talent
   </button>


</div>
        

    </div>
  )
}

export default Header
