import React from "react";
import "./MainSide.scss";

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
            <button className="add-data text-xs ml-7 mt-4   ">Тулик куриш</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSide;
