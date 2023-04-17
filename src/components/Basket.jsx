import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

function Basket() {
  const {
    basket,
    totalPrice,
    deleteFromBasket,
    toBuy,
    showSuccess,
    showError,
  } = useContext(AppContext);

  return (
    <div className="basket">
      <nav className="nav">
        <h3>Creamy Delight</h3>
        <button className="btn-make">
          <img className="star1" src="./images/icons/star-right.png" alt="" />
          <img className="star2" src="./images/icons/star-left.png" alt="" />
          Make own ice cream
        </button>
        <Link to="/">
          <button className="btn-home">
            <img src="./images/icons/home.png" alt="" />
          </button>
        </Link>
      </nav>
      <h2>Your order</h2>
      <p>Click on order for details</p>
      <table>
        <thead>
          <tr className="tr-head">
            <th className="th-number">№</th>
            <th className="th-name">Name</th>
            <th className="th-price">Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {basket.map((item, index) => {
            return (
              <tr
                key={index}
                className={`tr-body ${(index + 1) % 2 === 0 ? "even" : "odd"}`}
              >
                <td className="td-number">{index + 1}</td>
                <td className="td-name">
                  <img src={`../.${item.img}`} alt="" />
                  {item.name}
                </td>
                <td className="td-price">{item.price}$</td>
                <td className="td-trash">
                  <img
                    onClick={() => deleteFromBasket(item.id)}
                    src="../images/icons/trash.png"
                    alt="trash-icon"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="end">
        <h2>Your total price: {Number(totalPrice.toFixed(2))}$</h2>
        <button onClick={toBuy} className="btn-buy">
          Buy
        </button>
        {showSuccess && (
          <p>Thank you for your order, we will contact you within 5 minutes!</p>
        )}
        {showError && <p>There is nothing in your order yet</p>}
      </div>
    </div>
  );
}

export default Basket;
