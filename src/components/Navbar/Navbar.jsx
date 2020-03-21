import React from "react";

const Navbar = () => {
  return (
    <nav className="wrapper navbar">
      <span className="nav_Brand">
        <img src="/images/logo.svg" alt="Shortly Brand Name" />
      </span>
      <div className="nav_Body">
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
      </div>
      <div className="nav_Auth">
        <ul>
          <li>Login</li>
          <li className="SignUp primary-btn" id="SignUp">
            Sign Up
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
