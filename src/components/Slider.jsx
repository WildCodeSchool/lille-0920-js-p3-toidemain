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
    const transitionRef = useRef()

    useEffect(() => {
      autoPlayRef.current = nextSlide
      transitionRef.current = smoothTransition
    })
  
    useEffect(() => {
      const play = () => {
        autoPlayRef.current()
      }

      const smooth = () => {
        transitionRef.current()
      }

      let interval = null
      const transitionEnd = window.addEventListener('transitionend', smooth)
  
      if (props.autoPlay) interval = setInterval(play, props.autoPlay * 1000)
    

      return () => {
        window.removeEventListener('transitionend', transitionEnd)
        if(props.autoPlay) {
          clearInterval(interval)
        }
      }
    }, [props.autoPlay])

    const smoothTransition = () => {
      let _slides = []
    
      // We're at the last slide.
      if (activeIndex === slides.length - 1)
        _slides = [slides[slides.length - 2], lastSlide, firstSlide]
      // We're back at the first slide. Just reset to how it was on initial render
      else if (activeIndex === 0) _slides = [lastSlide, firstSlide, secondSlide]
      // Create an array of the previous last slide, and the next two slides that follow it.
      else _slides = slides.slice(activeIndex - 1, activeIndex + 2)
    
      setState({
        ...state,
        _slides,
        transition: 0,
        translate: getWidth()
      })
    }

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

      {!props.autoPlay && (
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

