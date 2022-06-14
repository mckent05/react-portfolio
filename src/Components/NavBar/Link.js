import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  link: {
    color: "#fff",
    fontSize: 23,
    textDecoration: "none",
    transition: "all 0.5s",
    "&:hover": {
      color: "#0b0b45",
    },
  },
  underline: {
    borderBottom: "2px solid red",
  },
}));

const Link = ({ linkName }) => {
  const classes = useStyles();
  return (
    <div>
      <NavLink
        exact
        activeClassName={classes.underline}
        className={classes.link}
        to={`#${linkName}`}
      >
        {" "}
        {linkName}
      </NavLink>
    </div>
  );
};

export default Link;
