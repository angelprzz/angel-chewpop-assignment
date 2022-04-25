import React from "react";
import classes from "./SliderContainer.module.css";

export default function SliderContainer({ children }) {
  return (
    <div className={classes.SliderContainer}>
        {children}
    </div>
  );
}
