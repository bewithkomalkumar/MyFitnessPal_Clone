import { Link } from "react-router-dom";
import StyleHome from "./footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={StyleHome.footerdiv}>
        <div className={StyleHome.aboutdiv}>
          <Link to="/">
            {" "}
            <h4>ABOUT</h4>
          </Link>
          <Link to="/food/dairy">
            <h4> FOOD</h4>
          </Link>
          <Link to="/exercise">
            <h4>EXERCISE</h4>
          </Link>
          <Link to="/reports">
            <h4> APPS</h4>
          </Link>
          <Link to="/">
            <h4>COMMUNITY</h4>
          </Link>
          <Link to="/">
            <h4>BLOG</h4>
          </Link>
          <Link to="/">
            <h4> PREMIUM</h4>
          </Link>
        </div>
        <div className={StyleHome.about2div}>
          <Link to="https://www.myfitnesspal.com/">
            <p>Calorie Counter</p>
          </Link>
          <Link to="https://blog.myfitnesspal.com/">
            <p>Blog</p>
          </Link>
          <Link to="https://www.myfitnesspal.com/terms-of-service">
            <p>Terms</p>
          </Link>
          <Link to="https://www.myfitnesspal.com/privacy-policy">
            <p>Privacy</p>
          </Link>
          <Link to="https://www.myfitnesspal.com/contact-us">
            <p>Contact us</p>
          </Link>
          <Link to="https://www.myfitnesspal.com/api">
            <p>Api</p>
          </Link>
          <Link to="https://www.myfitnesspal.com/jobs">
            <p>Jobs</p>
          </Link>
        </div>
        <div className={StyleHome.about3div}>
          <p>Ad Choices</p>
          <p>Do not Sell My Personal Information</p>
        </div>
        <div className={StyleHome.about4div}>
          <p>© 2022 MyFitnessPal, Inc.</p>
        </div>
      </div>
    </>
  );
}
