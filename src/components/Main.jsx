import React from "react";

function Main() {
  return (
    <div className="main">
      <nav className="nav">
        <h3>Creamy Delight</h3>
        <button className="btn-make">
          <img className="star1" src="./images/icons/star-right.png" alt="" />
          <img className="star2" src="./images/icons/star-left.png" alt="" />
          Make own ice cream
        </button>

        <button className="btn-basket">
          <img src="./images/icons/basket.png" alt="" />
        </button>
      </nav>
    </div>
  );
}

export default Main;
