import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

function Navbar() {

  const {dMode,dotShow}=useContext(StoreContext);
  const [menu,setMenu]=useState("home");

  const [showSearch, setShowSearch] = useState(false);

  const toggleSearchBar = () => {
    setShowSearch(prevShowSearch => !prevShowSearch);
  };
  

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
        <div className="search-bar">
        <img className="navbar-search-icon" onClick={toggleSearchBar} src={assets.search_icon} alt="" /> {/*dummy placeholder function */}

        
        </div>
        <div className="navbar-basket-icon">
          <img src={assets.basket_icon} alt="" />
          <div className={dotShow==="dot"?"dot":""}></div>
        </div>
        <label>
            <input onClick={()=>dMode()} type="checkbox" />
            <span class="fill"></span>
        </label>
        <button>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
