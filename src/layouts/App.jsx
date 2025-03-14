import React from "react";
import "../App.css";
import Navbar from "../component/Navbar";
import Home from "../pages/Home/index";
import Slide from "../component/Slide/Slide";

const App = () => {
  return (
    <div className="max-w-full">
      <div className="container mx-auto  ">
        <Navbar />
        <Home />
      </div>
      <div></div>
    </div>
  );
};

export default App;
