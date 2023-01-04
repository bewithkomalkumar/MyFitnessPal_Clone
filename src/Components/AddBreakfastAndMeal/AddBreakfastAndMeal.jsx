import React from "react";
import DateSelector from "../DateSelector/DateSelector";
import AddFoodcss from "./AddBreakfastAndMeal.module.css";
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
        </div>
        <div className={AddFoodcss.Ads}>
          <img
            src="https://tpc.googlesyndication.com/simgad/17903055369230987743"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default AddBreakfastAndMeal;
