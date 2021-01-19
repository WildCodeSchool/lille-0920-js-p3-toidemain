import React from "react";
import MenuButton from "../../components/HomeButton";
import Slider from "../../components/MySlider/Slider";
import images from "../../components/MySlider/img/images";
import { HomeContainer } from "./style";
import Quote from "../../components/MyQuote/index";


const Home = () => {
  return (
    <div>
      <HomeContainer>
        <Slider slides={images} autoPlay={50} />
        <MenuButton />
      </HomeContainer>
      <Quote />
    </div>
  );
};

export default Home;
