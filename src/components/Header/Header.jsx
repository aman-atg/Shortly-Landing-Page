import React from "react";

const Header = () => {
  return (
    <div className="header wrapper">
      <div className="header_SVG">
        <img
          src="/images/illustration-working.svg"
          alt="A male working in front of computer"
        />
      </div>
      <div className="header_Content">
        <div className="header_Content_Wrapper">
          <h2>More than just shorter links</h2>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <div className="header_Get-started">
            <a className="primary-btn btn--lg" href="#link">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
