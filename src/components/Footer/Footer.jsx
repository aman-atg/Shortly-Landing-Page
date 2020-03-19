import React from "react";
import UnorderedLists from "./UnorderedLists";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <div className="footer wrapper">
      <div className="brand">
        <img src="/images/logo-br.svg" alt="BRAND" />
      </div>
      <UnorderedLists />
      <SocialIcons />
    </div>
  );
};

export default Footer;
