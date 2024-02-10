import { TabContext, TabPanel } from "@mui/lab";
import { Box, Grid, Tab, Tabs, Typography, useTheme } from "@mui/material";
import React from "react";
import { useState } from "react";
import PetAnimalGallery from "./PetAnimalGallery/PetAnimalGallery";

const Gallery = () => {
  const theme = useTheme();
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    window.scrollTo(0, 0);
  };
  return (
    <div
      style={{
        margin: "0 3rem",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        // flexDirection:'column'
        // height: "100vh", // Adjust as needed
      }}
    >
      <TabContext value={value}>
        <div
          style={{
            backgroundColor: theme?.palette?.primary.backgroundCard,
            marginBottom: "16px",
          }}
        >
          <Tabs value={value} onChange={handleChange} indicatorColor="none">
            <Tab
              label={<Typography variant="h7">Breeds</Typography>}
              value="1"
              // style={value === "1" ? activeLabelStyle : labelStyle}
            />
            <Tab
              label={<Typography variant="h7">Dog Food</Typography>}
              value="2"
              // style={value === "1" ? activeLabelStyle : labelStyle}
            />
          </Tabs>
        </div>

        <TabPanel sx={{ p: 0 }} value="1">
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: ".5rem",
              padding: "1rem",
              height: "100%",
              boxShadow: "0px 4px 10px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <PetAnimalGallery />
          </Box>
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value="2">
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: ".5rem",
              padding: "1rem",
              height: "100%",
              boxShadow: "0px 4px 10px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            cscsdcsdcsdcsdc
          </Box>
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default Gallery;
