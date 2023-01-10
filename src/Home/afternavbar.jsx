import { Box, Button, Hide } from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import StyleHome from "./afternav.module.css";

export default function Navbar2(auth) {
  const [hover, setHover] = useState(0);
  const navigate = useNavigate();
  const username = JSON.parse(localStorage.getItem("user"));

  const onLogout = () => {
    localStorage.removeItem("fitUserID");
    navigate("/");
  };
  return (
    <>
      {auth ? (
        <div className={StyleHome.nav2div}>
          <div className={StyleHome.nav2logodiv}>
            <h4 className={StyleHome.nav2logo}>MyFitnessFriend</h4>
          </div>
          <div className={StyleHome.nav2info}>
            <p className={StyleHome.nav2ppp}>Hi,</p>{" "}
            <p className={StyleHome.nav2name}>
              {username.username ? username.username : "username"}
            </p>
            <p className={StyleHome.nav2ppp}>|</p>
            <div className={StyleHome.nav2imgdiv}>
              <img
                className={StyleHome.nav2img}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL6LOv4ybfr9ZTSE3k45QjPIzXA4mSB77OJQ&usqp=CAU"
                alt=""
              />
              <img
                className={StyleHome.nav2img}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS10gy2dUHVofVtPGS_sGbpNk1aRoqh8Bg_5KMrHZ2atqxQfW3K2XMx1sw-Qc5pe6ME-XA&usqp=CAU"
                alt=""
              />
              <img
                className={StyleHome.nav2img}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX6XmVaKMw3i65yRAN6Ak4MXE6eQTqxNSb4onBhTL6erurw0s5tHetTt_L6eJzK9wgans&usqp=CAU"
                alt=""
              />
              <img
                className={StyleHome.nav2img}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp_JgYic_DL7fr0LOU9B9uCaDIGFeaAYXVkQ&usqp=CAU"
                alt=""
              />
            </div>
            <Hide below="md">
              <p className={StyleHome.nav2ppp}>|</p>
              <p className={StyleHome.nav2color}>Help</p>
              <p className={StyleHome.nav2ppp}>|</p>
              <p className={StyleHome.nav2color}>Settings</p>
              <p className={StyleHome.nav2ppp}>|</p>
            </Hide>
            <p
              onClick={() => {
                auth = false;
                onLogout();
                window.location.reload ()
              }}
              className={StyleHome.nav2logout}
            >
              Logout
            </p>
            <p className={StyleHome.nav2ppp}>|</p>
            <p className={StyleHome.nav2follow}>Follow us:</p>
            <div className={StyleHome.nav2imgdiv}>
              <img
                className={StyleHome.nav2img}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/2048px-Facebook_icon.svg.png"
                alt=""
              />
              <img
                className={StyleHome.nav2img}
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {auth ? (
        <Box className={StyleHome.myhome}>
          <Box
            className={StyleHome.homediv}
            w={{ lg: "70%", md: "80%", sm: "90%", base: "100%" }}
          >
            <button
              onClick={() => {
                setHover(0);
                navigate("/");
              }}
              style={
                hover == 0
                  ? { backgroundColor: "rgb(32, 76, 115)", width: "250px" }
                  : { color: "white", width: "250px" }
              }
              className={StyleHome.homebutton}
            >
              MY HOME
            </button>
            <button
              onClick={() => {
                setHover(1);
                navigate("/food/dairy");
              }}
              style={
                hover == 1
                  ? { backgroundColor: "rgb(32, 76, 115)" }
                  : { color: "white" }
              }
              className={StyleHome.homebutton}
            >
              FOOD
            </button>
            <button
              onClick={() => {
                setHover(2);
                navigate("/exercise");
              }}
              style={
                hover == 2
                  ? { backgroundColor: "rgb(32, 76, 115)" }
                  : { color: "white" }
              }
              className={StyleHome.homebutton}
            >
              EXERCISE
            </button>
            <button
              onClick={() => {
                setHover(3);
                navigate("/reports");
              }}
              style={
                hover == 3
                  ? { backgroundColor: "rgb(32, 76, 115)" }
                  : { color: "white" }
              }
              className={StyleHome.homebutton}
            >
              REPORTS
            </button>
            <Hide below="sm">
              <button 
                onClick={() => {
                  setHover(4);
                  navigate("/apps/page/1");
                }} 
                style={
                  hover == 4
                    ? { backgroundColor: "rgb(32, 76, 115)" }
                    : { color: "white" }
                }
                className={StyleHome.homebutton}
              >
                APPS
              </button>

              <button className={StyleHome.homebutton}>COMMUNITY</button>
              <button className={StyleHome.homebutton}>BLOG</button>
            </Hide>
            <Hide below="md">
              <button
              onClick={() => {
                setHover(5);
                navigate("/premium");
              }} 
              style={
                hover == 5
                  ? { backgroundColor: "rgb(32, 76, 115)" }
                  : { color: "white" }
              }
              className={StyleHome.homebutton}
              >PREMIUM</button>
            </Hide>
          </Box>
        </Box>
      ) : (
        ""
      )}

      {/* HOME HOVER DIV */}
      {auth && hover == 0 ? (
        <div className={StyleHome.hoverdiv}>
          <div className={StyleHome.hover2div}>
            <button className={StyleHome.hoverdivbutton}>
              <Link to="/home">HOME</Link>
            </button>
            <button className={StyleHome.hoverdivbutton}>
              <Link to="/home/goal">Goals</Link>
            </button>
            <button className={StyleHome.hoverdivbutton}>
              <Link to={"/home/checkin"}>Check-in</Link>
            </button>
            <button className={StyleHome.hoverdivbutton}>Mail</button>
            <button className={StyleHome.hoverdivbutton}>
              <Link to={"/home/profile"}>Profile</Link>
            </button>
            <button className={StyleHome.hoverdivbutton}>My Blog</button>
            <button className={StyleHome.hoverdivbutton}>Friend</button>
            <button className={StyleHome.hoverdivbutton}>Settings</button>
          </div>
        </div>
      ) : (
        ""
      )}

      {/* FOOD HOVER DIV */}
      {auth && hover === 1 ? (
        <div className={StyleHome.hoverdiv}>
          <div className={StyleHome.hover2div}>
            <button className={StyleHome.hoverdivbutton}>
              <Link to={"/food/dairy"}>Food Diary</Link>
            </button>
            <button className={StyleHome.hoverdivbutton}>Database</button>
            <button className={StyleHome.hoverdivbutton}>My Foods</button>
            <button className={StyleHome.hoverdivbutton}>MY Meals</button>
            <button className={StyleHome.hoverdivbutton}>Recipes</button>
            <button className={StyleHome.hoverdivbutton}>Settings</button>
          </div>
        </div>
      ) : (
        ""
      )}

      {/* EXERCISE HOVER DIV */}
      {auth && hover === 2 ? (
        <div className={StyleHome.hoverdiv}>
          <div className={StyleHome.hover2div}>
            <button className={StyleHome.hoverdivbutton}>
              <Link to={"/exercise"}>Exercise Diary</Link>
            </button>
            <button className={StyleHome.hoverdivbutton}>
              <Link to={"/exercise/database"}>Database</Link>
            </button>
            <button className={StyleHome.hoverdivbutton}>
              <Link to={"/exercise/myexercise"}>My Exercise</Link>
            </button>
            <button className={StyleHome.hoverdivbutton}>Settings</button>
          </div>
        </div>
      ) : (
        ""
      )}

      {/* REPORTS HOVER DUIV */}
      {auth && hover === 3 ? (
        <div className={StyleHome.hoverdiv}>
          <div className={StyleHome.hover2div}>
            <button className={StyleHome.hoverdivbutton}>
              <Link to={"/reports"}>Charts</Link>
            </button>
            <button className={StyleHome.hoverdivbutton}>
              <Link to={"/reports/export"}>Export Data</Link>
            </button>
            <button className={StyleHome.hoverdivbutton}>
              <Link to={"/reports/weekly-digest"}>Weekly Digest</Link>
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
