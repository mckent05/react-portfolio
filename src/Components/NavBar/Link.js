import React from 'react'
import { NavLink } from 'react-router-dom'

const Link = ({linkName}) => {
  return (
    <div>
        <NavLink to={`#${linkName}`}> {linkName}</NavLink>
    </div>
  )
}

export default Link