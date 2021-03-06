import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { AUTH_TOKEN } from "../../constants/authConstants";
import { useAuth, useCart, useWishlist } from "../../contexts";
import "./Navbar.css";
import { useOnClickOutside } from "../../hooks";

function Navbar() {
  const [dropDownMenu, setDropDownMenu] = useState(false);
  const { auth, setAuth } = useAuth();
  const { wishlist } = useWishlist();
  const { cartSummary } = useCart();
  const { cartTotalProducts } = cartSummary;

  const signOutHandler = (setAuth) => {
    localStorage.removeItem(AUTH_TOKEN);
    setAuth((auth) => ({
      ...auth,
      status: false,
      token: null,
    }));
  };

  const ref = useRef();
  useOnClickOutside(ref, () => setDropDownMenu(false));

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
                {wishlist.length !== 0 && (
                  <span className="badge wishlist-badge-position">
                    {wishlist.length}
                  </span>
                )}
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
                {cartTotalProducts !== 0 && (
                  <span className="badge cart-badge-position">
                    {cartTotalProducts}
                  </span>
                )}
              </li>
              <li>
                <span
                  className="header-account-link"
                  onClick={() => setDropDownMenu(!dropDownMenu)}
                >
                  Account
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {dropDownMenu &&
        (!auth.status ? (
          <div ref={ref} className="dropDown">
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                isActive ? "header-link-active" : "header-link"
              }
              onClick={() => setDropDownMenu(false)}
            >
              Sign-In
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive ? "header-link-active" : "header-link"
              }
              onClick={() => setDropDownMenu(false)}
            >
              Sign-Up
            </NavLink>
          </div>
        ) : (
          <div ref={ref} className="dropDown">
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                isActive ? "header-link-active" : "header-link"
              }
              onClick={() => {
                signOutHandler(setAuth);
                setDropDownMenu(false);
              }}
            >
              Logout
            </NavLink>
          </div>
        ))}
    </>
  );
}

export { Navbar };
