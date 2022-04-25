import React from "react";
import classes from "./ButtonRow.module.css";

export default function ButtonRow({ children }) {
  return <div className={classes.ButtonRow}>{children}</div>;
}
