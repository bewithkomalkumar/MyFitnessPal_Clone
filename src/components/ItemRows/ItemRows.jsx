import React from "react";
import tablecss from "./ItemRows.module.css";
import { RemoveFooditemToBreakfastActionCreator } from "../../Redux/FoodAction";
import { useDispatch } from "react-redux";
function ItemRows({ data, name }) {
  const dispatch = useDispatch();
  const handleClick = (data) => {
    console.log(data);

    console.log("hii");
    const payload = {
      id: data.id,
      name: name,
    };
    dispatch(RemoveFooditemToBreakfastActionCreator(payload));
  };
  return (
    <div className={tablecss.tablerow} key={data.name}>
      <p>{data.Calories}</p>
      <p>{data.Carbs}</p>
      <p>{data.Fat}</p>
      <p>{data.Protein}</p>
      <p>{data.Sodium}</p>
      <p>{data.Sugar}</p>
      <button
        onClick={() => {
          handleClick(data);
        }}
      >
        x
      </button>
    </div>
  );
}

export default ItemRows;
