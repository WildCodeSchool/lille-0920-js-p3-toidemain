import React, { useState, useEffect, useRef } from 'react';
import { SliderDiv } from "./style";
import SliderContent from '../SliderContent';
import Slide from '../Slide';
import Arrow from '../Arrow';
import Dots from '../Dots';

//returns the interior width of the window in pixels
const getWidth = () => window.innerWidth

const Slider = props => {

  // keep slides into an array of 3 slides despite there is thousand pictures
  const { slides } = props
  const firstSlide = slides[0]
  const secondSlide = slides[1]
  const lastSlide = slides[slides.length - 1]

    const [state, setState] = useState({
    activeSlide: 0,
    translate: getWidth(),
    transition: 0.45,
    _slides: [lastSlide, firstSlide, secondSlide]
    })

    const { activeSlide, translate, _slides, transition  } = state

    //useref is like a box can contain a mutable value in is current property
    const autoPlayRef = useRef()
    const transitionRef = useRef()
    const resizeRef = useRef()
    const sliderRef = useRef()

    useEffect(() => {
    autoPlayRef.current = nextSlide
    transitionRef.current = smoothTransition
    resizeRef.current = handleResize
    })
  
    useEffect(() => {
      const slider = sliderRef.current
      const play = () => {
        autoPlayRef.current()
      }

      const smooth = e => {
        if (e.target.className.includes('SliderContent')) {
          transitionRef.current()
        }
      }



    const resize = () => {
      resizeRef.current()
    }

    const transitionEnd = slider.addEventListener('transitionend', smooth)
    const onResize = window.addEventListener('resize', resize)

    let interval = null

    if (props.autoPlay) {
      interval = setInterval(play, props.autoPlay * 1000)
    }

    return () => {
      slider.removeEventListener('transitionend', transitionEnd)
      window.removeEventListener('resize', onResize)

      if (props.autoPlay) {
        clearInterval(interval)
      }
    }
  }, [])

  useEffect(() => {
    if (transition === 0) setState({ ...state, transition: 0.45 })
  }, [transition])

    const handleResize = () => {
      setState({ ...state, translate: getWidth(), transition: 0 })
    }

    const smoothTransition = () => {
      let _slides = []
  
      // We're at the last slide.
      if (activeSlide === slides.length - 1)
        _slides = [slides[slides.length - 2], lastSlide, firstSlide]
      // We're back at the first slide. Just reset to how it was on initial render
      else if (activeSlide === 0) _slides = [lastSlide, firstSlide, secondSlide]
      // Create an array of the previous last slide, and the next two slides that follow it.
      else _slides = slides.slice(activeSlide - 1, activeSlide + 2)
  
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
      activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1
    })

  const prevSlide = () =>
    setState({
      ...state,
      translate: 0,
      activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1
    })
    
  return (
    <SliderDiv className="Slider" ref={sliderRef}>
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

      <Dots slides={props.slides} activeSlide={activeSlide} />
    </SliderDiv>
  )
}

Slider.defaultProps = {
  slides: [],
  autoPlay: null
}


export default Slider

