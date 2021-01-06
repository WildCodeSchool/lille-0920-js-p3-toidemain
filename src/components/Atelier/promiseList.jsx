import React from "react";
import { Promise, Trait } from "./style"

export default function List({ name, logo }) {
  return (
    <Promise>
    <img src ={logo} alt={name} width={"30px"}/>
    <p>{name}</p>
    <Trait></Trait>
    </Promise>
  );
}