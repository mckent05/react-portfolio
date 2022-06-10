import React from 'react'
import { Box, Typography } from "@material-ui/core"

const Greeting = ({text}) => {
  return (
    <Box>
        <Typography>{text}</Typography>
    </Box>
  )
}

export default Greeting