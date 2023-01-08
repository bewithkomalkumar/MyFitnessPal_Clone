import React from "react";
import AddBreakfastAndMeal from "../AddBreakfastAndMeal/AddBreakfastAndMeal";
import { Route, Routes } from "react-router-dom";
import AddFoodItem from "../AddFoodItem/AddFoodItem";
function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AddBreakfastAndMeal />}></Route>
        <Route path="/fooditems/:pramname" element={<AddFoodItem />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
