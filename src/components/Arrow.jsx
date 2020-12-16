import React from 'react'
import { ArrowContainer } from "./ArrowCSS";
import leftArrow from '../img/left-arrow.svg'
import rightArrow from '../img/right-arrow.svg'

export default function Arrow  ({ direction, handleClick })  {
return (
    <ArrowContainer onClick={handleClick} direction={direction} >
    {direction === 'right' ? <img src={rightArrow} alt="right arrow"/> : <img src={leftArrow} alt="left arrow"/>}
  </ArrowContainer>
  )
}