import React from 'react'
import styled from "styled-components";

const DotSpan = styled.span`
    padding: 10px;
    margin-right: 5px;
    cursor: pointer;
    border-radius: 50%;
    background: ${props => props.active ? 'black' : 'white'};
    `;

const Dot = ({ active }) => (
  <DotSpan active={active}/>
)

const DotsDiv = styled.div`
    position: absolute;
    bottom: 25px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    `;

const Dots = ({ slides, activeIndex }) => (
  <DotsDiv>
    {slides.map((slide, i) => (
      <Dot key={slide} active={activeIndex === i} />
    ))}
  </DotsDiv>
)

export default Dots