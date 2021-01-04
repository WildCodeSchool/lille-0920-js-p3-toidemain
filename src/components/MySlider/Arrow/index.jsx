import React from "react";
import { ArrowContainer } from "./style";
import leftArrow from "../img/left-arrow.svg";
import rightArrow from "../img/right-arrow.svg";

const Arrow = ({ direction, handleClick }) => (
  <ArrowContainer className="Arrow" onClick={handleClick} direction={direction}>
    {direction === "right" ? (
      <img src={rightArrow} alt="right arrow" />
    ) : (
      <img src={leftArrow} alt="left arrow" />
    )}
  </ArrowContainer>
);

export default Arrow;
