import React, { useState } from 'react';
import { Search, ShoppingCart, MapPin, ChevronDown, Menu } from 'lucide-react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import logo3 from '../assets/logo3.png';

const Navbar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchValue.trim().toLowerCase();
    if (query) {
      const petCareKeywords = ['pet', 'dog', 'cat', 'petcare', 'pedigree', 'whiskas', 'food', 'adult', 'puppy', 'pet food'];

      const babyCareKeywords = ['baby', 'diaper', 'whisper', 'babycare', 'baby care', 'stayfree', 'pampers', 'mamy', 'mamy poko pants', 'Whisper', 'baby diaper'];

      const dairyBreadEggsKeywords = ['milk', 'bread','dahi','curd', 'paneer','cheese','butter','bun','pav','burger','Mozrilla','panner', 'eggs', 'dairy', 'butter', 'cheese','amul','cream', 'amul milk', 'farm eggs', 'whole wheat bread'];

      const attaRiceDalKeywords = ['atta', 'rice', 'dal', 'flour', 'chawal', 'aashirvaad', 'aashirwaad', 'fortune', 'arhar', 'chana', 'moong', 'urad', 'masoor', 'rajma', 'chole', 'matar', 'pulav','kala chana', 'basmati', 'sabut', 'tukda', 'pona', 'mini', 'golden sella', 'india gate', 'daawat', 'sugar', 'chini', 'brown sugar'];
      

      let route = '/PetCare'; // Default to PetCare
      if (babyCareKeywords.some(keyword => query.includes(keyword))) {
        route = '/BabyCare';
      } else if (dairyBreadEggsKeywords.some(keyword => query.includes(keyword))) {
        route = '/DairyBreadEggs';
      } else if (attaRiceDalKeywords.some(keyword => query.includes(keyword))) {
        route = '/AttaRiceDal';
      }

      const navigationUrl = `${route}?search=${encodeURIComponent(query)}`;
      console.log('Navigating to:', navigationUrl);
      navigate(navigationUrl);
      setSearchValue('');
      setIsMobileMenuOpen(false); // Close mobile menu after search
    }
  };

  return (
    <div className="blinkit-header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo-section">
          <Link to="/">
            <img src={logo3} alt="Jagat Store Logo" className="logo-img" />
          </Link>
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

        {/* Search Section */}
        <div className="search-section">
          <form onSubmit={handleSearch} className="search-container">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder='Search "milk", "pet care", or "diaper"'
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="search-input"
            />
          </form>
        </div>

        {/* Auth and Cart Section */}
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
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            <Menu className="hamburger" size={24} />
          </button>
          <Link to="/Cart" className="mobile-cart-container">
            <ShoppingCart className="cart-icon" size={24} />
            <span className="cart-count">{totalItems}</span>
          </Link>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`mobile-menu-dropdown ${isMobileMenuOpen ? 'open' : ''}`}>
          <form onSubmit={handleSearch} className="mobile-search-container">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder='Search "milk", "pet care", or "diaper"'
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="search-input"
            />
          </form>
          <Link to="/Login" onClick={toggleMobileMenu}>
            <button className="mobile-login-btn">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;