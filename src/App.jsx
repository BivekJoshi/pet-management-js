import React, { useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { themeSettings } from "./theme/theme";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./utility/ScrollToTop";

const App = () => {
  const theme = useMemo(() => createTheme(themeSettings()));
  return (
    <ThemeProvider theme={theme}>
      {/* <ScrollToTop> */}
        <AppRoutes />
      {/* </ScrollToTop> */}
    </ThemeProvider>
  );
};

export default App;
