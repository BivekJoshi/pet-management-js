import React from "react";
import DogGroupImg from "../../../assets/Service.png";
import Image3 from "../../../assets/Image3.png";

import {
  Box,
  Button,
  Grid,
  MobileStepper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Diversity1Rounded } from "@mui/icons-material";
import { useState } from "react";
import { useEffect } from "react";

const images = [
  {
    label: "DogGroupImg",
    imgPath: DogGroupImg,
  },
  {
    label: "Image3",
    imgPath: Image3,
  },
];

const Servicelist = ({ id, title, desc, theme }) => {
  const isXsScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ padding: "1rem 6rem" }}
    >
      <Grid item xs={12} md={1}>
        <Typography
          variant="h1"
          sx={{ fontWeight: 700, color: theme?.palette?.primary?.main }}
        >
          {id}
        </Typography>
      </Grid>
      <Grid item xs={12} md={11}>
        <Box style={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h3">
            <b>{title}</b>
          </Typography>
          <Typography variant="h6">{desc}</Typography>
          <div style={{ marginTop: "2rem" }}>
            <Button
              variant="contained"
              endIcon={<ChevronRightIcon />}
              sx={{ color: "#ffff" }}
            >
              <b>Explore Now</b>
            </Button>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
};

const Service = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [activeStep]);

  return (
    <div style={{ margin: "2rem 3rem" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <Typography variant="h2">
          <b>Our</b>
        </Typography>{" "}
        <Typography variant="h2" sx={{ color: theme?.palette?.primary?.main }}>
          <b>Services</b>
        </Typography>
      </div>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        textAlign="justify"
      >
        <Grid item xs={12} md={4}>
          <Servicelist
            id="1"
            title="Training"
            desc="We believe that every owner and dog should enjoy learning and experiencing new things, so while we ensure your training is professional we make it fun for you and your dog at the same time."
            theme={theme}
          />
          <Servicelist
            id="2"
            title="Consultation"
            desc="Nail trimming is a major part of dog grooming services. A dog’s nails grow and if not cut properly or timely, they can grow wildly and curl. This becomes painful for the dogs and may even pierce the dog’s paws."
            theme={theme}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <div
            style={{ padding: "16px", width: "500px", height:"500px", position: "relative" }}
          >
            {/* <img src={DogGroupImg} style={{ width: "100%", height: "100%" }} /> */}
            <img
              src={images[activeStep].imgPath}
              alt={images[activeStep].label}
              style={{ width: "100%", height: "100%" }}
            />
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              sx={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                backgroundColor: "transparent",
                display: "flex",
                justifyContent: "center",
              }}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <Servicelist
            id="3"
            title="Buy & Sell"
            desc="Depending upon what you are looking for, we have put up a wide range of breeds of puppies for sale. Each breed of puppy is different and so is your needs. We provide a digital footage of the pets for sale before you buy from us"
            theme={theme}
          />
          <Servicelist
            id="4"
            title="Grooming"
            desc="You can put your mind at ease that we are treating your special canine to the quality care they deserve. We will never rush through any groom or treatment so during their time at Retreat Dog Grooming they will receive a friendly, positive, and relaxed experience."
            theme={theme}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Service;
