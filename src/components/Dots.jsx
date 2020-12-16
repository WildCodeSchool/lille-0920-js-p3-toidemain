import React from 'react'
import { DotSpan, DotsDiv } from './Dots';

const Dot = ({ active }) => (
  <DotSpan active={active}/>
)

export default function Dots ({ slides, activeIndex }) {
    return (
        <DotsDiv>
            {slides.map((slide, i) => (
            <Dot key={slide} active={activeIndex === i} />
        ))}
        </DotsDiv>
    )
}