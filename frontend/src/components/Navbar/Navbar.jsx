import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

function Navbar() {

  const [menu,setMenu]=useState("home");

  return (
    <div className='navbar'>
      <img src={assets.dish} alt="" className="logo" />
      <ul className="navbar-menu">
        <li onMouseEnter={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li>
        <li onMouseEnter={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
        <li onMouseEnter={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile App</li>
        <li onMouseEnter={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-basket-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
