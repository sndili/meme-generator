import React from 'react';
import logo from "./image/troll-face.png";

function Header() {
  return (
    <header>
        <div className='logo-title'>
            <img src={logo} alt="meme" />
            <p>LOL MEME GENERATOR</p>
           
        </div>
    </header>
 
  )
}

export default Header