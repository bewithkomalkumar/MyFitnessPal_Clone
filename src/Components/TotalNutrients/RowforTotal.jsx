import React from "react";
import tablecss1 from "../ItemRows/ItemRows.module.css";
function RowforTotal({ data }) {
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
  // console.log("*******");
  // console.log(data);
  return (
    <div className={tablecss1.tablerow}>
      <p>{Calories}</p>
      <p>{Carbs}</p>
      <p>{Fat}</p>
      <p>{Protein}</p>
      <p>{Sodium}</p>
      <p>{Sugar}</p>
      <button style={{ backgroundColor: "white" }} disabled={true}>
        -
      </button>
    </div>
  );
}

export default RowforTotal;
