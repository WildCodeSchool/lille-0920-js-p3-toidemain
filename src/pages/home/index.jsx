import React from "react";
import MenuButton from "../../components/HomeButton";
import Slider from "../../components/MySlider/Slider";
import images from "../../components/MySlider/img/images";
import { HomeContainer, ColonneA } from "./style";
import Quote from "../../components/MyQuote/index";
import EntrepriseText from "../../components/ButtonTextA";
import Button from "../../components/InfoButton";

const Home = () => {
  return (
    <div>
      <HomeContainer>
        <ColonneA>
         <EntrepriseText />
        <Button />
        </ColonneA>
        <Slider slides={images} autoPlay={50} />
        <MenuButton />
      </HomeContainer>
      <Quote />
    </div>
  );
};

export default Home;
