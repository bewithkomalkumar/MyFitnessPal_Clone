import React from "react";
import { Link } from "react-router-dom";
import tablecss from "./BreakFast.module.css";
import ItemRows from "../ItemRows/ItemRows";
import tablecss1 from "../ItemRows/ItemRows.module.css";
import RowforTotal from "../TotalNutrients/RowforTotal";
function BreakFast(props) {
  return (
    <div className={tablecss.box}>
      <h2>{props.name}</h2>
      <div>
        {/* maping my item rows here */}
        <div className={tablecss.sss}>
          <p>eggs</p>
          <ItemRows text={"-"} />
        </div>
        <div className={tablecss.sss}>
          <p>eggs</p>
          <ItemRows text={"-"} />
        </div>
        <div>
          <div className={tablecss.AddFood}>
            <div>
              <Link to={"/fooditems"}>Add Food</Link> | <Link>Quick Tools</Link>
            </div>

            <RowforTotal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BreakFast;
