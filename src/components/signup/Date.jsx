import React from "react";
import { useState } from "react";
import Datecss from "./Date.module.css";
import { useEffect } from "react";
function DateSelector() {
  const [months] = useState([]);
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [date, setDate] = useState("");
  useEffect(() => {
    var date = Date();
    date = date.toString();
    const d = date.split(" ");
    let month = "";
    setYear(d[3]);
    changemonth(month, d[1]);
    setDate(d[2]);
  }, []);
  const manageDate = (event) => {
    // console.log(event.target.value);
    var today = event.target.value;
    // console.log(today);
    let date = new Date(today);
    console.log(date);
    date = date.toString();
    const d = date.split(" ");
    console.log(d);
    let month = "";
    setYear(d[3]);
    changemonth(month, d[1]);
    setDate(d[2]);
  };
  const changemonth = (month, selectedMonth) => {
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    if (selectedMonth === "Jan") setMonth(months[0]);
    else if (selectedMonth === "Feb") setMonth(months[1]);
    else if (selectedMonth === "Mar") setMonth(months[2]);
    else if (selectedMonth === "Apr") setMonth(months[3]);
    else if (selectedMonth === "May") setMonth(months[4]);
    else if (selectedMonth === "Jun") setMonth(months[5]);
    else if (selectedMonth === "Jul") setMonth(months[6]);
    else if (selectedMonth === "Aug") setMonth(months[7]);
    else if (selectedMonth === "Sep") setMonth(months[8]);
    else if (selectedMonth === "Oct") setMonth(months[9]);
    else if (selectedMonth === "Nov") setMonth(months[10]);
    else if (selectedMonth === "Dec") setMonth(months[11]);
  };
  return (
    <div className={Datecss.Date}>
      <div>
        {/* <p className={Datecss.larrow}>&larr;</p> */}
        <p className={Datecss.maindate}>
          {month} {date}, {year}
        </p>
        {/* <p className={Datecss.rarrow}>&rarr;</p> */}
      </div>
      <input type="date" onChange={manageDate} />
    </div>
  );
}

export default DateSelector;
