import React from "react";
import { AdministrativeIcon } from "../../../assets/images/Iocns";
import "./style.scss";
// import "./style.css";

function AdministrativePage() {
  return (
    <div className="administrativ_header">
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <AdministrativeIcon />
          <span>Маъмурий низо - Биринчи инстанция</span>
        </div>
        <div className="hr" style={{ marginTop: "10px" }}></div>
      </div>
      <form className="form-content">
        <div>
          <label>Номер документа</label>
          <input type="text" name="" id="" placeholder={"1232412"} />
        </div>
        <div>
          <label className="date-lable first">Дата документа</label>
          <input className="date" type="date" placeholder="Дата документа" />
        </div>
        <div>
          <label className="date-lable">Кирим санаси</label>
          <input className="date" type="date" />
        </div>
        <div>
          <select className="inputs">
            <option value="Тип отправки" className="select-option">
              Тип отправки
            </option>
            <option value="Тип отправки" className="select-option">
              Тип отправки
            </option>
          </select>
        </div>
        <div>
          {/* <label>Манфаатдор идора</label> */}
          <select className="inputs">
            <option value="Манфаатдор идора" className="select-option">
              Манфаатдор идора
            </option>
            <option value="Тип отправки" className="select-option">
              Тип отправки
            </option>
          </select>
        </div>
        <div className="mt-5">
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          <span className="qoldik ">Колдик</span>
        </div>
      </form>
    </div>
  );
}

export default AdministrativePage;
