import React from "react";
import NavIndex from "./components/Navbar/";
import HeaderIndex from "./components/Header";
import BodyIndex from "./components/Body";

const App = () => {
  return (
    <div className="app">
      <NavIndex />
      <HeaderIndex />
      <BodyIndex />
    </div>
  );
};

export default App;
