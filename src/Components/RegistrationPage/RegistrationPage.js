import React from "react";
import AdministrativePage from "./Administrative/AdministrativePage";
import ApplicationPage from "./Application/ApplicationPage";
import CourtCostsPage from "./CourtCosts/CourtCostsPage";
import Document from "./document/Document";
import OtherInformationPage from "./OtherInformation/OtherInformationPage";
import "./style.scss";

function RegistrationPage() {
  return (
    <div style={{ width: "81.5%" }}>
      <Document />
      <AdministrativePage />
      <ApplicationPage />
      <CourtCostsPage />
      <OtherInformationPage />
      <div className="save_btn">
        <button>Бекор қилиш</button>
        
        <button>Саклаш</button>
      </div>
    </div>
  );
}

export default RegistrationPage;
