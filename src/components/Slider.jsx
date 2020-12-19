import React, { useState, useEffect, useRef } from 'react';
import { SliderDiv } from "./SliderCSS";
import SliderContent from './SliderContent';
import Slide from './Slide';
import Arrow from './Arrow';
import Dots from './Dots';

const getWidth = () => window.innerWidth

export default function Slider (props) {
  const { slides } = props

  const firstSlide = slides[0]
  const secondSlide = slides[1]
  const lastSlide = slides[slides.length - 1]

    const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
    _slides: [lastSlide, firstSlide, secondSlide]
    })

    const { translate, transition, activeIndex, _slides } = state
    const autoPlayRef = useRef()

    useEffect(() => {
      autoPlayRef.current = nextSlide
    })
  
    useEffect(() => {
      const play = () => {
        autoPlayRef.current()
      }
  
      const interval = setInterval(play, props.autoPlay * 1000)
      return () => clearInterval(interval)
    }, [])

    const nextSlide = () =>
  setState({
    ...state,
    translate: translate + getWidth(),
    activeIndex: activeIndex === slides.length - 1 ? 0 : activeIndex + 1
  })

const prevSlide = () =>
  setState({
    ...state,
    translate: 0,
    activeIndex: activeIndex === 0 ? slides.length - 1 : activeIndex - 1
  })
  
    
    
  return (
    <SliderDiv>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * _slides.length}
        >
        {_slides.map((slide, i) => (
        <Slide key={slide + i} content={slide} />
        ))}
      </SliderContent>

      {props.autoPlay && (
        <>
          <Arrow direction="left" handleClick={prevSlide} />
          <Arrow direction="right" handleClick={nextSlide} />
        </>
      )}

      <Dots slides={props.slides} activeIndex={activeIndex} />
    </SliderDiv>
  )
}

Slider.defaultProps = {
  slides: [],
  autoPlay: null
}

