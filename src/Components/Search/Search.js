import React from "react";
import {
  NextLeft,
  NextRight,
  SearchIcon,
  SettingIcon,
} from "../../assets/images/Iocns";
import IconType from "../IconType/IconType";
import { SearchData } from "./SearchIcon";

const Search = () => {
  return (
    <div className="search">
      <div className="search-content flex ml-3 ">
        <p className="setting mr-5 mt-4">
          <SettingIcon />
        </p>
        <input type="text" placeholder="Поиск" />
        <span className="mt-4">
          <SearchIcon />
        </span>
      </div>
      <div className="search-content-item">
        {SearchData.map((item, i) => (
          <div className="search-content-item-content text-xs font-medium mb-8">
            <div className="flex">
              <span className="mr-7 font-bold">{item.number}</span>
              <div className="flex mr-7">
                <IconType icon={item.iconDown} />
                <span className="date">{item.date}</span>
              </div>{" "}
              <div className="flex">
                <IconType icon={item.iconBolga} />
                <span className="date">{item.endDate}</span>
              </div>
            </div>
            <p className="mt-3">{item.text}</p>
            <button className="mt-2">{item.buttonTxt}</button>
            <hr className="line" />
          </div>
        ))}
      </div>
      <div className="bottom-content flex absolute bottom-0 py-5	">
        <div className="">
          <hr className="line2" />
          <p>(7 тадан 7) </p>
        </div>
        <div className="flex">
          <NextLeft />
          1
          <NextRight />
        </div>
      </div>
    </div>
  );
};

export default Search;
