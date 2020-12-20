import * as React from 'react';
import { Reset } from 'styled-reset';
import Slider from './components/MySlider/Slider';
import images from './components/MySlider/img/images'

export default function App() {
  return (
    <React.Fragment>
      <Reset />
      <Slider slides={images} autoPlay={50} />
    </React.Fragment>
  );
}