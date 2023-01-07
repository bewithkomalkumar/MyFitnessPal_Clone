import React from "react";

function TableHeading() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              Calories <br />
              <span>Kcal</span>
            </th>
            <th>
              Carbs <br />
              <span>g</span>
            </th>
            <th>
              Fat <br />
              <span>g</span>
            </th>
            <th>
              Protein <br />
              <span>g</span>
            </th>
            <th>
              Sodium <br />
              <span>mg</span>
            </th>
            <th>
              Sugar
              <br />
              <span>g</span>
            </th>
            <th style={{ backgroundColor: "white" }}>
              Edit
              <br />
              <span></span>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default TableHeading;
