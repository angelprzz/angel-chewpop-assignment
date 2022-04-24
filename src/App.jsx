import React, { useState, useRef } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";

import logo from "./assets/popchew-logo.png";
import "./index.css";

function App() {
  const [open, setOpen] = useState(false);
  const focusRef = useRef();
  const sheetRef = useRef();

  return (
    <main className="app-main">
      <img className="logo" src={logo} alt="Popchew Logo" />
      <p className="h1">Welcome back, Rushir!</p>
      <BottomSheet
        open
        skipInitialTransition
        ref={sheetRef}
        initialFocusRef={focusRef}
        defaultSnap={({ maxHeight }) => maxHeight / 15}
        snapPoints={({ maxHeight }) => [maxHeight / 15, maxHeight * 0.7]}
      >
        <p className="h2">Menu</p>
      </BottomSheet>
    </main>
  );
}

export default App;
