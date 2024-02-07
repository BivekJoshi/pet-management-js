import React from "react";
import {
  Avatar,
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  return (
    <div style={{ background: theme.palette.primary.main ,color: "#FFFFFF"}}>
      <div style={{ padding: "5px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            margin: "2rem",
            color: "#FFFFFF",
           
            margin: "1rem",
          }}
        >
          <div
            style={{
             
            }}
          >
            <Typography varient="h4">Customer Service</Typography>

            <p>Track Order</p>
            <p>Returns and Exchange</p>
            <p>Shipping Info</p>
            <p>Find Stores</p>
            <p>Contact Us</p>
            <p>FAQ's </p>
          </div>

          <div>
            <Typography varient="h4"> Service</Typography>

            <p>Training</p>
            <p>Consultation</p>
            <p>Buy-Sell</p>
            <p>Grooming</p>
          </div>
          <div>
            <Typography varient="h4"> Corporate</Typography>

            <p>Careers</p>
            <p>About Us</p>
            <p>Blogs</p>
          </div>
          <div>
            <Typography varient="h4"> Contact</Typography>
            <p>+977 9871253656</p>
            <p>Tel: 01-2359440</p>
            <p>Email: abc@gmail.com</p>
          </div>
          <div>
            <h4>Address</h4>
            <p>Patan Dhoka, Lalitpur</p>
          </div>
        </div>
        <hr></hr>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin:"1rem"
          }}
        >
          <div
            style={{
              display: "flex",
              
              gap: "15px",
            }}
          >
        
              <p>Terms and condition</p>
           
              <p>Privacy Policy</p>
           
              <p>Site Map</p>
          
          </div>
          <div>
            <p>{new Date().getFullYear()} YEJUS PAW. ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
