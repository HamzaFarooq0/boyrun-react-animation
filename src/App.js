import React from "react";
import "./App.css";

import Highway from "./components/highway";
import Car from "./components/car1";
import City from "./components/city";
import Man from "./components/man1";
import Plane from "./components/plane";

function App() {


  return(
    <div className='hero'>
      <Highway />
      <City />
      <Plane />
      <Car />
      <Man />
    </div>
  );
}

export default App;
