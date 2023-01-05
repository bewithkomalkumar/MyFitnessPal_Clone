import React from "react";
import { Link } from "react-router-dom";
import tablecss from "./BreakFast.module.css";
import ItemRows from "../ItemRows/ItemRows";
function BreakFast(props) {
  return (
    <div className={tablecss.box}>
      <h2>{props.name}</h2>
      <div>
        <div>
          <Link>Add Food</Link> | <Link>Quick Tools</Link>
        </div>
        {/* maping my item rows here */}
        <ItemRows />
      </div>
    </div>
  );
}

export default BreakFast;
