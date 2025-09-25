import React, { useState } from 'react';
import { Search, ShoppingCart, User, MapPin, ChevronDown } from 'lucide-react';
import './Navbar.css';
import { Link, Routes, Route } from 'react-router-dom';

import { useCart } from './CartContext'; // Import useCart hook
import JagatStore from "./JagatStore";
import ShowProducts from './ShowProducts';
import logo3 from '../assets/logo3.png';

const Navbar = () => {
  const [searchValue, setSearchValue] = useState('');
  const { getTotalItems } = useCart(); // Get cart functions
  const totalItems = getTotalItems(); // Get total items count
  const [search, setSearch]=useState(false);

  return (
    <div className="blinkit-header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo-section">
          <div className="logo">
            <Link to="/">
              <img src={logo3} alt="Jagat Store Logo" height="50vh" className="logo-img" />
            </Link>
          </div>
        </div>

        {/* Delivery Info Section */}
        <div className="delivery-section">
          <div className="delivery-info">
            <h3 className="delivery-title">Delivery in 40 minutes</h3>
            <div className="location-info">
              <MapPin className="location-icon" size={16} />
              <span className="location-text">F-388 Pratap Vihar, Sec-11, GZB</span>
              <ChevronDown className="dropdown-icon" size={16} />
            </div>
          </div>
        </div>

       
        <div className="search-section">
          <div className="search-container">
            <Search className="search-icon" size={20} />
            <input 
              type="text"
              placeholder='Search "milk"'
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
                setSearch(true);
                }}
                className="search-input"
              />
             
              </div>
            </div>
            <div className="auth-cart-section">
              <Link to="/Login">
              <button className="login-btn">Login</button>
              </Link>
              <Link to="/Cart">
              <div className="cart-container">
                <ShoppingCart className="cart-icon" size={24} />
                <span className="cart-count">{totalItems}</span>
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu">
          <button className="mobile-menu-btn">
            <div className="hamburger"></div>
            <div className="hamburger"></div>
            <div className="hamburger"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;