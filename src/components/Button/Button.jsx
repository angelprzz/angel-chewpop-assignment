import React from "react";
import classes from "./Button.module.css";

export default function Button({ icon, text }) {
  return (
    <div className={classes.Button}>
      <div className={classes.Icon}>{icon}</div>
      <div className={classes.Text}>{text}</div>
    </div>
  );
}
