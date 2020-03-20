import React from "react";
import Proptypes from "prop-types";
//make it a class
class ShortenLnk extends React.Component {
  state = {
    url: "",
    errMsg: "Please add a link"
  };

  //if err is true
  /*
  border => red
  text => red
  errMsg => visible
*/

  /// create simple-schema and
  // manage errors

  render() {
    const { props, state } = this;
    return (
      <div className="wrapper">
        <div className="shorten-lnk box">
          <form
            className="shorten-lnk_Input-group"
            onSubmit={e => props.onLinkSubmit(state.url, e)}
          >
            <input
              type="text"
              name="link"
              id="link"
              placeholder="Shorten a link here..."
              onChange={e => this.setState({ url: e.target.value })}
              value={state.url}
            />
            <span
              onClick={() => props.onLinkSubmit(state.url)}
              className="primary-btn btn--lg btn--move"
            >
              Shorten It!
            </span>
          </form>
          {props.err ? (
            <i id="error">{state.errMsg}</i>
          ) : (
            <i id="error" className="hide">
              {state.errMsg}
            </i>
          )}
        </div>
      </div>
    );
  }
}
ShortenLnk.propTypes = {
  onLinkSubmit: Proptypes.func.isRequired
};
export default ShortenLnk;
