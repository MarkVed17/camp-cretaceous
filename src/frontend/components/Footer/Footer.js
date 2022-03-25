import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer-container">
        {/* Logo + Copyright */}
        <div className="footer-brand">
          <Link to="/">
            <img
              className="footer-logo-img"
              src="/assets/Logos/Home_Camp_Cretaceous_Logo.svg"
              alt="jurassic-park-logo"
            />
          </Link>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h1 className="footer-heading">Company</h1>
          <Link to="/" className="footer-link">
            About Us
          </Link>
          <Link to="/" className="footer-link">
            Terms & Conditions
          </Link>
          <Link to="/" className="footer-link">
            Privacy Policy
          </Link>
        </div>

        {/* Social Media Presence */}
        <div className="footer-social-media">
          <h1 className="footer-heading">Connect with us</h1>
          <span className="footer-icons">
            <i className="fa-brands fa-instagram footer-icon"></i>
            <i className="fa-brands fa-twitter footer-icon"></i>
            <i className="fa-brands fa-facebook-f footer-icon"></i>
          </span>
        </div>

        {/* Newsletter */}
        <div className="footer-subscribe">
          <h1 className="footer-heading">Subscribe</h1>
          <div className="std-search">
            <input
              type="text"
              placeholder="Enter Email Id"
              className="input standard subscribe"
            />
            <button className="btn btn-brand btn-accent subscribe-btn">
              Subscribe
            </button>
          </div>
        </div>

        {/* Copyright  */}
        <div className="footer-copyright">
          <span>Copyright © 2022 {" "}</span>
          <span>All rights reserved</span>
        </div>
      </footer>
    </>
  );
}

export { Footer };
