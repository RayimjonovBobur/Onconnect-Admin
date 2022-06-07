import React from "react";
import "./MainSide.scss";
import { MainSideData } from "./MainSideData";

const MainSide = () => {
  return (
    <div className="mainside">
      <div className="mainside-content">
        <div className="mainside-add">
          <h2 className="text-lg font-semibold mainside-title  mb-3">
            Маъмурий низо - Биринчи инстанция
          </h2>
          <div className="flex category">
            <div className="">
              <p className="text-xs font-normal">Хужжат номери</p>
              <h6 className="font-semibold text-sm mt-3">1234567890</h6>
            </div>{" "}
            <div className="">
              <p className="text-xs font-normal">Хужжат санаси</p>
              <h6 className="font-semibold text-sm mt-3">12.02.2021</h6>
            </div>{" "}
            <div className="">
              <p className="text-xs font-normal">Кирим санаси</p>
              <h6 className="font-semibold text-sm mt-3">12.02.2021</h6>
            </div>{" "}
            <div className="">
              <p className="text-xs font-normal">Жунатиш тури</p>
              <h6 className="font-semibold text-sm mt-3">Почта</h6>
            </div>{" "}
            <div className="">
              <p className="text-xs font-normal">Манфаатдор идора</p>
              <h6 className="font-semibold text-sm mt-3">Идоранинг номи</h6>
            </div>
            <button className="add-data text-xs ml-7 mt-4   ">
              Тулик куриш
            </button>
          </div>
        </div>
        <div className="petition-content">
          <div className="petition-data">
            <h2 className="text-lg font-medium mainside-title  mt-2 mb-3">
              Ариза (Шикоят) мазмуни
            </h2>
            <hr className="petition-line" />
            <div className="petition-header font-medium text-sm mt-3 ">
              <div className="p-3 flex">
                <span className="mr-2">№</span>
                <p className="">Иш туркуми</p>
                <p className="">Кушимча иш туркуми</p>
                <p className="">Иккиламчи иш туркуми</p>
              </div>
            </div>
            <div className="petition-data-content">
              {MainSideData.map((item, i) => (
                <div className="petition-data-content-item">
                  <div className="flex">
                    <span>1</span>
                    <div className="flex">
                      <h4>{item.firstTitle}</h4>
                      <h4>{item.secondTitle}</h4>
                      <h4>{item.thirdTitle}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSide;
