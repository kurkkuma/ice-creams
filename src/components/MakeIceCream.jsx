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
    </div>
  );
}

export default MakeIceCream;
