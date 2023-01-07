import React from "react";
import DateSelector from "../../Components/DateSelector/DateSelector";
import AddFoodcss from "./AddBreakfastAndMeal.module.css";
import TableHeading from "../../Components/TableHeading/TableHeading";
import BreakFast from "../../Components/BreakFast/BreakFast";
import TotalNutrients from "../../Components/TotalNutrients/TotalNutrients";
import { useSelector } from "react-redux";
import { MyStore } from "../../Redux/MyStore";

function AddBreakfastAndMeal() {
  const data = useSelector((MyStore) => {
    return MyStore;
  });
  console.log(data);

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

          <BreakFast name={"Breakfast"} data={data.Breakfast} />
          <p className={AddFoodcss.line}></p>
          <BreakFast name={"Lunch"} data={data.Lunch} />
          <p className={AddFoodcss.line}></p>

          <BreakFast name={"Dinner"} data={data.Dinner} />
          <p className={AddFoodcss.line}></p>
          <BreakFast name={"Snacks"} data={data.Snacks} />
          <p className={AddFoodcss.line}></p>
          <TotalNutrients
            data={[
              ...data.Breakfast,
              ...data.Dinner,
              ...data.Lunch,
              ...data.Snacks,
            ]}
          />
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
