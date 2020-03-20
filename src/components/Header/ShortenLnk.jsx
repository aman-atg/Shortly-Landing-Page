import React from "react";
import Proptypes from "prop-types";

class ShortenLnk extends React.Component {
  state = {
    url: "",
    errMsg: "Please add a link"
  };
  InputRef = React.createRef();
  changeInputId = () => {
    if (this.props.err) {
      this.InputRef.current.id = "link-alert";
    } else {
      this.InputRef.current.id = "";
    }
  };

  render() {
    const { props, state } = this;
    return (
      <div className="wrapper">
        <div className="shorten-lnk box">
          <form
            className="shorten-lnk_Input-group"
            onSubmit={e => {
              e.preventDefault();
              setTimeout(() => {
                props.onLinkSubmit(state.url);
                this.changeInputId();
              }, 500);
            }}
          >
            <input
              ref={this.InputRef}
              type="text"
              name="link"
              id="link"
              placeholder="Shorten a link here..."
              onChange={e => this.setState({ url: e.target.value })}
              value={state.url}
            />
            <span
              onClick={() => {
                //wow..working with setTimeout only..and even after m not passing any time ...
                setTimeout(() => {
                  props.onLinkSubmit(state.url);
                  this.changeInputId();
                }, 500);
              }}
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
  onLinkSubmit: Proptypes.func.isRequired,
  err: Proptypes.bool.isRequired
};
export default ShortenLnk;
