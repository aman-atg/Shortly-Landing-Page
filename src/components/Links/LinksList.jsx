import React from "react";
import Link from "./Link";
const LinksList = props => {
  const { links } = props;
  return (
    <div className="linksList">
      {links.map(link => (
        <Link link={link} />
      ))}
    </div>
  );
};

export default LinksList;
