import React from "react";
import { ModalStyle } from "./style";

export default function Modal({ driverItems }) {
  return (
    <ModalStyle>
      <ul>
        {driverItems.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </ModalStyle>
  );
}
