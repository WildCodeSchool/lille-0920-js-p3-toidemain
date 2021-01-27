import React from 'react';
import { Card, Img } from './GalleryItem.style';
import Slider from '../../MySlider/Slider';

const GalleryItem = ({ title, text, images, date }) => {
  return (
    <div>
      <Card>
        <h2>{title}</h2>
        <h4> {date} </h4>
        <p> {text} </p>
        <Img>
          <Slider slides={images} autoPlay={50} />
        </Img>
      </Card>
    </div>
  );
};

export default GalleryItem;
