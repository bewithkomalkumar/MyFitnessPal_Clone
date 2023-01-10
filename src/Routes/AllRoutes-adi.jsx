import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "../components/Login";
import MyHome from "../components/MY_Home/MyHome";
import Profile from "../components/MY_Home/Profile";
import Signup2 from "../components/signup/Signup2_WeightGoal";
import HomePage from "../Home/Home";
import Navbar2 from "../Home/afternavbar";
import PrivateRoutes from "./PrivateRoutes";
import BeforeNavbar from "../Home/BeforeNavbar";
import Signup1 from "../components/signup/Signup_Introduction";
import Signup3 from "../components/signup/Signup3_ActivityLevel";
import Signup4 from "../components/signup/Signup4_Basic_Details";
import Signup5 from "../components/signup/Signup5_height_weightForm";
import Signup6 from "../components/signup/Signup6_CreateAccount";
import Signup7 from "../components/signup/Signup7_UsernameForm";
import Signup8 from "../components/signup/Signup8_calorieGoal";
import { Box } from "@chakra-ui/react";
import Footer from "../Home/footer";
import { ChakraProvider } from "@chakra-ui/react";

import AddBreakfastAndMeal from "../Pages/AddBreakfastAndMeal/AddBreakfastAndMeal";
import AddFoodItem from "../Pages/AddFoodItem/AddFoodItem";


import AppsPagesRouting from "../components/AppsPage/AppsPagesRouting"
import Apps from "../components/AppsPage/Apps";
import AppsDetail from '../components/AppsPage/AppsDetail';

import PremiumRoute from "../components/premium/PremiumRoute"
import Payment from "../components/premium/Payment";
const AllRoutes = () => {
  const [login, setlogin] = useState(false);
  const navigate = useNavigate();
  const userID = localStorage.getItem("fitUserID");
  useEffect(() => {
    if (userID) {
      navigate("/home");
      setlogin(true);
    }
  }, [userID]);
  return (
    <Box w={"100%"}>
      {!login ? <BeforeNavbar /> : <Navbar2 />}
      <ChakraProvider>
      <Routes>
      
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup1" element={<Signup1 />} />
        <Route path="/signup2" element={<Signup2 />} />
        <Route path="/signup3" element={<Signup3 />} />
        <Route path="/signup4" element={<Signup4 />} />
        <Route path="/signup5" element={<Signup5 />} />
        <Route path="/signup6" element={<Signup6 />} />
        <Route path="/signup7" element={<Signup7 />} />
        <Route path="/signup8" element={<Signup8 />} />

        <Route
          path="/home"
          element={
            <PrivateRoutes>
              <MyHome />
            </PrivateRoutes>
          }
        />

        <Route
          path="/home/profile"
          le
          element={
            <PrivateRoutes>
              <Profile />
            </PrivateRoutes>
          }
        />
        <Route path="/food/dairy" element={<AddBreakfastAndMeal />}></Route>
        <Route path="/fooditems/:pramname" element={<AddFoodItem />} />
        <Route path="/premium" element={<PremiumRoute/>}></Route>
        <Route path="/subscribe" element={<Payment/>}></Route>
        
      </Routes>
      </ChakraProvider>
      <Routes>
      <Route path='/apps/page/:id' element={<Apps />} />
      <Route path='/apps/:id' element={<AppsDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default AllRoutes;
