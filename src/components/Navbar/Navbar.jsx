import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from '../Button/Button';
import './Navbar.css';

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, []);
    window.addEventListener('resize', showButton);

    return (
           <div className="navbar">
               <div className="navbar-container container">
                  <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                      <img className="navbar-logo" src={process.env.PUBLIC_URL + '/images/ccc-logo.png'} alt="Cyber City Comix logo" />
                  </Link>

                  <div className="menu-icon" onClick={handleClick}>
                      { click ? <FaTimes /> : <FaBars /> }
                  </div>

                  <ul className={click ? 'navbar-menu active' : 'navbar-menu'}>
                      <li className="navbar-item">
                          <Link to='/' className='navbar-links' onClick={closeMobileMenu} > Home </Link>
                      </li>
                      <li className="navbar-item">
                          <Link to='#' className='navbar-links' onClick={closeMobileMenu} > Products </Link>
                      </li>
                      <li className="navbar-item">
                          <Link to='#' className='navbar-links' onClick={closeMobileMenu} > Events & Sales</Link>
                      </li>
                      <li className="navbar-item">
                          <Link to='#' className='navbar-links' onClick={closeMobileMenu} > Contact Us</Link>
                      </li>
                      <li className="navbar-btn">
                          { button ? (
                             <Link to='#' className="btn-link" >
                                 <Button buttonStyle='btn-secondary'>Sign In</Button>
                             </Link>
                          ) : (
                              <Link to='#' className="btn-link" onClick={closeMobileMenu}>
                                  <Button buttonStyle='btn-secondary' buttonSize='btn-mobile'>Sign In</Button>
                              </Link>
                          ) }
                      </li>
                   </ul>
                   
               </div>
           </div>

    )
}

export default Navbar
