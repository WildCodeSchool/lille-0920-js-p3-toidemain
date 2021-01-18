import React from "react";
import MenuButton from "../../components/HomeButton";
import Slider from "../../components/MySlider/Slider";
import images from "../../components/MySlider/img/images";
import { HomeContainer } from "./style";
import Quote from "../../components/MyQuote/index";
import KeyFacts from "../../components/KeyFacts/index";
import Title from "../../components/Title/index"

const Home = () => {
  return (
    <div>
      <Title titleName={"my name"}/>
      <HomeContainer>
        <Slider slides={images} autoPlay={50} />
        <MenuButton />
      </HomeContainer>
      <Quote />
      <KeyFacts />
    </div>
  );
};

export default Home;
