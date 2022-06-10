import React, { useState } from "react";
import { Grid } from "@mui/material"
import Links from "./Link";

const NavBar = () => {
  const [links] = useState(["Home", "About", "Projects", "Skills", "Contact"]);

  return (
    <Grid container>
      {links.map((el) => (
        <Links linkName={el} key={el} />
      ))}
    </Grid>
  );
};

export default NavBar;
