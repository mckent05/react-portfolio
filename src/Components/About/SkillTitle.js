import React from 'react'
import { Grid, Box, Typography } from "@mui/material"

const SkillTitle = ({skillName}) => {
  return (
    <Box>
        <Typography> {skillName}</Typography>
    </Box>
  )
}

export default SkillTitle