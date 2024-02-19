import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import customerImage from "../../../../assets/customer.jpg";

const CarrousselCardUI = ({}) => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Card>
      <Box
        sx={{
          backgroundImage: `url(${customerImage})`,
          backgroundSize: "cover",
          padding: "0",
          position: "relative",
          [theme.breakpoints.up("sm")]: {
            width: "5rem",
            height: "6rem",
          },
          [theme.breakpoints.up("md")]: {
            width: "20rem",
            height: "10rem",
          },
          [theme.breakpoints.up("lg")]: {
            width: "20rem",
            height: "10rem",
          },
        }}
      ></Box>

      <CardContent>
        {!isXsScreen ? (
          <Typography variant="h4" sx={{ fontWeight: "550" }}>
            Happy Customer
          </Typography>
        ) : (
          <Typography variant="h6" sx={{ fontWeight: "550" }}>
            Happy Customer
          </Typography>
        )}
        {!isXsScreen ? (
          <Typography variant="h6">
            Happy Customer
            <br />
            Happy Customer
            <br />
            Happy Customer
          </Typography>
        ) : (
          <Typography variant="h7">
            Happy Customer
            <br />
            Happy Customer
            <br />
            Happy Customer
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default CarrousselCardUI;
