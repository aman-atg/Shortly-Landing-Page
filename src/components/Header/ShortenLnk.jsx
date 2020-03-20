import React from "react";
import Proptypes from "prop-types";
//make it a class
class ShortenLnk extends React.Component {
  state = {
    url: ""
  };

  render() {
    const { props, state } = this;

    return (
      <div className="wrapper">
        <div className="shorten-lnk box">
          <form
            className="shorten-lnk_Input-group"
            onSubmit={() => props.onLinkSubmit()}
          >
            <input
              type="text"
              name="link"
              id="link"
              placeholder="Shorten a link here..."
            />
            <span
              onClick={x => props.onLinkSubmit(x)}
              className="primary-btn btn--lg btn--move"
            >
              Shorten It!
            </span>
          </form>
        </div>
      </div>
    );
  }
}
ShortenLnk.propTypes = {
  onLinkSubmit: Proptypes.func.isRequired
};
export default ShortenLnk;
