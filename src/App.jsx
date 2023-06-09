import { useState, createContext, useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Main from "./components/Main";
import Basket from "./components/Basket";
import MakeIceCream from "./components/MakeIceCream";

import { iceCreams } from "../data-ice-creams";
import { scoops } from "../data-scoops";
import { cones } from "../data-cones";
import { additions } from "../data-additions";

export const AppContext = createContext();

function App() {
  const [basket, setBasket] = useState(() => {
    const getBasket = localStorage.getItem("basket");
    return getBasket ? JSON.parse(getBasket) : [];
  });
  const [totalPrice, setTotalPrice] = useState(() => {
    const getTotalPrice = localStorage.getItem("totalPrice");
    return getTotalPrice ? JSON.parse(getTotalPrice) : 0;
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [newIceCream, setNewIceCream] = useState([]);
  const [newTotalPrice, setNewTotalPrice] = useState(0);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
  }, [basket, totalPrice]);
  useEffect(() => {
    setNewTotalPrice(
      newIceCream.reduce((totalPrice, el) => totalPrice + el.price, 0)
    );
  }, [newIceCream]);

  const addToBasket = (id) => {
    let selectedItem = iceCreams.find((item) => item.id === id);
    selectedItem = { ...selectedItem, id: uuidv4() };
    setBasket([...basket, selectedItem]);

    setTotalPrice(totalPrice + selectedItem.price);
  };
  const deleteFromBasket = (id) => {
    const selectedItem = basket.find((item) => item.id === id);
    setBasket(basket.filter((item) => item.id !== id));

    setTotalPrice(totalPrice - selectedItem.price);
  };
  const toBuy = () => {
    if (basket.length > 0) {
      setBasket([]);
      setTotalPrice(0);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 6000);
    } else {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 6000);
    }
  };
  const deleteElement = (id) => {
    const deletedElement = newIceCream.find((item) => item.id == id);
    setNewIceCream(newIceCream.filter((item) => item.id !== id));
    setNewTotalPrice((prev) => prev - deletedElement.price);
  };

  return (
    <AppContext.Provider
      value={{
        iceCreams,
        addToBasket,
        basket,
        totalPrice,
        deleteFromBasket,
        toBuy,
        showSuccess,
        showError,
        cones,
        scoops,
        additions,
        newIceCream,
        setNewIceCream,
        activeStep,
        setActiveStep,
        deleteElement,
        newTotalPrice,
        setNewTotalPrice,
        setBasket,
        setTotalPrice,
      }}
    >
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/make-your-own-ice-cream" element={<MakeIceCream />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
