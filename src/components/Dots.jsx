import React from 'react'
import { DotSpan, DotsDiv} from './DotsCSS'

const Dot = ({ active }) => (
    <DotSpan active={active}/>

)

const Dots = ({ slides, activeSlide }) => (
        <DotsDiv className="Dots">
            {slides.map((slide, i) => (
            <Dot key={slide} active={activeSlide === i} />
            ))}
        </DotsDiv>
    )

export default Dots