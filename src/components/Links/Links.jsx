import React, { Component } from "react";
import axios from "axios";
import ShortenLnk from "../Header/ShortenLnk";
class Links extends Component {
  state = { links: [] }; //dlt link
  //NEEEEEEEED TO MANAGE ERROR FIRST..
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
    if (e !== undefined) e.preventDefault();
    const hashId = this.getHash(url);
    this.setState({ links: [{ url, hashId }, ...this.state.links] });
  };

  render() {
    return <ShortenLnk onLinkSubmit={this.onLinkSubmit} />;
  }
}

export default Links;
