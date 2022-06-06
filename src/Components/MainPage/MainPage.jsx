import React from "react";
import MainSide from "../MainSide/MainSide";
import MenuLink from "../Menu/MenuLink";
import MenuLeft from "../MenuLeft/MenuLeft";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";

const MainPage = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="grid grid-rows-1 grid-flow-col">
        <MenuLeft />
        <MenuLink />
        <Search />
        <MainSide/>
      </div>
    </div>
  );
};

export default MainPage;
