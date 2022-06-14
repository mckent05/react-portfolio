import { ListItem, ListItemText } from "@mui/material"
import React from 'react'
import Links from "../Link"

const MobileLink = ({linkName, control}) => {
  return (
    <ListItem onClick={() => control()}>
        <ListItemText>
            <Links linkName={linkName} />
        </ListItemText>
    </ListItem>
  )
}

export default MobileLink