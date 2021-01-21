import React from "react";
import { Promise, Trait, PromiseImg } from "./style";

export default function List({ name, logo }) {
  return (
    <Promise>
      <PromiseImg src={logo} alt={name} />
      <p>{name}</p>
      <Trait></Trait>
    </Promise>
  );
}
