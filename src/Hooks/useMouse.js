import {useState} from "react";

export function useMouse(container) {
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);
  container.addEventListener('mousemove', (event) => {
    console.log(xPos, yPos);
    console.log(container)
    setXPos(event.clientX);
    setYPos(event.clientY);
  });
  return {x: xPos, y:yPos};
}
