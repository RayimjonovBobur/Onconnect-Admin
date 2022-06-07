import React from "react";
import "./style.scss";

function Document() {
  return (
    <div className="document-header">
      <form>
        <div>
          <label>Xужжат тури</label>
          <select name="select" id="select">
            <option value="маъмурий низо">Mаъмурий низо</option>
            <option value="маъмурий низо">Mаъмурий низо</option>
            <option value="маъмурий низо">Mаъмурий низо</option>
          </select>
        </div>
        <div>
          <label>Xужжат тури</label>
          <select name="select_" id="select_">
            <option value="Биринчи инстанция">Биринчи инстанция</option>
            <option value="Биринчи инстанция">Биринчи инстанция</option>
            <option value="Биринчи инстанция">Биринчи инстанция</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Document;
