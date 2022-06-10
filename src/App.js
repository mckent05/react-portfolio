import React from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import NavBar from "./Components/NavBar/NavBar";
import DrawerComponent from "./Components/NavBar/MobileNav/DrawerComponent";
import Portfolio from "./Components/Portfolio";

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div className="App">
      {isMobile ? <DrawerComponent /> : <NavBar />}
      <Portfolio />
    </div>
  );
}

export default App;
