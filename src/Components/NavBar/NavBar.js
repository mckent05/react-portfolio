import React, { useState } from "react";
import { Grid, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Links from "./Link";

const useStyles = makeStyles(() => ({
  root: {
    Width: "100%",
    height: "10vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  logo: {
    width: "20%",
    display: "flex",
    justifyContent: "flex-start",
  },

  links: {
    width: "70%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [links] = useState(["Home", "About", "Projects", "Skills", "Contact"]);

  return (
    <Grid container className={classes.root}>
      <Box>
        <p>My logo</p>
      </Box>
      <Box className={classes.links}>
        {links.map((el) => (
          <Links
            linkName={el}
            key={el}
          />
        ))}
      </Box>
    </Grid>
  );
};

export default NavBar;
