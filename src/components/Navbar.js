import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";


function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [button , setButton] = useState(true);

  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false);
    }else{
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            
            TRVL <i class="fa-brands fa-typo3"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            
            <i className={click ? "fa fa-times" : "fa fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Product
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign-up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
