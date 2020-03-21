import React from "react";

const Link = props => {
  // need to add clipboardjs for copy
  // need to maintain copy or not copy state or i can just implement copy => copied then nthing...
  const { link } = props;
  const { url, hashId } = link;
  const shortUrl = "https://rel.ink.com/" + hashId;
  return (
    <div className="link-container">
      <div className="url">{url}</div>
      <div className="link-container_ShortUrl">
        <p className="shortUrl">{shortUrl}</p>
        <p tabIndex={1} className="primary-btn">
          Copied!
        </p>
      </div>
    </div>
  );
};

export default Link;
