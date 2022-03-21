import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <header className="header-nav nav-search">
        <NavLink to="/" className="header-logo-link">
          <img
            className="header-logo-img"
            src="/assets/Logos/Home_Camp_Cretaceous_Logo.svg"
            alt="jurassic-park-logo"
          />
        </NavLink>

        <div className="std-search">
          <input
            type="text"
            placeholder="Search..."
            className="input standard nav-searchbar"
          />
          <button className="btn btn-brand btn-accent search-btn nav-searchbar-btn">
            <span className="material-icons nav-search-icon"> search </span>
          </button>
        </div>

        <div className="header-nav-links">
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/wishlist"
                  className={({ isActive }) =>
                    isActive ? "header-link-active" : "header-link"
                  }
                >
                  Wishlist
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                    isActive ? "header-link-active" : "header-link"
                  }
                >
                  Cart
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/signin"
                  className={({ isActive }) =>
                    isActive ? "header-link-active" : "header-link"
                  }
                >
                  Account
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export { Navbar };
