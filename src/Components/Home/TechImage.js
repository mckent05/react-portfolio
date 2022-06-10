import React from 'react'
import { Box } from "@mui/material/core"

const TechImage = ({img}) => {
  return (
    <Box>
        <img src={img} alt='tech-img' />
    </Box>
  )
}

export default TechImage