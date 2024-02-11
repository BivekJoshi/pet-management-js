import * as React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import Image from "../../assets/Image3.png";
const PetCard = () => {
  return (
    <Card sx={{ maxWidth: 255 }}>
      <CardMedia
        sx={{ height: "200px", width: "cover" }}
        image={Image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Golden Retiver
        </Typography>
        <Typography variant="body2" color="text.secondary">
          The Golden Retriever is a friendly, intelligent, and devoted dog
          breed.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default PetCard;
