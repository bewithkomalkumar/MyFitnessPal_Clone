import React from "react";
import { MyStore } from "../../Redux/MyStore";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddFooditemToBreakfastActionCreator,
  AddFooditemToDinnerActionCreator,
  AddFooditemToLunchActionCreator,
  AddFooditemToSnacksActionCreator,
  GetFoodItemActionCreator,
} from "../../Redux/FoodAction";
import { useState } from "react";
import ShowFoodItem from "../../Components/ShowFootItem/ShowFoodItem";
import SingleFoodItem from "../../Components/SingleFoodItem/SingleFoodItem";
import AddFoodItemcss from "./AddFoodItem.module.css";
import { Navigate, useParams, useSearchParams } from "react-router-dom";
import BreakFast from "../../Components/BreakFast/BreakFast";

function AddFoodItem() {
  const [name, setName] = useState("");
  const [singleItem, setSingleItem] = useState({
    Calories: 104,
    Carbs: 28,
    Fat: 0,
    Protein: 1,
    Sodium: 2,
    Sugar: 21,
    id: 1,
    name: "Apple",
  });
  const { pramname } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((MyStore) => {
    return MyStore.Allfood;
  });
  useEffect(() => {
    fetch(`http://localhost:8080/Meals`)
      .then((res) => res.json())
      .then((res2) => {
        // console.log(res2);
        dispatch(GetFoodItemActionCreator(res2));
        // console.log(MyStore.getState());
      });
  }, []);
  const showItem = (data) => {
    setSingleItem(data);
    // console.log(data);
  };
  const searchItem = (name) => {
    const sname = data.filter((elem) => {
      return elem.name === name;
    });
    // console.log(sname);
    if (sname.length <= 0) {
      alert("Item not found");
    } else setSingleItem(sname[0]);
  };

  const AddingItem = (pramname) => {
    if (pramname === "Breakfast") {
      dispatch(AddFooditemToBreakfastActionCreator(singleItem));
    } else if (pramname === "Lunch") {
      dispatch(AddFooditemToLunchActionCreator(singleItem));
    } else if (pramname === "Dinner") {
      dispatch(AddFooditemToDinnerActionCreator(singleItem));
    } else if (pramname === "Snacks") {
      dispatch(AddFooditemToSnacksActionCreator(singleItem));
    }

    console.log(MyStore.getState());
  };
  return (
    <div>
      <h1>Add Your Daily Nutrients</h1>
      <div className={AddFoodItemcss.search}>
        <input
          type="text"
          placeholder="Enter Food Item Name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <button onClick={() => searchItem(name)}>Search</button>
      </div>

      <div className={AddFoodItemcss.Container}>
        <ShowFoodItem data={data} handleClick={showItem} />
        <SingleFoodItem data={singleItem} />
      </div>
      <div className={AddFoodItemcss.btn}>
        <button
          onClick={() => {
            AddingItem(pramname);
          }}
        >
          Add Item
        </button>
      </div>
    </div>
  );
}

export default AddFoodItem;
