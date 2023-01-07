import React from "react";
import { Link } from "react-router-dom";
import StyleHome from "./home.module.css";

const BeforeNavbar = () => {
  return (
    <div className={StyleHome.navdiv}>
      <h4 className={StyleHome.navlogoss}>myfitnesspal</h4>
      <Link to={"/login"}>
        <h4 style={{ cursor: "pointer" }} className={StyleHome.navlogin}>
          LOG IN
        </h4>
      </Link>
    </div>
  );
};

export default BeforeNavbar;
