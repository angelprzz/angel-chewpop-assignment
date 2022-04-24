import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";

import "./index.css";
import logo from "./assets/popchew-logo.png";
import FoodItem from "./components/FoodItem/FoodItem";
import Banner from "./components/Banner/Banner";

function App() {
  const [userName, setUserName] = useState("");

  const [foodName, setFoodName] = useState("");
  const [foodDescription, setFoodDescription] = useState("");

  const [dessertVariery, setDessertVariety] = useState("");
  const [dessertFlavor, setDessertFlavor] = useState("");

  const [beerName, setBeerName] = useState("");
  const [beerStyle, setBeerStyle] = useState("");

  const focusRef = useRef();
  const sheetRef = useRef();

  useEffect(() => {
    axios
      .all([
        axios.get("https://reqres.in/api/users/1"),
        axios.get("https://random-data-api.com/api/food/random_food"),
        axios.get("https://random-data-api.com/api/dessert/random_dessert"),
        axios.get("https://random-data-api.com/api/beer/random_beer"),
      ])
      .then(
        axios.spread((name, food, dessert, beer) => {
          setUserName(name.data.data.first_name);

          setFoodName(food.data.dish);
          setFoodDescription(food.data.description);

          setDessertFlavor(dessert.data.flavor);
          setDessertVariety(dessert.data.variety);

          setBeerName(beer.data.name);
          setBeerStyle(beer.data.style);
        })
      )
      .catch((error) => console.log(error));
  }, []);

  const items = [];
  for (let i = 1; i <= 4; i++) {
    items.push();
  }

  return (
    <main className="app-main">
      <img className="logo" src={logo} alt="Popchew Logo" />
      <p className="h1">
        {userName != "" ? `Welcome back, ${userName}!` : "Loading..."}
      </p>
      <BottomSheet
        open
        skipInitialTransition
        ref={sheetRef}
        initialFocusRef={focusRef}
        defaultSnap={({ maxHeight }) => maxHeight / 15}
        snapPoints={({ maxHeight }) => [maxHeight / 15, maxHeight * 0.8]}
      >
        <p style={{ margin: "0 2rem" }}>
          <p className="h2">Menu</p>
          <p className="h3">Delicous Treats</p>
          {foodName != "" && foodDescription != "" ? (
            Array(4).fill(
              <FoodItem title={foodName} description={foodDescription} />
            )
          ) : (
            <p>Loading...</p>
          )}
        </p>
        <div className="dash-line" />
        <Banner
          icon="✉️"
          primaryText="Have a request?"
          secondaryText="Email us suggestions!"
          email="russell@popchew.com"
        />
      </BottomSheet>
    </main>
  );
}

export default App;
