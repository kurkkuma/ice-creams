import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { AppContext } from "../App";

function CarouselElements({
  index,
  kind,
  name,
  handlePrevStep,
  handleNextStep,
}) {
  const {
    newIceCream,
    setNewIceCream,
    activeStep,
    setActiveStep,
    deleteElement,
    newTotalPrice,
    setBasket,
    basket,
    setTotalPrice,
  } = useContext(AppContext);
  const [activeElIndex, setActiveElIndex] = useState(0);

  const handleElPrev = () => {
    setActiveElIndex(activeElIndex === 0 ? kind.length - 1 : activeElIndex - 1);
  };
  const handleElNext = () => {
    setActiveElIndex(activeElIndex === kind.length - 1 ? 0 : activeElIndex + 1);
  };
  const handleSelectEl = () => {
    const selectedEl = {
      id: index,
      name: kind[activeElIndex].name,
      price: kind[activeElIndex].price,
      img: kind[activeElIndex].img,
    };
    const existingIndex = newIceCream.findIndex(
      (el) => el.id === selectedEl.id
    );

    if (existingIndex !== -1) {
      const updatedIceCream = [...newIceCream];
      updatedIceCream[existingIndex] = selectedEl;
      setNewIceCream(updatedIceCream);
    } else {
      setNewIceCream((prev) => [...prev, selectedEl]);
    }

    if (activeStep < 5) {
      setActiveStep(activeStep + 1);
    }
  };
  const handleComplete = () => {
    const newBasketItem = {
      id: uuidv4(),
      img: "../../images/icons/created-ice-cream.png",
      name: "Ice cream created by you ♡",
      price: newTotalPrice,
      elements: newIceCream.map((item) => item.name),
      scoops: newIceCream.filter((item) => item.id > 1 && item.id < 5),
      additions: newIceCream.filter((item) => item.id >= 5),
    };

    setBasket([...basket, newBasketItem]);
    setTotalPrice((prev) => prev + newBasketItem.price);

    window.location.assign("/basket");
  };

  return (
    <>
      <div className="elements">
        <div onClick={() => handleElPrev()} className="make-prev">
          <img src="../../images/icons/left.png" alt="" />
        </div>
        {kind.map((item, index) => {
          if (index === activeElIndex) {
            return (
              <img
                key={index}
                className="ice-cream-element"
                src={`../.${item.img}`}
                alt=""
              />
            );
          }
        })}
        <div onClick={() => handleElNext()} className="make-next">
          <img className="right" src="../../images/icons/right.png" alt="" />
        </div>
      </div>
      <div className="elements-info">
        <h2>{`Step ${index}/6`}</h2>
        <h3>{`Choose a ${name}`}</h3>
        {kind.map((item, index) => {
          if (activeElIndex === index) {
            return <p key={index}>{`${item.name} | price: ${item.price}$`}</p>;
          }
        })}
        <div className="make-btn">
          <button onClick={handleSelectEl}>Choose</button>
          {name !== "cone" &&
            name !== "addition 2/2" &&
            name !== "scoop 1/3" && (
              <button onClick={handleNextStep}>Skip</button>
            )}
        </div>
        <h3>Toral price: {newTotalPrice.toFixed(2)}$</h3>
        <div className="selected">
          {newIceCream.map((item, index) => {
            return (
              <div key={index}>
                <img src={`../.${item.img}`} alt="" />
                <p>{`${item.name} | ${item.price}$`}</p>
                {item.id !== 1 && item.id !== 2 && (
                  <img
                    onClick={() => deleteElement(item.id)}
                    className="delete-el"
                    src="../images/icons/trash.png"
                    alt=""
                  />
                )}
              </div>
            );
          })}
        </div>
        <div className="make-btn make-btn2">
          <button onClick={handlePrevStep}>Back</button>
          {name !== "cone" && name !== "scoop 1/3" && (
            <button onClick={handleComplete}>Complete</button>
          )}
        </div>
      </div>
    </>
  );
}
export default CarouselElements;
