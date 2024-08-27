import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';
import { Link } from 'react-router-dom';

const Navbar=({setShowLogin}) =>{

  const {dMode, getTotalCartAmount}=useContext(StoreContext);
  const [menu,setMenu]=useState("home");

  const [showSearch, setShowSearch] = useState(false);

  const toggleSearchBar = () => {
    setShowSearch(prevShowSearch => !prevShowSearch);
  };
  

  return (
    
    <div className='navbar'>
      
      <Link to="/"><img src={assets.dish} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to="/"><li onMouseEnter={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li></Link>
        <li onMouseEnter={()=>setMenu("menu")} className={menu==="menu"?"active":""} href="#menu">Menu</li>
        <li onMouseEnter={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile App</li>
        <li onMouseEnter={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</li>
      </ul>
      <div className="navbar-right">
        <div className="search-bar">
        <img className="navbar-search-icon" onClick={toggleSearchBar} src={assets.search_icon} alt="" /> {/*dummy placeholder function */}

        
        </div>
        <div className="navbar-basket-icon">
          <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        
        <button onClick={()=>setShowLogin(true)}>Sign In</button>
        <label>
            <input onClick={()=>dMode()} type="checkbox" />
            <span class="fill"></span>
        </label>
      </div>
    </div>
  )
}

export default Navbar
