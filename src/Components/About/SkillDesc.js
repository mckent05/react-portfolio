import React from 'react'
import { Grid, Box, Typography } from '@mui/material'

const SkillDesc = ({skillDesc}) => {
  return (
    <Box>
        <Typography>{skillDesc}</Typography>
    </Box>
  )
}

export default SkillDesc