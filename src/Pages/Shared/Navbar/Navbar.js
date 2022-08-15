import React from 'react';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const house = <FontAwesomeIcon icon={faHouse} className="house" />
    const userIcon = <FontAwesomeIcon icon={faUser} className="user-icon" />
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
    const heartIcon = <FontAwesomeIcon icon={faHeart} className="heart-icon" />
    return (
        <div className="navbar-section">
           <div className="left-nav-side">
           <Link to="/"><h1 className="title" >Deliver.fast</h1></Link>
           </div>
           <div className="middle-nav-side">
           <input type="text" className="search" placeholder="Find Your Choice..." />
            </div>
            <div className="right-nav-side">
            <div className="nav-icon-section">
            <span >{heartIcon}</span>
            <span>{cartIcon}</span>
            <Link to="/login">{userIcon}</Link>
          </div>
            </div>

        </div>
    );
};

export default Navbar;