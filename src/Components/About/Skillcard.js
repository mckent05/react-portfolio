import React from 'react'
import { Grid, Box } from "@mui/material"
import SkillImage from "./SkillImage"
import SkillTitle from "./SkillTitle"
import SkillDesc from "./SkillDesc"

const Skillcard = () => {
  return (
    <Grid container>
        <SkillImage />
        <SkillTitle />
        <SkillDesc />
    </Grid>
  )
}

export default Skillcard