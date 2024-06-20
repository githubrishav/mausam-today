import React from 'react'
import logo from './../../public/logo.png'

const Navbar = () => {
  return (
    <div>
        <div className="nav-cont">
         <div className="cc">
                <p >Mausam Today</p>
                <img className='img' src={logo} alt="img" />
         </div>
        </div>
    </div>
  )
}

export default Navbar