import React from 'react';
import { Card, Img } from './GalleryItem.style';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/swiper-bundle.min.css';

import moment from 'moment';
import 'moment/locale/fr';
moment.locale('fr');

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const GalleryItem = ({ title, text, image1, image2, image3, image4, date }) => {
  return (
    <Card>
      <h2>{title}</h2>
      <h4> {moment(date).format('dddd Do MMMM YYYY')} </h4>
      <p> {text} </p>
      <Img>
        <Swiper spaceBetween={30} slidesPerView={1} navigation pagination={{ clickable: true }} scrollbar={{ draggable: true }} onSwiper={(swiper) => console.log(swiper)} onSlideChange={() => console.log('slide change')}>
          
            <SwiperSlide>
              <img src={image1} alt="slid" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image2} alt="slid" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image3} alt="slid" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image4} alt="slid" />
            </SwiperSlide>
          
        </Swiper>
      </Img>
    </Card>
  );
};

export default GalleryItem;