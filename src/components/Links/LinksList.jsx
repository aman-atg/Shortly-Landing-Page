import React from "react";
import uuid from "uuid/v4";
import Link from "./Link";
const LinksList = props => {
  const { links } = props;
  return (
    <div className="linksList">
      {links.map(link => (
        <Link key={uuid()} link={link} />
      ))}
    </div>
  );
};

export default LinksList;
