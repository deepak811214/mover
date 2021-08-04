import "./styles.css";
import { useState } from "react";

let i = 0;
let j = 0;
export default function App() {
  const [selected, setSelected] = useState(1);
  const cell = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  const handler = (arg) => {
    if (arg === "up") {
      i = i - 1;
      i = i < 0 ? 0 : i;
    } else if (arg === "down") {
      i = i + 1;
      i = i > 2 ? 2 : i;
    } else if (arg === "left") {
      j = j - 1;
      j = j < 0 ? 0 : j;
    } else if (arg === "right") {
      j = j + 1;
      j = j > 2 ? 2 : j;
    }
    setSelected(cell[i][j]);
  };
  return (
    <div className="App">
      <button onClick={() => handler("up")}>Up</button>
      <button onClick={() => handler("down")}>Down</button>
      <button onClick={() => handler("left")}>left</button>
      <button onClick={() => handler("right")}>right</button>
      {cell.map((row) => {
        return (
          <div className="row" key={row}>
            {row.map((col) => {
              return (
                <div
                  key={col}
                  id={col}
                  className={`col ${selected === col ? "selected" : ""}`}
                ></div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
