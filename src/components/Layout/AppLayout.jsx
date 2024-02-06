import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const AppLayout = () => {
  return (
    <div>
      <div style={{ position: "fixed", zIndex: 100, width: "100%", top: 0 }}>
        <Navbar />
      </div>
      <div style={{ position: "relative", marginTop: "64px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
