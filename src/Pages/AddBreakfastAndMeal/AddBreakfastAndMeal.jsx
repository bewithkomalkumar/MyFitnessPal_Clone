import React from "react";
import DateSelector from "../../Components/DateSelector/DateSelector";
import AddFoodcss from "./AddBreakfastAndMeal.module.css";
import TableHeading from "../../Components/TableHeading/TableHeading";
import BreakFast from "../../Components/BreakFast/BreakFast";
import TotalNutrients from "../../Components/TotalNutrients/TotalNutrients";
function AddBreakfastAndMeal() {
  return (
    <div>
      <div className={AddFoodcss.upperAds}>
        <img
          src="https://tpc.googlesyndication.com/simgad/4841471653946608601"
          alt=""
        />
      </div>

      <div className={AddFoodcss.container}>
        <div>
          {/* my Components here */}
          <DateSelector />
          <hr />
          <TableHeading />

          <BreakFast name={"Breakfast"} />
          <p className={AddFoodcss.line}></p>
          <BreakFast name={"Lunch"} />
          <p className={AddFoodcss.line}></p>
          <BreakFast name={"Dinner"} />
          <p className={AddFoodcss.line}></p>
          <BreakFast name={"Snacks"} />
          <p className={AddFoodcss.line}></p>
          <TotalNutrients />
        </div>

        <div className={AddFoodcss.Ads}>
          <img
            src="https://tpc.googlesyndication.com/simgad/17903055369230987743"
            alt=""
          />
        </div>
        <div className={AddFoodcss.btns}>
          <button>Complete This Entry</button>
        </div>
      </div>
    </div>
  );
}

export default AddBreakfastAndMeal;
