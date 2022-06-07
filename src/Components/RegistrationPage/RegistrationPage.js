import React from "react";
import AdministrativePage from "./Administrative/AdministrativePage";
import Document from "./document/Document";

function RegistrationPage() {
  return (
    <div style={{ width: "81.5%" }}>
      <Document />
      <AdministrativePage />
    </div>
  );
}

export default RegistrationPage;
