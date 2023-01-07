import React from "react";
import tablecss from "./ItemRows.module.css";
function ItemRows(props) {
  return (
    <div className={tablecss.tablerow}>
      <p>10</p>
      <p>20</p>
      <p>011</p>
      <p>01</p>
      <p>01</p>
      <p>12</p>
      <button>-</button>
    </div>
  );
}

export default ItemRows;
