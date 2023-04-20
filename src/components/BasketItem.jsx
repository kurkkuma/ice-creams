import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../App";

function BasketItem({ id, index, name, price, img }) {
  const { basket, deleteFromBasket, cones } = useContext(AppContext);
  const [showDetails, setShowDetails] = useState(false);
  const [elements, setElements] = useState();

  useEffect(() => {
    let elements = [];

    if (basket[index].additions) {
      basket[index].additions.forEach((addition) => {
        elements.push({
          id: addition.id,
          img: addition.img,
          name: addition.name,
          price: addition.price,
        });
      });
    }
    basket[index].scoops.forEach((scoop) => {
      elements.push({
        id: scoop.id,
        img: scoop.img,
        name: scoop.name,
        price: scoop.price,
      });
    });
    basket[index].elements.forEach((element) => {
      cones.forEach((cone) => {
        if (cone.name === element) {
          elements.push({
            id: cone.id,
            img: cone.img,
            name: cone.name,
            price: cone.price,
          });
        }
      });
    });
    setElements(elements);
  }, [basket]);

  return (
    <React.Fragment key={index}>
      <tr
        key={index + 300}
        className={`tr-body ${(index + 1) % 2 === 0 ? "even" : "odd"}`}
      >
        <td className="td-number">{index + 1}</td>
        <td className="td-name" onClick={() => setShowDetails((prev) => !prev)}>
          <img src={`../.${img}`} alt="" />
          {name}
        </td>
        <td className="td-price">{price}$</td>
        <td className="td-trash">
          <img
            onClick={() => deleteFromBasket(id)}
            src="../images/icons/trash.png"
            alt="trash-icon"
          />
        </td>
      </tr>
      {showDetails &&
        elements.map((item, index) => {
          return (
            <tr key={index} className="tr-details">
              <td className="td-details-number">{index + 1}</td>
              <td className="td-details-name">
                <img className="element-img" src={`../.${item.img}`} alt="" />
                {item.name}
              </td>
              <td className="td-details-price">{item.price}$</td>
            </tr>
          );
        })}
    </React.Fragment>
  );
}

export default BasketItem;
