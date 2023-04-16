import React from "react";

function IceCream({
  name,
  description,
  weight,
  calories,
  fatContent,
  price,
  img,
}) {
  return (
    <div className="wrapper">
      <div className="info">
        <h2 className="name">{name}</h2>
        <p className="description">{description}</p>
        <button className="add-to-basket">
          Add to basket{" "}
          <img
            className="basket-btn"
            src="../../images/icons/basket.png"
            alt=""
          />
        </button>
      </div>
      <img className="ice-cream-img" src={`../.${img}`} alt="" />
      <div className="composition">
        <h3 className="weight">{weight}g</h3>
        <h3 className="calories">{calories}cal</h3>
        <h3 className="fat-content">{fatContent}%</h3>
        <h3 className="price">{price}$</h3>
      </div>
    </div>
  );
}

export default IceCream;
