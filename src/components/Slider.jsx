import React, { useState } from 'react';
import { SliderDiv } from "./SliderCSS";
import SliderContent from './SliderContent';
import Slide from './Slide';
import Arrow from './Arrow';

export default function Slider (props) {
    const getWidth = () => window.innerWidth
    const [state] = useState({
    translate: 0,
    transition: 0.45
    })
    const { translate, transition } = state

  return (
    <SliderDiv>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * props.slides.length}
        >
        {props.slides.map((slide, i) => (
        <Slide key={slide + i} content={slide} />
        ))}
      </SliderContent>
      <Arrow direction="left"/>
      <Arrow direction="right"/>
    </SliderDiv>
  )
}
  




  


  

