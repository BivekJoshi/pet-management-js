import React from "react";
import InitialFind from "./InitialFind/InitialFind";
import Service from "./ServicePage/Service";
import AboutUs from "./AboutUs/AboutUs";
import PetStore from "../Product/PetStore";

const LandingPage = () => {
  return (
    <>
      <InitialFind />
      <Service />
      <AboutUs />
      <PetStore />
    </>
  );
};

export default LandingPage;
