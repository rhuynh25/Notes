import React, {useState} from 'react';
import './App.css';

//State & props example

import React, { useState } from "react";

const ColorChanger = (props) => {
  // To change color
  const [currentColor, setCurrentColor] = useState(0); // Initializing state variable for current color index

  const changeColor = () => {
    setCurrentColor((prevColor) => (prevColor + 1) % props.colors.length); // Incrementing the current color index in a circular manner
  };
  return (
    <div>
      <button onClick={changeColor}>Change Color here</button>{" "}
      {/* Button triggering the changeColor function */}
      <div
        style={{
          backgroundColor: props.colors[currentColor], // Setting background color based on the current index of colors array
          width: "200px",
          height: "200px",
        }}
      ></div>
    </div>
  );
};
const App = () => {
  const colors = ["red", "green", "blue", "yellow"]; // Array of colors

  return (
    <div>
      <h1>Color Changer example</h1> {/* Heading of the application */}
      <ColorChanger colors={colors} />{" "}
      {/* Rendering the ColorChanger component with colors array passed as props */}
    </div>
  );
};

export default App;