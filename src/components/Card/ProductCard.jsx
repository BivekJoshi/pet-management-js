import React, { useState } from 'react';
import Image from "../../assets/Image3.png";
import { Box, Divider, Paper, Typography, Button } from '@mui/material';
import { setCartList } from '../../utility/cookieHelper';

const ProductCard = ({ data }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleAddToCart = () => {
        setCartList(data);
    }

    return (
        <Box
            sx={{
                border: "1px solid rgb(219, 219, 219)",
                width: "220px",
                height: "250px",
                borderRadius: "6px",
                margin: ".5rem",
                padding: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                position: "relative",
                "&:hover": {
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                    transform: "translateY(-5px)",
                    backdropFilter: "blur(88px)",
                }
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={{ width: "100%", height: "170px" }}>
                <img src={Image} alt="Image" style={{ width: "100%", height: "100%", borderRadius: "6px" }} />
            </div>
            <Divider />
            <Typography variant='h7' sx={{ fontWeight: "" }}>{data?.name}</Typography>
            <Typography variant='h7' sx={{ display: "flex", gap: "5px" }}>
                <b>Rs.</b>
                120000
                <div style={{ textDecoration: "line-through", color: "grey" }}>Rs. 100000</div>
                <div style={{ color: "red", fontWeight: "bold" }}>(59% OFF)</div>
            </Typography>
            {isHovered && (
                <Button
                    variant="contained"
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: "#FFA500",
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "10px"
                    }}
                    onClick={handleAddToCart}
                >
                    Add to Cart
                </Button>
            )}
        </Box>
    );
}

export default ProductCard;
