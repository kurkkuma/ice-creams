import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

import IceCreams from "./IceCreams";

function Main() {
  const { iceCreams } = useContext(AppContext);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(activeIndex === 0 ? iceCreams.length - 1 : activeIndex - 1);
  };
  const handleNext = () => {
    setActiveIndex(activeIndex === iceCreams.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <>
      <div className="main">
        <nav className="nav">
          <h3>Creamy Delight</h3>
          <Link to="/make-your-own-ice-cream">
            <button className="btn-make">
              <img
                className="star1"
                src="./images/icons/star-right.png"
                alt=""
              />
              <img
                className="star2"
                src="./images/icons/star-left.png"
                alt=""
              />
              Make own ice cream
            </button>
          </Link>
          <Link to="/basket">
            <button className="btn-basket">
              <img src="./images/icons/basket.png" alt="" />
            </button>
          </Link>
        </nav>
        <div onClick={handlePrev} className="left">
          <img src="../../images/icons/left.png" alt="" />
        </div>
        <div onClick={handleNext} className="right">
          <img className="right" src="../../images/icons/right.png" alt="" />
        </div>
        {iceCreams.map((ice, index) => {
          if (activeIndex === index) {
            return (
              <IceCreams
                key={index}
                id={ice.id}
                name={ice.name}
                description={ice.description}
                weight={ice.weight}
                calories={ice.calories}
                fatContent={ice.fatContent}
                price={ice.price}
                img={ice.img}
              />
            );
          }
        })}

        <div className="dots">
          {iceCreams.map((_, index) => {
            return (
              <span
                onClick={() => setActiveIndex(index)}
                className={`dot ${activeIndex === index ? "active" : ""}`}
                key={index}
              >
                ●
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Main;
