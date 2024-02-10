import { Box, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";

const PetAnimalGallery = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={9}>
        cskdcmasx
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
