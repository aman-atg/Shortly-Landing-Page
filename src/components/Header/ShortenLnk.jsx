import React from "react";

const ShortenLnk = () => {
  return (
    <div className="shorten-lnk wrapper">
      <div className="shorten-lnk_Input-group">
        <input
          type="text"
          name="link"
          id="link"
          placeholder="Shorten a link here..."
        />
        <span className="primary-btn btn--lg">Shorten It!</span>
      </div>
    </div>
  );
};

export default ShortenLnk;
