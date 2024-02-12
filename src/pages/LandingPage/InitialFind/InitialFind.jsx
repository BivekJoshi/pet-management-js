import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import InitialImage from "../../../assets/Image1.png";
import Image2 from "../../../assets/Image2.png";
import BackgroundImage from "../../../assets/BackgroundImage.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ResButton from "../../../components/ResponsiveComponent/ResButton";

const InitialFind = () => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <>
      {!isXsScreen ? (
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
          <Grid
            item
            xs={12}
            md={6}
            sx={{ height: "600px", position: "relative" }}
          >
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
              <Typography variant="h4">
                “A dog is the only thing that can make you smile even on the
                worst of days”
              </Typography>
              <ResButton
                variant="contained"
                endIcon={<ChevronRightIcon />}
                backgroundColor={theme.palette.primary.alt}
                color="white"
                content="See Breeds"
              />
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
            <div
              style={{ width: "490px", height: "438px", position: "absolute" }}
            >
              <img
                src={InitialImage}
                alt="InitialImage"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </Grid>
        </Grid>
      ) : (
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
            height: "260px",
            backgroundColor: "rgb(253, 247, 222)",
          }}
        >
          <Grid item xs={6} sx={{ height: "260px", position: "relative" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "1rem",
                position: "absolute",
                zIndex: 1,
                gap: "0rem",
              }}
            >
              <Typography variant="h6">
                <b>FIND YOUR SMART DOG</b>
              </Typography>
              <Typography variant="h7">
                “A dog is the only thing that can make you smile even on the
                worst of days”
              </Typography>
              <ResButton
                variant="contained"
                endIcon={<ChevronRightIcon />}
                backgroundColor={theme.palette.primary.alt}
                color="white"
                content="See Breeds"
              />
              <div style={{ width: "90px", height: "100px" }}>
                <img
                  src={Image2}
                  alt="Image2"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              height: "60px",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{ width: "140px", height: "130px", position: "absolute" }}
            >
              <img
                src={InitialImage}
                alt="InitialImage"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default InitialFind;
