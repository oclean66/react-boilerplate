import React from 'react';

const BurgerMenu = () => {
  return <div className="burgerModuel">
    <nav role="navigation">
        <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
          <ul id="menu">
          <a href="">
              <li>My Favorites</li>
            </a>
          <a href="">
              <li>Explore Entrepreneurs</li>
          </a>
          <a href="">
              <li>Entrepreneur Store</li>
          </a>
          <a href="">
              <li>My Profile</li>
          </a>
            <a href="">
              <li>My Messages</li>
          </a>
          <a href="">
              <li>My Subscriptions</li>
          </a>
            <a href="">
              <li>My Billing Methods</li>
          </a>
            <a href="">
            <li>My settings | Our Rules</li>
          </a>
          <a href="">
            <li>Support | Tutorials</li>
          </a>
            <a href="">
            <li>Log Out</li>
            </a>
        </ul>
      </div>
    </nav>
  </div>
};

export default BurgerMenu;
