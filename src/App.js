import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Details from "./pages/Details";
import DogDetails from "./components/DogDetails";
import { Routes, Route } from "react-router-dom";

import './assets/styles.css';
import './assets/item.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />} />
      <Route path="/details" element={<Details />}>
        <Route path=":dogId" element={<DogDetails />} />
      </Route> 
    </Routes>
  );
}

export default App;
