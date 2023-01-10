import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import StyleHome from "./home.module.css";

export default function HomePage() {
  const [card, setCard] = useState(0);
  const navigate = useNavigate();
  const [login, setlogin] = useState(false);
  const userID = localStorage.getItem("fitUserID");
  useEffect(() => {
    if (userID) {
      setlogin(true);
      navigate("/home");
    }
  }, [userID]);
  return (
    <Box>
      {/* GOOD HEALTH DIV START HERE */}
      <Box className={StyleHome.goodhealthdiv}>
        <div className={StyleHome.gooddiv2}>
          <h1 className={StyleHome.goodh1}>
            Good health starts with what you eat.
          </h1>
          <p className={StyleHome.goodp11}>
            {" "}
            Want to eat more mindfully? Track meals, learn about your habits,
            and reach your goals with MyFitnessPal.
          </p>
          <Link to={"/signup1"}>
            <button className={StyleHome.goodbutton}>START FOR FREE</button>
          </Link>
        </div>
        <div className={StyleHome.goodimgdiv}>
          <img
            className={StyleHome.goodimg}
            src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-slice%402x.e3eec8a8.png&w=1920&q=75"
            alt="Food img"
          />
        </div>
      </Box>

      {/* LOG FROM OVER START HERE */}

      <div className={StyleHome.logdiv}>
        <div className={StyleHome.logimgdiv}>
          <img
            className={StyleHome.logimg}
            src="https://www.myfitnesspal.com/_next/image?url=%2Fpages%2Fhome%2Fsecondary-hero-slice%402x.png&w=512&q=75"
            alt="BLUEBERRIES IMG"
          />
        </div>
        <div className={StyleHome.logdiv2}>
          <h1 className={StyleHome.logh1}>Log from over 14 million foods.</h1>
          <p className={StyleHome.p1}>
            See a breakdown of calories and nutrients, compare serving sizes,
            and discover how the food you eat supports your goals.
          </p>
        </div>
      </div>

      {/* the tools start here */}

      <div className={StyleHome.toolsdiv}>
        <h1 className={StyleHome.toolsh1}>The Tools for Your Goals</h1>
        <p className={StyleHome.toolsp1}>
          Trying to lose weight, tone up, lower your BMI, or invest in your
          overall health? We give you the right features to get there.
        </p>
      </div>

      <div className={StyleHome.toolsgriddiv}>
        <div className={StyleHome.toolsgrid1}>
          <div className={StyleHome.toolsimgdiv}>
            <img
              className={StyleHome.toolsimg}
              src="https://www.myfitnesspal.com/_next/static/media/diary.e6e4c438.svg"
              alt="learn track"
            />
          </div>
          <h4 className={StyleHome.toolsh4}>Learn. Track. Improve.</h4>
          <p className={StyleHome.toolsgridp1}>
            Keeping a food diary helps you understand your habits and increases
            your likelihood of hitting your goals.
          </p>
        </div>
        <div className={StyleHome.toolsgrid1}>
          <div className={StyleHome.toolsimgdiv}>
            <img
              className={StyleHome.toolsimg}
              src="https://www.myfitnesspal.com/_next/static/media/barcode.18277ae4.svg"
              alt="learn track"
            />
          </div>
          <h4 className={StyleHome.toolsh4}>Logging Simplified.</h4>
          <p className={StyleHome.toolsgridp1}>
            Scan barcodes, save meals and recipes, and use Quick Tools for fast
            and easy food tracking.
          </p>
        </div>
        <div className={StyleHome.toolsgrid1}>
          <div className={StyleHome.toolsimgdiv}>
            <img
              className={StyleHome.toolsimg}
              src="https://www.myfitnesspal.com/_next/static/media/shoeblue.28e2684f.svg"
              alt="learn track"
            />
          </div>
          <h4 className={StyleHome.toolsh4}>Stay Motivated.</h4>
          <p className={StyleHome.toolsgridp1}>
            Join the World’s Largest Fitness Community for advice, tips, and
            support 24/7.
          </p>
        </div>
      </div>

      {/* Victory stories************************************ */}

      <div className={StyleHome.vicdiv}>
        <h1 className={StyleHome.vich1}>VICTORY STORIES</h1>
        <p className={StyleHome.vicp1}>
          Every day, more than 3,000 members reach their goals with
          MyFitnessPal. Get inspired for the journey ahead.
        </p>
      </div>

      <div className={StyleHome.photo}>
        <div
          onClick={() => {
            card < 1 ? setCard(2) : setCard((prev) => prev - 1);
          }}
          className={StyleHome.sidebar}
        >
          <img
            className={StyleHome.vicimgside}
            src="https://www.myfitnesspal.com/_next/static/media/arrow-left.fdf599cb.svg"
            alt=">"
          />
        </div>
        {/* div victory image and card 0000000000000000000000000*/}
        {card == 0 ? (
          <div className={StyleHome.viccarddiv}>
            <div className={StyleHome.vicimgdiv}>
              <img
                className={StyleHome.vicimg}
                src="https://www.myfitnesspal.com/_next/image?url=%2Fpages%2Fhome%2Fvictory-story-3.jpg&w=1920&q=75"
                alt="aaaa"
              />
            </div>
            <div>
              <h1 className={StyleHome.viccardh1}>
                She was eager to make a chance
              </h1>
              <p className={StyleHome.viccardp1}>
                Now,when i have friends starting to run and getting frusted,i
                tell them to just stick with it
              </p>
            </div>
          </div>
        ) : (
          ""
        )}

        {card == 1 ? (
          <div className={StyleHome.viccarddiv}>
            <div className={StyleHome.vicimgdiv}>
              <img
                className={StyleHome.vicimg}
                src="https://www.myfitnesspal.com/_next/image?url=%2Fpages%2Fhome%2Fvictory-story-1.jpg&w=1920&q=75"
                alt="aaaa"
              />
            </div>
            <div>
              <h1 className={StyleHome.viccardh1}>
                Eduction helped her lose 30 ponds
              </h1>
              <p className={StyleHome.viccardp1}>
                Now,when i have friends starting to run and getting frusted,i
                tell them to just stick with it
              </p>
            </div>
          </div>
        ) : (
          ""
        )}

        {card == 2 ? (
          <div className={StyleHome.viccarddiv}>
            <div className={StyleHome.vicimgdiv}>
              <img
                className={StyleHome.vicimg}
                src="https://www.myfitnesspal.com/_next/image?url=%2Fpages%2Fhome%2Fvictory-story-2.jpg&w=1920&q=75"
                alt="aaaa"
              />
            </div>
            <div>
              <h1 className={StyleHome.viccardh1}>
                From fast food addict to mindful eater
              </h1>
              <p className={StyleHome.viccardp1}>
                Now,when i have friends starting to run and getting frusted,i
                tell them to just stick with it
              </p>
            </div>
          </div>
        ) : (
          ""
        )}

        {/*0000000000000000000000000000000000*/}
        <div
          onClick={() => {
            card > 1 ? setCard(0) : setCard((prev) => prev + 1);
          }}
          className={StyleHome.sidebar}
        >
          <img
            className={StyleHome.vicimgside}
            src="https://www.myfitnesspal.com/_next/static/media/arrow-right.7d54eed8.svg"
            alt="<"
          />
        </div>
      </div>

      <Link to={"/signup1"}>
        <button className={StyleHome.vicbutton}>
          START YOUR JOURNEY TODAY
        </button>
      </Link>

      {/* RECIPE & INSPIRATION ****************************** */}

      <div className={StyleHome.recipediv}>
        <h1 className={StyleHome.recipeh1}>Recipes & Inspiration</h1>
        <p className={StyleHome.recipep1}>
          Get nutritionist-approved recipes and motivational workout tips from
          MyFitnessPal experts.
        </p>
      </div>

      <div className={StyleHome.blogdiv}>
        <div className={StyleHome.blogdiv2}>
          <div className={StyleHome.blogimgdiv}>
            <img
              className={StyleHome.blogimg}
              src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbreakfast-300-calories.d991cc82.png&w=1920&q=75"
              alt=""
            />
          </div>
          <h4 className={StyleHome.blogimgh4}>
            15 Make-Ahead Breakfasts Under 300
          </h4>
          <h5 className={StyleHome.blogimgh42}>MyfitnessPal Blog</h5>
        </div>

        <div className={StyleHome.blogdiv2}>
          <div className={StyleHome.blogimgdiv}>
            <img
              className={StyleHome.blogimg}
              src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcheat-days.a49e92b5.jpg&w=1920&q=75"
              alt=""
            />
          </div>
          <h4 className={StyleHome.blogimgh4}>The Problem With Cheat Days</h4>
          <h5 className={StyleHome.blogimgh42}>MyfitnessPal Blog</h5>
        </div>

        <div className={StyleHome.blogdiv2}>
          <div className={StyleHome.blogimgdiv}>
            <img
              className={StyleHome.blogimg}
              src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgetting-moving.e3e4042a.png&w=1920&q=75"
              alt=""
            />
          </div>
          <h4 className={StyleHome.blogimgh4}>
            Essential Guide to Getting Moving
          </h4>
          <h5 className={StyleHome.blogimgh42}>MyfitnessPal Blog</h5>
        </div>
      </div>

      {/* Connect with apps div */}
      <div className={StyleHome.connectdiv}>
        <h1 className={StyleHome.connecth1}>Connect with over 50 apps.</h1>
        <p className={StyleHome.connectp1}>
          Easily link your MyFitnessPal account with apps that support your
          healthier lifestyle. It’s not just about calories. It’s about feeling
          better, looking better, and living better.
        </p>
      </div>

      <img
        className={StyleHome.connectimg}
        src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-apps%402x.85e549ef.png&w=1920&q=75"
        alt=""
      />

      <p className={StyleHome.connectimgp1}>
        MyFitnessPal is one of the best weight loss apps and fitness apps,
        helping nearly 1 million members reach their nutrition and fitness goals
        every year. Members use it as a calories tracker and calorie counter to
        log their foods, and take advantage of the app’s food database that
        contains over 14 million foods. It’s not just a free calorie counter app
        — it’s also the best calorie counter app for people who are looking to
        take back control of their health and fitness.
      </p>
    </Box>
  );
}
