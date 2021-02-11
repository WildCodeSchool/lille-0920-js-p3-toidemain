import React from "react";
import { Card, Img } from "./GalleryItem.style";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/swiper-bundle.min.css";

import moment from "moment";
import "moment/locale/fr";
moment.locale("fr");

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const GalleryItem = ({
  title,
  text,
  image1,
  image2,
  image3,
  image4,
  date,
  datefin,
}) => {
  return (
    <Card>
      <h2>{title}</h2>
      <h4>
        {moment(date).format("dddd Do MMMM YYYY")} à{" "}
        {moment(datefin).format("dddd Do MMMM YYYY")}
      </h4>
      <p> {text} </p>
      <Img>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {image1 != null && (
            <SwiperSlide>
              <img src={image1} alt="img1" />{" "}
            </SwiperSlide>
          )}
          {image2 != null && (
            <SwiperSlide>
              <img src={image2} alt="img1" />{" "}
            </SwiperSlide>
          )}
          {image3 != null && (
            <SwiperSlide>
              <img src={image3} alt="img1" />{" "}
            </SwiperSlide>
          )}
          {image4 != null && (
            <SwiperSlide>
              <img src={image4} alt="img1" />{" "}
            </SwiperSlide>
          )}
        </Swiper>
      </Img>
    </Card>
  );
};

export default GalleryItem;
