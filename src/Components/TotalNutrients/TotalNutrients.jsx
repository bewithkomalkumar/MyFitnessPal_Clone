import React from "react";
import TNcss from "./TotalNutrients.module.css";
import ItemRows from "../ItemRows/ItemRows";
import TableHeading from "../TableHeading/TableHeading";
import RowforTotal from "./RowforTotal";
import tablecss1 from "../ItemRows/ItemRows.module.css";
function TotalNutrients({ data }) {
  const Calories = data.reduce((acc, elem) => {
    return acc + Number(elem.Calories);
  }, 0);
  const Carbs = data.reduce((acc, elem) => {
    return acc + Number(elem.Carbs);
  }, 0);
  const Fat = data.reduce((acc, elem) => {
    return acc + Number(elem.Fat);
  }, 0);
  const Protein = data.reduce((acc, elem) => {
    return acc + Number(elem.Protein);
  }, 0);
  const Sodium = data.reduce((acc, elem) => {
    return acc + Number(elem.Sodium);
  }, 0);
  const Sugar = data.reduce((acc, elem) => {
    return acc + Number(elem.Sugar);
  }, 0);
  return (
    <>
      <div className={TNcss.Total}>
        <div>
          <p>Total</p>

          <RowforTotal data={data} />
        </div>
        <div>
          <p>Your Daily Goal</p>
          {/* <RowforTotal /> */}
          <div className={tablecss1.tablerow}>
            <p>1970</p>
            <p>246</p>
            <p>66</p>
            <p>99</p>
            <p>2300</p>
            <p>74</p>
            <button style={{ backgroundColor: "white" }} disabled={true}>
              -
            </button>
          </div>
        </div>
        <div>
          <p>Remaining</p>
          <div className={TNcss.greenColor}>
            {/* <RowforTotal /> */}

            <div className={tablecss1.tablerow}>
              <p>{1970 - Calories}</p>
              <p>{246 - Carbs}</p>
              <p>{66 - Fat}</p>
              <p>{99 - Protein}</p>
              <p>{2300 - Sodium}</p>
              <p>{74 - Sugar}</p>
              <button style={{ backgroundColor: "white" }} disabled={true}>
                -
              </button>
            </div>
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
