import React from "react";
import Cards from "./Cards";
const Body = () => {
  return (
    <div className="body wrapper">
      <div className="body_Box">
        <div className="body_Box_Fixed">
          <h1>Advanced Statistics</h1>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        <Cards />
      </div>
    </div>
  );
};

export default Body;
