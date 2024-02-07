import React, { useMemo } from "react";
import Service from "./pages/LandingPage/ServicePage/Service";
import { ThemeProvider, createTheme } from "@mui/material";
import { themeSettings } from "./theme/theme";
import InitialFind from "./pages/LandingPage/InitialFind/InitialFind";
import Navbar from "./components/Navbar/Navbar";
import { HashRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Navbar/Footer/footer";

const App = () => {
  const theme = useMemo(() => createTheme(themeSettings()));
  return (
    <ThemeProvider theme={theme}>
      <HashRouter hashType="slash">
        <Routes>
          <Route exact path="*" element={<div>Error page</div>} />
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <InitialFind />
                <Service />
                <Footer />
              </>
            }
          ></Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
