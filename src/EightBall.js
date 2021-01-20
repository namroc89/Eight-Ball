import React, { useState } from "react";
import "./Eightball.css";
const genRandom = (arr) => {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
};

const EightBall = (props) => {
  const [answer, setAnswer] = useState("Think of a Question");
  const [color, setColor] = useState("black");
  function handleClick() {
    const { msg, color } = genRandom(props.answers);
    setAnswer(msg);
    setColor(color);
  }
  console.log(props.answers[0].color);
  return (
    <div
      className="EightBall"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      <h3 className="EightBall-text">{answer}</h3>
    </div>
  );
};

export default EightBall;
