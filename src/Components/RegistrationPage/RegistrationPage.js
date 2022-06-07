import React from "react";
import AdministrativePage from "./Administrative/AdministrativePage";
import ApplicationPage from "./Application/ApplicationPage";
import Document from "./document/Document";

function RegistrationPage() {
  return (
    <div style={{ width: "81.5%" }}>
      <Document />
      <AdministrativePage />
      <ApplicationPage />
    </div>
  );
}

export default RegistrationPage;
