import React, { Component } from "react";
import axios from "axios";
import ShortenLnk from "../Header/ShortenLnk";
import UrlSchema from "../../apis/rel-ink-api";

class Links extends Component {
  state = { links: [], err: false };

  /// define prop to call that api from api import
  async getHash(url) {
    // see what would happen without async
    const headers = {
      "Content-Type": "application/json"
    };

    axios
      .post("https://rel.ink/api/links/", { url }, headers)
      .then(res => console.log(res))
      .catch(err => console.log(err));

    //return hashId from res
  }

  onLinkSubmit = (url, e) => {
    // ======== >> CHECKING FOR ERR << ==========
    try {
      UrlSchema.validate({ url });
      this.setState({ err: false });
    } catch {
      this.setState({ err: true });
    }

    if (e !== undefined) e.preventDefault();
    const hashId = this.getHash(url);
    this.setState({ links: [{ url, hashId }, ...this.state.links] });
  };

  render() {
    return <ShortenLnk onLinkSubmit={this.onLinkSubmit} err={this.state.err} />;
  }
}

export default Links;
