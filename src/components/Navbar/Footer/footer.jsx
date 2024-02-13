import React from "react";
import Grid from '@mui/material/Grid';
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
    <Grid  Container sx={{ background: theme.palette.primary.main ,color: "#FFFFFF"}}>
      <Grid item xs={12} sm={6} md={3} paddingTop={2}>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            margin: "2rem",
            color: "#FFFFFF",
            margin: "0 1rem ",
          }}
        >
          <Grid  item xs={12} sm={6} md={3} >
            <Typography varient="h3">Customer Service</Typography>

            <p>Track Order</p>
            <p>Returns and Exchange</p>
            <p>Shipping Info</p>
            <p>Find Stores</p>
            <p>Contact Us</p>
            <p>FAQ's </p>
          </Grid>

          <Grid item xs={12} sm={6} md={3} >
            <Typography varient="h3"> Service</Typography>

            <p>Training</p>
            <p>Consultation</p>
            <p>Buy-Sell</p>
            <p>Grooming</p>
          </Grid>
          <Grid item xs={12} sm={6} md={3} >
            <Typography varient="h3"> Corporate</Typography>

            <p>Careers</p>
            <p>About Us</p>
            <p>Blogs</p>
          </Grid>
          <Grid item xs={12} sm={6} md={3} > 
            <Typography varient="h3"> Contact</Typography>
            <p>+977 9871253656</p>
            <p>Tel: 01-2359440</p>
            <p>Email: abc@gmail.com</p>
          </Grid>
          <Grid item xs={12} sm={6} md={3} > 
          <Typography varient="h3"> Address</Typography>
            <p>Patan Dhoka, Lalitpur</p>
          </Grid>
        </Grid>
        <hr></hr>

        <Grid item xs={12} sm={6} md={3} 
          sx={{
            display: "flex",
            flexWrap:"wrap",
            justifyContent: "space-between",
            margin:"1rem"
          }}
        >
          <Grid item xs={12} sm={6} md={3} 
            sx={{
              display: "flex",
              gap: "15px",
            }}
          >
              <p>Terms and condition</p>
              <p>Privacy Policy</p>
              <p>Site Map</p>
          
          </Grid>
          <Grid item xs={12} sm={6} md={3} >
            <p>{new Date().getFullYear()} YEJUS PAW. ALL RIGHTS RESERVED</p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Footer;
