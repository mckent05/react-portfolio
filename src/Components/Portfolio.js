import React from 'react'
import { Grid, Box } from "@mui/material"
import { useTheme, useMediaQuery } from "@mui/material";
import { makeStyles } from '@mui/styles'
import NavBar from "./NavBar/NavBar";
import DrawerComponent from "./NavBar/MobileNav/DrawerComponent";
import backg from "../Images/backgroundimg.jpg"
import Home from "./Home/Home"

const useStyles = makeStyles(() => ({
  root: {
    Width: '100vw',
    height: '100vh',
    backgroundImage: `url(${backg}) `,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "cover/center",
    backgroundSize: "cover",
  }, 
  cont: {
    width: '100%',
  }

}))


const Portfolio = () => {
  const classes = useStyles()
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container className={classes.root}>
        <Box className={classes.cont} >
          {isMobile ? <DrawerComponent /> : <NavBar />}
          <Home />
        </Box>
        

    </Grid>
  )
}

export default Portfolio