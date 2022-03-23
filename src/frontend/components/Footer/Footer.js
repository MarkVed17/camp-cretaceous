import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer class="footer-container">
        {/* Logo + Copyright */}
        <div class="footer-brand">
          <Link to="/">
            <img
              class="footer-logo-img"
              src="/assets/Logos/Home_Camp_Cretaceous_Logo.svg"
              alt="jurassic-park-logo"
            />
          </Link>
        </div>

        {/* Links */}
        <div class="footer-links">
          <h1 class="footer-heading">Company</h1>
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
        <div class="footer-social-media">
          <h1 class="footer-heading">Connect with us</h1>
          <span class="footer-icons">
            <i class="fa-brands fa-instagram footer-icon"></i>
            <i class="fa-brands fa-twitter footer-icon"></i>
            <i class="fa-brands fa-facebook-f footer-icon"></i>
          </span>
        </div>

        {/* Newsletter */}
        <div class="footer-subscribe">
          <h1 class="footer-heading">Subscribe</h1>
          <div class="std-search">
            <input
              type="text"
              placeholder="Enter Email Id"
              class="input standard subscribe"
            />
            <button class="btn btn-brand btn-accent subscribe-btn">
              Subscribe
            </button>
          </div>
        </div>

        {/* Copyright  */}
        <div class="footer-copyright">
          <span>Copyright © 2022 {" "}</span>
          <span>All rights reserved</span>
        </div>
      </footer>
    </>
  );
}

export { Footer };
