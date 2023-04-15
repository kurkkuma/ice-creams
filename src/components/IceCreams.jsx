import React, { useContext } from "react";
import { AppContext } from "../App";

function IceCream() {
  const { iceCreams } = useContext(AppContext);
  return <div>{iceCreams[0].name}</div>;
}

export default IceCream;
