import React from "react";

import classes from "./Logo.module.css";
import logo from "../../assets/popchew-logo.png";

export default function Logo() {
  return <img className={classes.Logo} src={logo} alt="Popchew Logo" />;
}
