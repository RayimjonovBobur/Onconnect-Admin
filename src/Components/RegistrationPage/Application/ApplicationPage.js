import React from "react";
import { ApplicationIcon } from "../../../assets/images/Iocns";

function ApplicationPage() {
  return (
    <div className="administrativ_header">
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <ApplicationIcon />
          <span>Ариза (шикоят) мазмуни</span>
        </div>
        <div className="hr" style={{ marginTop: "10px" }}></div>
      </div>
      <form>
        <div>
          <label>Тип отправки</label>
          <select name="" id="" style={{ width: "250px" }}>
            <option value="Тип отправки">Тип отправки</option>
            <option value="Тип отправки">Тип сохранять</option>
          </select>
        </div>
        <div>
          <label>Манфаатдор идора</label>
          <select name="" id="" style={{ width: "250px" }}>
            <option value="Манфаатдор идора">Манфаатдор идора</option>
            <option value="Тип отправки">Тип отправки</option>
          </select>
        </div>
        <div>
          <label>Манфаатдор идора</label>
          <select name="" id="" style={{ width: "250px" }}>
            <option value="Манфаатдор идора">Манфаатдор идора</option>
            <option value="Тип отправки">Тип отправки</option>
          </select>
        </div>
        <div>
          <label>Манфаатдор идора</label>
          <select name="" id="" style={{ width: "250px" }}>
            <option value="Манфаатдор идора">Манфаатдор идора</option>
            <option value="Тип отправки">Тип отправки</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default ApplicationPage;
