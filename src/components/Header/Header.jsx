import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header_Content">
        <h2>More than just shorter links</h2>
        Build your brand's recognition and get detailed insights on how your
        links are performing.
        <button>Get Started</button>
      </div>
      <div className="header_SVG">
        <img
          src="/images/illustration-working.svg"
          alt="A male working in front of computer"
        />
      </div>
    </div>
  );
};

export default Header;
