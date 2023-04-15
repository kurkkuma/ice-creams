import { useState, createContext, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./components/Main";
import IceCream from "./components/IceCreams";

import { iceCreams } from "../data-ice-creams";
import { scoops } from "../data-scoops";
import { cones } from "../data-cones";
import { additions } from "../data-additions";

export const AppContext = createContext();

function App() {
  return (
    <AppContext.Provider
      value={{
        iceCreams,
      }}
    >
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
