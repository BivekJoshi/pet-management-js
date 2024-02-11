import { Box, Grid, List, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import PetCard from "../../../../../components/Card/PetCard";

const LIST = [{ id: 1 }, { id: 2 }, { id: 2 }, { id: 2 }, { id: 2 }, { id: 2 }];
const PetAnimalGallery = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={9}>
        <div style={{ display: "flex", gap: "17px", flexWrap: "wrap" }}>
          {LIST.map((data, index) => {
            return (
              <div key={index}>
                <PetCard />
              </div>
            );
          })}
        </div>
      </Grid>
      <Grid item xs={3}>
        <Paper sx={{ border: "1px dashed orange", padding: "16px" }}>
          <Grid conatainer>
            <Grid item sx={12}>
              <Typography variant="h6">Filter by Breed</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                size="small"
                sx={{ backgroundColor: "rgb(247, 247, 247)" }}
              />
            </Grid>
            <Grid item sx={12}>
              <Typography variant="h6">Filter by Breed</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                size="small"
                sx={{ backgroundColor: "rgb(247, 247, 247)" }}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default PetAnimalGallery;
