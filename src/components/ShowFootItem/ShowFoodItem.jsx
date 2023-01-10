import React from "react";
import Itemscss from "./ShowFoodItem.module.css";
function ShowFoodItem({ data, handleClick }) {
  return (
    <div className={Itemscss.Items}>
      {data.map((elem) => {
        return (
          <div
            key={elem.id}
            onClick={() => {
              handleClick(elem);
            }}
          >
            <div>
              <p>{elem.name}</p>
              <p>Calories {elem.Calories}</p>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default ShowFoodItem;
