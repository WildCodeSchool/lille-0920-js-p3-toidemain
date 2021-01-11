import React from "react";
import driverItems from "./Data";
import { ModalStyle } from "./style";

export default function Modal({ itemNumber }) {
  console.log(itemNumber);

  const item1 = driverItems.map((value) => {
    return value[itemNumber].item1;
  });

  const item2 = driverItems.map((value) => {
    return value[itemNumber].item2;
  });

  const item3 = driverItems.map((value) => {
    return value[itemNumber].item3;
  });

  return (
    <ModalStyle>
      <ul>
        <li>{item1}</li>
        <li>{item2}</li>
        <li>{item3}</li>
      </ul>
    </ModalStyle>
  );
}
