import React from "react";
import DateSelector from "../../Components/DateSelector/DateSelector";
import AddFoodcss from "./AddBreakfastAndMeal.module.css";
import TableHeading from "../../Components/TableHeading/TableHeading";
import BreakFast from "../../Components/BreakFast/BreakFast";
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
          <BreakFast />
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
