import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";

import "./index.css";
import FoodItem from "./components/FoodItem/FoodItem";
import Banner from "./components/Banner/Banner";
import Button from "./components/Button/Button";
import DashedLine from "./components/DashedLine/DashedLine";
import Logo from "./components/Logo/Logo";
import SliderContent from "./components/SliderContainer/SliderContainer";
import ButtonRow from "./components/ButtonRow/ButtonRow";

function App() {
  const [userName, setUserName] = useState("");

  const [foodName, setFoodName] = useState("");
  const [foodDescription, setFoodDescription] = useState("");

  const [dessertVariery, setDessertVariety] = useState("");
  const [dessertFlavor, setDessertFlavor] = useState("");

  const [beerName, setBeerName] = useState("");
  const [beerStyle, setBeerStyle] = useState("");

  const [section, setSection] = useState(1);

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

  const renderSection = () => {
    switch (section) {
      case 1:
        return <FoodItem title={foodName} description={foodDescription} />;
        break;
      case 2:
        return <FoodItem title={dessertVariery} description={dessertFlavor} />;
        break;
      case 3:
        return <FoodItem title={beerName} description={beerStyle} />;
        break;
    }
  };

  return (
    <main className="app-main">
      <Logo />
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
        <SliderContent>
          <p className="h2">Menu</p>
          <p className="h3" style={{ marginTop: "1rem" }}>
            Delicous Treats
          </p>
          <ButtonRow>
            <Button
              icon="🍔"
              text="Food"
              onClick={() => setSection(1)}
              color={section != 1 && "transparent"}
            />
            <Button
              icon="🧁"
              text="Dessert"
              onClick={() => setSection(2)}
              color={section != 2 && "transparent"}
            />
            <Button
              icon="🍺"
              text="Beer"
              onClick={() => setSection(3)}
              color={section != 3 && "transparent"}
            />
          </ButtonRow>
          <div>
            {foodName != "" && foodDescription != "" ? (
              (() => {
                let items = [];
                for (let i = 1; i <= 4; i++) {
                  items.push(renderSection());
                }
                return items;
              })()
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <DashedLine />
          <Banner
            icon="✉️"
            primaryText="Have a request?"
            secondaryText="Email us suggestions!"
            email="russell@popchew.com"
          />
        </SliderContent>
      </BottomSheet>
    </main>
  );
}

export default App;
