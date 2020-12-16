import React, { useState } from 'react';
import styled from "styled-components";
import SliderContent from './SliderContent';

const Sliderdiv = styled.div `
    position: relative;
    height: 100vh;
    width: 100vw;
    margin: 0 auto;
    overflow: hidden;
    background: #333;
  `;

const Slider = () => {
    return <Sliderdiv>
        <SliderContent />
    </Sliderdiv>
  }
  
export default Slider