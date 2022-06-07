import React from "react";
import { Other_Icon } from "../../../assets/images/Iocns";

function OtherInformationPage() {
  return (
    <div className="administrativ_header">
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <Other_Icon />
          <span>Бошка маълумотлар</span>
        </div>
        <div className="hr" style={{ marginTop: "10px" }}></div>
      </div>
      <form>
        <div style={{ width: "100%" }}>
          <input
            style={{ width: "100%" }}
            type="text"
            name=""
            id=""
            placeholder="Изох"
          />
        </div>
      </form>
    </div>
  );
}

export default OtherInformationPage;
