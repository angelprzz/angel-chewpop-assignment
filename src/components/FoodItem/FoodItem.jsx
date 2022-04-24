import React from "react";
import classes from "./FoodItem.module.css";

export default function FoodItem({ title, description }) {
  return (
    <div className={classes.FoodItem}>
      <div className={classes.Title}>{title}</div>
      <div className={classes.Description}>{description}</div>
    </div>
  );
}
