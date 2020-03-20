import React from "react";
import NavIndex from "./components/Navbar/";
import HeaderIndex from "./components/Header";
import LinksIndex from "./components/Links";
import BodyIndex from "./components/Body";
import FooterIndex from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <NavIndex />
      <HeaderIndex />
      <LinksIndex />
      <BodyIndex />
      <FooterIndex />
    </div>
  );
};

export default App;
