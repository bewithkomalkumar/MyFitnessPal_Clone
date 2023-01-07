import React from "react";
import SingleFoodItemcss from "./SingleFoodItem.module.css";
function SingleFoodItem({ data }) {
  return (
    <div className={SingleFoodItemcss.SingleItem}>
      <h2 style={{ textAlign: "center", color: "black" }}>Selected Item</h2>
      <h2>{data.name}</h2>
      <p>
        <b>Calories : </b>
        {data.Calories} kcal
      </p>
      <p>
        <b>Carbs : </b>
        {data.Carbs} g
      </p>
      <p>
        <b>Protein : </b>
        {data.Protein} g
      </p>
      <p>
        <b>Sodium : </b>
        {data.Sodium} mg
      </p>
      <p>
        <b>Sugar : </b>
        {data.Sugar} g
      </p>
    </div>
  );
}

export default SingleFoodItem;
