import { Box } from "@mui/material";
import React from "react";
import Carroussel from "./Carroussel/Carroussel";
import CarrousselCardUI from "./Carroussel/CarrousselCardUI";
import BackgroundImage from "../../../assets/BackImage.png"


const LIST = [{ id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }];


const Testimonials = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "500px",
        backgroundColor: "rgb(253, 247, 222)",
        overflow: "hidden",
        display:'flex',
        alignItems:'center'
      }}
    >
      <Carroussel
        cards={LIST.map((dataMap, index) => ({
          key: index + 1,
          content: <CarrousselCardUI />,
        }))}
        height="400px"
        width="100%"
        margin="0 0"
        offset={10}
        showArrows={false}
      />
    </Box>
  );
};

export default Testimonials;
