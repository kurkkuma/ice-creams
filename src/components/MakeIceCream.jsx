import React from "react";
import { Link } from "react-router-dom";

function MakeIceCream() {
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
        <div className="elements">
          <div className="make-prev">
            <img src="../../images/icons/left.png" alt="" />
          </div>
          <img
            className="ice-cream-element"
            src="../../images/scoops/Strawberry-Fields.png"
            alt=""
          />
          <div className="make-next">
            <img className="right" src="../../images/icons/right.png" alt="" />
          </div>
        </div>

        <div className="elements-info">
          <h2>Step 1/6</h2>
          <h3>Choose a cone</h3>
          <p>ice cream name 2$</p>
          <div className="make-btn">
            <button>Choose</button>
            <button>Skip</button>
          </div>
          <h3>Toral price: 3$</h3>
          <div className="make-btn make-btn2">
            <button>Back</button>
            <button>Complete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MakeIceCream;
