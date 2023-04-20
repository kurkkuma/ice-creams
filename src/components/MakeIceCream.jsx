import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

import CarouselElements from "./CarouselElements";

function MakeIceCream() {
  const { cones, scoops, additions, activeStep, setActiveStep } =
    useContext(AppContext);

  const steps = [cones, scoops, scoops, scoops, additions, additions];
  const stepsName = [
    "cone",
    "scoop 1/3",
    "scoop 2/3",
    "scoop 3/3",
    "addition 1/2",
    "addition 2/2",
  ];

  const handlePrevStep = () => {
    setActiveStep(activeStep === 0 ? steps.length - 1 : activeStep - 1);
  };
  const handleNextStep = () => {
    setActiveStep(activeStep === steps.length - 1 ? 0 : activeStep + 1);
  };
  return (
    <div className="makeIceCream">
      <nav className="nav">
        <h3>Creamy Delight</h3>
        <Link to="/basket">
          <button className="btn-basket">
            <img src="./images/icons/basket.png" alt="" />
          </button>
        </Link>
        <Link to="/">
          <button className="btn-home">
            <img src="./images/icons/home.png" alt="" />
          </button>
        </Link>
      </nav>

      <div className="make-wrapper">
        {steps.map((item, index) => {
          if (activeStep === index) {
            return (
              <CarouselElements
                key={index}
                index={index + 1}
                kind={item}
                name={stepsName[index]}
                handlePrevStep={handlePrevStep}
                handleNextStep={handleNextStep}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default MakeIceCream;
