import React from "react";
import classes from "./Button.module.css";

export default function Button({ icon, text, onClick, color }) {
  return (
    <a
      className={classes.Button}
      onClick={onClick}
      style={{ "background-color": color }}
    >
      <div className={classes.Icon}>{icon}</div>
      <div className={classes.Text}>{text}</div>
    </a>
  );
}
