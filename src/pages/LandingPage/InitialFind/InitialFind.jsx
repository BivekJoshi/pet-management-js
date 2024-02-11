import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import InitialImage from "../../../assets/Image1.png";
import Image2 from "../../../assets/Image2.png";
import BackgroundImage from "../../../assets/BackgroundImage.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const InitialFind = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "600px",
        backgroundColor: "rgb(253, 247, 222)",
      }}
    >
      <Grid item xs={12} md={6} sx={{ height: "600px", position: "relative" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "10rem",
            position: "absolute",
            zIndex: 1,
            gap: "1rem",
          }}
        >
          <Typography variant="h2">
            <b>FIND YOUR SMART DOG</b>
          </Typography>
          <Typography variant="h4" >
            “A dog is the only thing that can make you smile even on the worst
            of days”
          </Typography>
          <Button
            variant="contained"
            endIcon={<ChevronRightIcon />}
            sx={{
              backgroundColor: theme.palette.primary.alt,
              color: "white",
            }}
          >
            <b>See Breeds</b>
          </Button>
          <img src={Image2} alt="Image2" />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          height: "600px",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "490px", height: "438px", position: "absolute" }}>
          <img
            src={InitialImage}
            alt="InitialImage"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default InitialFind;
