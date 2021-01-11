import React from "react";
import MenuButton from "../../components/HomeButton";
import Slider from "../../components/MySlider/Slider";
import images from "../../components/MySlider/img/images";
import { HomeContainer } from "./style";

const Home = () => {
  return (
    <HomeContainer>
      <Slider slides={images} autoPlay={50} />
      <MenuButton />
    </HomeContainer>
  );
};

export default Home;
