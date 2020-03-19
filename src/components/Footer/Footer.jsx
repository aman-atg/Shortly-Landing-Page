import React from "react";
import UnorderedLists from "./UnorderedLists";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="brand">
        <img src="/images/logo.svg" alt="" />
      </div>
      <UnorderedLists />
      <SocialIcons />
    </div>
  );
};

export default Footer;
