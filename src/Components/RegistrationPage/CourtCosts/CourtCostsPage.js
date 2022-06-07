import React from "react";
import {
  Search_Icon,
  Input_Icon,
  Close_Icon,
} from "../../../assets/images/Iocns";
import "./style.scss";

function CourtCostsPage() {
  return (
    <div className="court_header">
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <Search_Icon />
          <span>Ариза (шикоят) мазмуни</span>
        </div>
        <div className="hr" style={{ marginTop: "10px" }}></div>
      </div>
      <div>
        <div className="court_header_select">
          <input type="text" placeholder="Электор тўлов рақами" />
          <Input_Icon />
        </div>
      </div>
      <div className="court_site_items">
        <div className="court_site_item">
          <div className="court_site_content">
            <span>
              Ихтиёрии туланган <br /> давлат божи
            </span>
            <span>40140000 сум</span>
          </div>
          <div className="court_site_content">
            <span>
              Ихтиёрии туланган <br /> давлат божи
            </span>
            <span>40140000 сум</span>
          </div>
          <div className="court_site_content">
            <span>
              Ихтиёрии туланган <br /> давлат божи
            </span>
            <span>40140000 сум</span>
          </div>
        </div>
        <div className="court_site_form">
          <form>
            <div>
              <div>
                <select name="" id="">
                  <option value="Давлат божи холати">Давлат божи холати</option>
                </select>
              </div>
              <div>
                <select name="" id="">
                  <option value="Давлат божи холати">
                    Почта харажати холати
                  </option>
                </select>
              </div>
              <div>
                <select name="" id="">
                  <option value="Давлат божи холати">
                    BKA харажати холати
                  </option>
                </select>
              </div>
            </div>
            <div className="court_site_btn">
              <button>Чет эл валютасидаги тўлов</button>
              <br />
              <button>Чет эл валютасидаги тўлов</button>
              <br />
              <button>Чет эл валютасидаги тўлов</button>
            </div>
            <div className="court_site_input">
              <div>
                <label>Валюта</label>
                <input type="text" name="" id="" value={"1-сум"} />
              </div>
              <div style={{ width: "140px" }}>
                <label>Квитанция рақами</label>
                <input
                  style={{ width: "140px" }}
                  type="text"
                  name=""
                  id=""
                  value={"12464213"}
                />
              </div>
              <div>
                <label>Суммаси</label>
                <input type="text" name="" id="" value={"40140000"} />
              </div>
              <div>
                <label>Санаси</label>
                <input type="date" name="" id="" />
              </div>
              <div>
                <Close_Icon />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CourtCostsPage;
