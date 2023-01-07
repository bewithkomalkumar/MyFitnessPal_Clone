import React from "react";
import TNcss from "./TotalNutrients.module.css";
import ItemRows from "../ItemRows/ItemRows";
import TableHeading from "../TableHeading/TableHeading";
import RowforTotal from "./RowforTotal";

function TotalNutrients() {
  return (
    <>
      <div className={TNcss.Total}>
        <div>
          <p>Total</p>

          <RowforTotal />
        </div>
        <div>
          <p>Your Daily Goal</p>
          <RowforTotal />
        </div>
        <div>
          <p>Remaining</p>
          <div className={TNcss.greenColor}>
            <RowforTotal />
          </div>
        </div>
        <div className={TNcss.tableHeading}>
          <TableHeading />
        </div>
      </div>
    </>
  );
}

export default TotalNutrients;
