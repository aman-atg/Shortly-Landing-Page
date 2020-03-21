import React, { Component } from "react";
import axios from "axios";
import ShortenLnk from "../Header/ShortenLnk";
import UrlSchema from "../../apis/rel-ink-api";
import LinksList from "./LinksList";

class Links extends Component {
  state = { links: [], err: false, hashId: "" };
  // ==================== >>  TODO << ============================
  // render LinksList comp.(links state will be passed ) which will render all links with warch Link comp.
  /// define prop to call that api from api import

  getHash(url) {
    const headers = {
      "Content-Type": "application/json"
    };
    axios
      .post("https://rel.ink/api/links/", { url }, headers)
      .then(res => {
        this.setState({ hashId: res.data.hashid });
      })
      .catch(err => console.log(err));
    console.log(this.state.links);
  }

  onLinkSubmit = url => {
    // ======== >> CHECKING FOR ERR << ==========
    try {
      UrlSchema.validate({ url });
      this.setState({ err: false });
    } catch {
      this.setState({ err: true });
    }

    if (this.state.err) return;
    this.getHash(url);
    setTimeout(() => {
      const hashId = this.state.hashId;
      this.setState({ links: [...this.state.links, { url, hashId }] });
      console.log("time ", new Date().getTime());
    }, 750);
  };

  showLinks = () => {
    console.log(this.state.links);
  };
  render() {
    return (
      <div>
        <ShortenLnk onLinkSubmit={this.onLinkSubmit} err={this.state.err} />
        <LinksList links={this.state.links} />
      </div>
    );
  }
}

export default Links;
