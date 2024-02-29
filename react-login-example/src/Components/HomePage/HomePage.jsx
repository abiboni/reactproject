import React, { useState } from 'react';
import './HomePage.css';
import LoginForm from '../LoginForm/LoginForm';

function HomePage() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div className="home-page">
      <header className="header">
        <div className="header-left">
          <h2 className="logo">Hamill Rentals</h2>
          {/* <img src="" alt="Logo" className="logo" /> */}
        </div>
        <div className="header-right">
          <a href="#" className="header-link">Home</a>
          <a href="#" className="header-link">Listings</a>
          <a href="#" className="header-link">Contact</a>
          <a href="#" className="header-link" onClick={toggleLoginForm}>Login</a>
        </div>
      </header>

      <main className="main">
        <div className="home-listings">
          {/* Home cards */}
          {/* Example Home Card */}
          <div className="home-card">
            <img src="https://delta.creativecirclecdn.com/riverdalepress/original/20200709-175224-HOTW2-0709_NOISY_WEB.jpg" alt="Home 1" className="home-image" />
            <h2 className="home-title">Beautiful Home Near the Beach</h2>
            <p className="home-info">3 bedrooms | 2 bathrooms | $2000/month</p>
          </div>
          <div className="home-card">
            <img src="https://assets.site-static.com/userFiles/2912/image/1.58.14.jpg" alt="Home 1" className="home-image" />
            <h2 className="home-title">Beautiful Home Near the Beach</h2>
            <p className="home-info">4 bedrooms | 2 bathrooms | $2500/month</p>
          </div>
          <div className="home-card">
            <img src="https://delta.creativecirclecdn.com/riverdalepress/original/20200709-175224-HOTW2-0709_NOISY_WEB.jpg" alt="Home 1" className="home-image" />
            <h2 className="home-title">Beautiful Home Near the Beach</h2>
            <p className="home-info">3 bedrooms | 2 bathrooms | $2000/month</p>
          </div>
          <div className="home-card">
            <img src="https://delta.creativecirclecdn.com/riverdalepress/original/20200709-175224-HOTW2-0709_NOISY_WEB.jpg" alt="Home 1" className="home-image" />
            <h2 className="home-title">Beautiful Home Near the Beach</h2>
            <p className="home-info">3 bedrooms | 2 bathrooms | $2000/month</p>
          </div>
        </div>
      </main>

      {/* Render login form conditionally */}
      {showLoginForm && <LoginForm />}
    </div>
  );
}

export default HomePage;
