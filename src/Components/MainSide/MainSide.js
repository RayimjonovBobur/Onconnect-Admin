import React, { useState } from "react";
import { MoreIcon } from "../../assets/images/Iocns";
import "./MainSide.scss";
import { MainSideData } from "./MainSideData";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const MainSide = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mainside col-span-2">
      <div className="mainside-content">
        <div className="mainside-add">
          <h2 className="text-lg font-semibold mainside-title  mb-3">
            Маъмурий низо - Биринчи инстанция
          </h2>
          <div className="flex category">
            <div className="mr-11">
              <p className="text-xs font-normal">Хужжат номери</p>
              <h6 className="font-semibold text-sm mt-2">1234567890</h6>
            </div>{" "}
            <div className="mr-11">
              <p className="text-xs font-normal">Хужжат санаси</p>
              <h6 className="font-semibold text-sm mt-2">12.02.2021</h6>
            </div>{" "}
            <div className="mr-11">
              <p className="text-xs font-normal">Кирим санаси</p>
              <h6 className="font-semibold text-sm mt-2">12.02.2021</h6>
            </div>{" "}
            <div className="mr-11">
              <p className="text-xs font-normal">Жунатиш тури</p>
              <h6 className="font-semibold text-sm mt-2">Почта</h6>
            </div>{" "}
            <div className="mr-11">
              <p className="text-xs font-normal">Манфаатдор идора</p>
              <h6 className="font-semibold text-sm mt-2">Идоранинг номи</h6>
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
                <span className="mr-4">№</span>
                <p className="">Иш туркуми</p>
                <p className="">Кушимча иш туркуми</p>
                <p className="">Иккиламчи иш туркуми</p>
              </div>
            </div>
            <div className="petition-data-content">
              {MainSideData.map((item, i) => (
                <div className="petition-data-content-item">
                  <div className="flex mt-4">
                    <span className="mx-4 mt-3">1</span>
                    <div className="flex text-sm item-data">
                      <h4>{item.firstTitle}</h4>
                      <h4 className="ml-8">{item.secondTitle}</h4>
                      <h4 className="ml-24 ">{item.thirdTitle}</h4>
                      <button
                        className="btn"
                        onClick={() => setExpanded(!expanded)}
                      >
                        {expanded ? <MoreIcon /> : <AiOutlinePlus />}

                        {/* <MoreIcon /> */}
                      </button>{" "}
                    </div>
                  </div>
                  <hr
                    className="mt-2"
                    style={{ border: "1px solid #E6EEF2", width: "100%" }}
                  />
                  {expanded && (
                    <div className="item-data-child mt-7">
                      <div className="flex">
                        <div className="ml-5">
                          <p className="text-xs">{item.decisionTitle}</p>
                          <h5 className="text-sm font-semibold mt-1">
                            {item.decisionNum}
                          </h5>
                        </div>
                        <div className="ml-5">
                          <p className="text-xs">{item.decisionDateTitle}</p>
                          <h5 className="text-sm font-semibold mt-1">
                            {item.decisionDate}
                          </h5>
                        </div>
                        <div className="ml-16">
                          <p className="text-xs">{item.introForceTitle}</p>
                          <h5 className="text-sm font-semibold mt-1">
                            {item.introForceDate}
                          </h5>
                        </div>
                        <div className="ml-5">
                          <p className="text-xs">{item.cancellationTitle}</p>
                          <h5 className="text-sm font-semibold mt-1">
                            {item.cancellationBasis}
                          </h5>
                        </div>
                        <div className="ml-5">
                          <p className="text-xs">{item.administrativeTitle}</p>
                          <h5 className="text-sm font-semibold mt-1">
                            {item.administrative}
                          </h5>
                        </div>
                      </div>
                      <div className=" mt-5" style={{ marginLeft: "37em" }}>
                        <p className="text-xs">{item.signatoryTitle}</p>
                        <h5 className="text-sm font-semibold mt-1">
                          {item.signatory}
                        </h5>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex text-sm btn-group absolute right-2 mt-5">
          <button>Иш муддатини узайтириш</button>
          <button className="">Кайта таксимлаш</button>
          <button>Учириш</button>
        </div>
      </div>
    </div>
  );
};

export default MainSide;
