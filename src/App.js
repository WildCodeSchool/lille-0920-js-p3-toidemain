import * as React from 'react';
import { Reset } from 'styled-reset';
import Slider from './components/Slider';

const images = [
  'https://images.pexels.com/photos/237414/pexels-photo-237414.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  'https://images.pexels.com/photos/1181226/pexels-photo-1181226.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
]

export default function App() {
  return (
    <React.Fragment>
      <Reset />
      <Slider slides={images} autoPlay={50} />
    </React.Fragment>
  );
}