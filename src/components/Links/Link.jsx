import React from "react";

const Link = props => {
  const { link } = props;
  const { url, hashId } = link;
  const shortUrl = "https://rel.ink.com/" + hashId;
  return (
    <div className="link-container">
      <p>{url}</p> <p>{shortUrl}</p>
    </div>
  );
};

export default Link;
