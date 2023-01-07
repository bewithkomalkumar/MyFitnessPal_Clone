import React from "react";
import tablecss1 from "../ItemRows/ItemRows.module.css";
function RowforTotal() {
  return (
    <div className={tablecss1.tablerow}>
      <p>10</p>
      <p>20</p>
      <p>011</p>
      <p>01</p>
      <p>01</p>
      <p>12</p>
      <button style={{ backgroundColor: "white" }} disabled={true}>
        -
      </button>
    </div>
  );
}

export default RowforTotal;
