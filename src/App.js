import { useState } from "react";
import "./App.css";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [color, setColor] = useState("gray");
  const [disabled, setDisabled] = useState(false);
  const newColorButton = color === "gray" ? "gray" : "blue";

  const handleClick = () => {
    setColor("blue");
  };

  return (
    <div className="App">
      <button
        onClick={handleClick}
        style={{ backgroundColor: newColorButton }}
        disabled={disabled}
      >
        Change to {newColorButton}
      </button>
      <input
        className="test"
        type="checkbox"
        id="enable-button-checkbox"
        aria-checked={disabled}
        defaultValue={disabled}
        onChange={(e) => {
          setDisabled(e.target.checked);
        }}
      />
      <label htmlFor="enable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
