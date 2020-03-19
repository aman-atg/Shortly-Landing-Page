import React from "react";
import Proptypes from "prop-types";
const Card = props => {
  const { logo, heading, content, cls } = props;

  return (
    <div className={`card ${cls}`}>
      <img className="logo" src={`/images/${logo}`} alt={`${heading}`} />
      <div className="card_Body ">
        <h2 className="heading"> {heading} </h2>
        <p className="content"> {content} </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  logo: Proptypes.string.isRequired,
  heading: Proptypes.string.isRequired,
  content: Proptypes.string.isRequired
};

export default Card;
