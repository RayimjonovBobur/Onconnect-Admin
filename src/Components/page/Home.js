import React from "react";
import MainSide from "../MainSide/MainSide";
import MenuLink from "../Menu/MenuLink";
import Search from "../Search/Search";

const Home = () => {
  return (
    <>
      <div className="">
        <MenuLink />
        <div className="grid grid-cols-3 gap-4 	">
          <Search />
          <MainSide />
        </div>
      </div>
    </>
  );
};

export default Home;
