import React from "react";
import Clipboard from "clipboard";
class Link extends React.Component {
  state = {
    copyBtnValue: "Copy"
  };
  copyBtn = React.createRef();
  componentDidMount() {
    this.copyClipboard = new Clipboard(this.copyBtn.current);
    this.copyClipboard
      .on("error", () => {
        alert("Something is wrong with your browser.");
      })
      .on("success", () => {
        this.setState({ copyBtnValue: "Copied!" });
        this.copyBtn.current.id = "copied";
        setTimeout(() => {
          this.setState({ copyBtnValue: "Copy" });
          this.copyBtn.current.id = "";
        }, 3500);
      });
  }
  componentWillUnmount() {
    this.copyClipboard.destroy();
  }
  //

  render() {
    const { state, props } = this;
    const { link } = props;
    const { url, hashId } = link;
    const shortUrl = "https://rel.ink.com/" + hashId;
    return (
      <div className="link-container">
        <div className="url">{url}</div>
        <div className="link-container_ShortUrl">
          <p className="shortUrl">{shortUrl}</p>
          <p
            tabIndex={1}
            className="primary-btn"
            ref={this.copyBtn}
            data-clipboard-text={shortUrl}
          >
            {state.copyBtnValue}
          </p>
        </div>
      </div>
    );
  }
}
export default Link;
