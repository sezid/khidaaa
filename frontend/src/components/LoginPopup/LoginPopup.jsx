import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {
  
  const [currentState,setCurrentState]=useState("Login")

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
          {currentState==="Login"?<></>:<input type="text" placeholder='Your Name' required/>}
          
          <input type="email" placeholder='Your email' required/>
          <input type="password" placeholder='Password' required/>
          <button >{currentState==="Sign Up"?"Create account":'Login'}</button>
        </div>
        {currentState==="Login"?<></>:
        <div className="login-popup-condition">
          <input type="checkbox" required/>
          <p>By continuing, I agree to the Terms of Use & Privacy Policy</p>
        </div>}
        <div className="other">
        {currentState==="Login"?
        <p>Create a New account? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>
        :<p>Already have an acount? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>
        }
        </div>
      </form>
    </div>
  )
}

export default LoginPopup
