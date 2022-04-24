import React from "react";
import classes from "./Banner.module.css";
import "../../index.css";

export default function EmailCTA({ icon, primaryText, secondaryText, email }) {
  return (
    <a className={classes.EmailCTA} href={`mailto:${email}`}>
      <div className={classes.Icon}>{icon}</div>
      <div>
        <div className="h3-bold">{primaryText}</div>
        <div className="h3">{secondaryText}</div>
      </div>
    </a>
  );
}
