
import Paymentcss from "./Payment.module.css"
import { Box, Button, flexbox, Text } from "@chakra-ui/react";
import React from "react"; 
import { NavLink } from "react-router-dom";

function Payment () {
    function premium(){
    alert("Purchased Successfull")
    }
    return(
        <div>
            <div className={Paymentcss.Pay1}>
                <h2 style={{marginBottom:"20px", textAlign:"left"}}>Payment Information</h2>
               <Box className={Paymentcss.Box1}><input type="text" placeholder="Card Holder's Name" /></Box>
               <Box className={Paymentcss.Box2}><input style={{width:"70%", border:"none",fontSize: "13px"}} type="number" placeholder="Card Number" /><input style={{width:"15%", border:"none",fontSize: "13px"}} type="text" placeholder="MM/YY" /><input style={{width:"15%", border:"none",fontSize: "13px"}} type="number" placeholder="CVV"/></Box>
               <div
               style={{
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center",
                marginBottom:"20px"
               }}><Box><img src="https://www.myfitnesspal.com/_next/static/media/discover-icon.e15ada2e.svg" alt="" />
                         <img src="https://www.myfitnesspal.com/_next/static/media/american-express-icon.c4839217.svg" alt="" />
                         <img src="https://www.myfitnesspal.com/_next/static/media/visa-icon.ad8818bf.svg" alt="" />
                         <img src="https://www.myfitnesspal.com/_next/static/media/master-card-icon.7be2b0c2.svg" alt="" /></Box>
                    <Box style={{color:"blue", border:"2px solid blue", borderRadius:"5px", padding:"5px"}}>Powerd by stripe</Box>
               </div>
               <div style={{
                display:"flex",
                justifyContent:"space-between",
                marginBottom:"20px"
               }}><Box style={{ backgroundColor:"#36c682",padding:"3px",borderRadius:"5px",fontWeight:"700",color:"white" }}>1 Month Free of Premium</Box>
               <Text style={{textDecoration:"Line-Through"}}>Rs 3.100,00</Text></div>
               <div style={{
                display:"flex",
                justifyContent:"space-between",
                marginBottom:"20px"
               }}>
                <h2>Due Today</h2>
                <h2>Rs 0,00</h2>
               </div>
               <p>This is a 1-month promotional offer. You will be charged रू ३,१००.०० per year starting February 10, 2023. You may cancel at any time in the Settings menu.</p>
            </div>
            <ul style={{textAlign:"center", listStyleType: 'inside', width:"35%", margin:"auto",textAlign:"left", fontSize:"13px", marginTop:"20px"}}>
                <li>By continuing to use MyFitnessPal, I acknowledge and agree to the updated MyFitnessPal Terms and Conditions of Use and Privacy Policy.</li>
                <li>If I do not cancel my subscription during the free trial or promotional period, I will be billed the regular subscription rate (as indicated above) immediately upon the end of my free trial or promotional period.</li>
                <li>My subscription will automatically renew for the same duration and cost (subject to change) until I cancel it.</li>
            </ul>
            <NavLink className={Paymentcss.sonu} to="/home"><button onClick={premium} className={Paymentcss.btn}>START ENOYING PREMIUM  ></button></NavLink>
            
        </div>
    )
}

export default Payment;