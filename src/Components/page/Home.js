import React from "react";
import MainSide from "../MainSide/MainSide";
import MenuLink from "../Menu/MenuLink";
import Search from "../Search/Search";

const Home = () => {
  return (
    <>
      <div className="grid grid-rows-3  grid-flow-col">
        <MenuLink />
        <Search />
        {/* <MainSide /> */}
      </div>
    </>
  );
};

export default Home;
