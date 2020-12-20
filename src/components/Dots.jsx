import React from 'react'
import { DotSpan, DotsDiv} from './DotsCSS'

const Dot = ({ active }) => (
    <DotSpan active={active}/>

)

const Dots = ({ slides, activeIndex }) => (
        <DotsDiv>
            {slides.map((slide, i) => (
            <Dot key={slide} active={activeIndex === i} />
            ))}
        </DotsDiv>
    )

export default Dots