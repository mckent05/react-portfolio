import React from 'react'
import { Box } from "@mui/material"
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  imageCont: {
    width: 80,
    height: 80,
    backgroundColor: '#fff',
    boxShadow: '0 2px 10px grey',
    borderRadius: '100%',
    "&:nth-of-type(1)" : {
      position: 'absolute',
      top: '20%',
      left: '20%'
    },
    "&:nth-of-type(2)": {
      position: 'absolute',
      top: '30%',
      right: "5%"
    },
    "&:nth-of-type(3)": {
      position: 'absolute',
      top: '60%',
      left: '10%'
    },
    "&:nth-of-type(4)": {
      position: 'absolute',
      top: '70%',
      right: '7%'
    }
  },
  img: {
      position: 'relative',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '100%'
  },
}))

const TechImage = ({img}) => {
  const classes = useStyles()
  return (
    <Box className ={classes.imageCont}>
        <img src={img} alt='tech-img' className={classes.img} />
    </Box>
  )
}

export default TechImage