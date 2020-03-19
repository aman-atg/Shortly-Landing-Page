import React from "react";

const ShortenLnk = () => {
  return (
    <div className="wrapper">
      <div className="shorten-lnk box">
        <div className="shorten-lnk_Input-group">
          <input
            type="text"
            name="link"
            id="link"
            placeholder="Shorten a link here..."
          />
          <span className="primary-btn btn--lg btn--move">Shorten It!</span>
        </div>
      </div>
    </div>
  );
};

export default ShortenLnk;
