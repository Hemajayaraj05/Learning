// Home.js
import React from "react";
import Header from "./Header";
import MainBanner from "./MainBanner";
import './Home.css'; // Renamed CSS file to match the Home component

function Home() {
  return (
    <div className="Home">
      <div className="background-container">
        <Header />
        <MainBanner />
      </div>
    </div>
  );
}

export default Home;
