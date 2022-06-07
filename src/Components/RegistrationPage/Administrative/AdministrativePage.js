import React from "react";
import { AdministrativeIcon } from "../../../assets/images/Iocns";
import "./style.scss";

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
      <form>
        <div>
          <label>Номер документа</label>
          <input type="text" name="" id="" value={"1232412"} />
        </div>
        <div>
          {/* <label>Номер документа</label> */}
          <input className="date" type="date" />
        </div>
        <div>
          {/* <label>Номер документа</label> */}
          <input className="date" type="date" />
        </div>
        <div>
          {/* <label>Тип отправки</label> */}
          <select name="" id="">
            <option value="Тип отправки">Тип отправки</option>
            <option value="Тип отправки">Тип отправки</option>
          </select>
        </div>
        <div>
          {/* <label>Манфаатдор идора</label> */}
          <select name="" id="">
            <option value="Манфаатдор идора">Манфаатдор идора</option>
            <option value="Тип отправки">Тип отправки</option>
          </select>
        </div>
        <div>
          <input type="checkbox" name="" id="" />
          <span>Колдик</span>
        </div>
      </form>
    </div>
  );
}

export default AdministrativePage;
