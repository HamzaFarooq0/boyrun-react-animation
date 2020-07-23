import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";


import road from '../assets/road2.jpg'

const highway = {
  height: "200px",
  width: "5000%",
  display: "block",
  backgroundImage: `url(${road})`,
  position: "absolute",
  bottom: "0",
  left: "0",
  right: "0",
  zIndex: "1",
};

export default function Highway() {

    const { ref } = useWebAnimations({
        keyframes: [
            { transform: 'translate(0,0)' },
            { transform: 'translate(-3400px,0)' },
        ],
        timing: {
            duration: 8000,
            iterations: Infinity
        }
    })

  return <div style={highway} ref={ref}>
      
  </div>;
}
