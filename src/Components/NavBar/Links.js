import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  link: {
    color: "#fff",
    fontSize: 23,
    textDecoration: "none",
    paddingBottom: 8,
    transition: "all 0.5s",
    "&:hover": {
      color: "#0b0b45",
    },
  },
  underline: {
    borderBottom: "2px solid red",
  },
}));

const Links = ({ linkName, index }) => {
  const classes = useStyles();

  return (
    <div>
      <Link
        activeClass="active"
        className={classes.link}
        smooth='true'
        spy='true'
        to='services'
      >
        {" "}
        {linkName}
      </Link>
    </div>
  );
};

export default Links;
