import React from "react";
import { Link } from "react-router-dom";
import tablecss from "./BreakFast.module.css";
import ItemRows from "../ItemRows/ItemRows";
import tablecss1 from "../ItemRows/ItemRows.module.css";
import RowforTotal from "../TotalNutrients/RowforTotal";

function BreakFast({ name, data }) {
  //console.log(name, data);
  return (
    <div className={tablecss.box}>
      <h2>{name}</h2>
      <div>
        {/* maping my item rows here */}
        {data.map((elem) => {
          return (
            <div className={tablecss.sss} key={elem.id}>
              <p>{elem.name}</p>
              <ItemRows data={elem} name={name} />
            </div>
          );
        })}

        <div>
          <div className={tablecss.AddFood}>
            <div>
              <Link to={`/fooditems/${name}`}>Add Food</Link> |{" "}
              <Link>Quick Tools</Link>
            </div>

            <RowforTotal data={data} name={name} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BreakFast;
