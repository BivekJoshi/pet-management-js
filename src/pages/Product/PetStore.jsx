import React from 'react';
import ProductCard from '../../components/Card/ProductCard';
import { Typography, useTheme } from '@mui/material';


const LIST = [
    {
        id: 1,
        name: "Yeju",
        desc: "cjnsdjcnjsndcnsdc"
    },
    {
        id: 2,
        name: "Yeju",
        desc: "cjnsdjcnjsndcnsdc"
    },
    {
        id: 3,
        name: "Yeju",
        desc: "cjnsdjcnjsndcnsdc"
    },
    {
        id: 4,
        name: "Yeju",
        desc: "cjnsdjcnjsndcnsdc"
    },
    {
        id: 5,
        name: "Yeju",
        desc: "cjnsdjcnjsndcnsdc"
    },
    {
        id: 6,
        name: "Yeju",
        desc: "cjnsdjcnjsndcnsdc"
    },
    {
        id: 7,
        name: "Yeju",
        desc: "cjnsdjcnjsndcnsdc"
    },
];
const PetStore = () => {
    const theme = useTheme();
    return (
        <div style={{ margin: "2rem 100px" }}>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
                <Typography variant="h2">
                    <b>Our</b>
                </Typography>{" "}
                <Typography variant="h2" sx={{ color: theme?.palette?.primary?.main }}>
                    <b>Products</b>
                </Typography>

            </div>

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                <Typography variant="h5" sx={{ margin: "1rem 12rem", textAlign: "center" }}>
                    Give your lovely dogs the taste of the best dog foods! We’ve got all your pet supplies with all your dog food necessities. Still pestering google with the “pet shop near me” search? Come on to our pet store where we ensure only quality dog food for your pet’s development.
                </Typography>
                {LIST.map((data, index) => {
                    return (
                        <ProductCard data={data} key={index} />
                    )
                })}
            </div>
        </div>
    );
}

export default PetStore;
