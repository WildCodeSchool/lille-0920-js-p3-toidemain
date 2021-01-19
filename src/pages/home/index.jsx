import React from "react";
import MenuButton from "../../components/HomeButton";
import Slider from "../../components/MySlider/Slider";
import images from "../../components/MySlider/img/images";
import { HomeContainer, ColonneA } from "./style";
import Quote from "../../components/MyQuote/index";
import KeyFacts from "../../components/KeyFacts/index";
import Title from "../../components/Title/index";
import EntrepriseText from "../../components/ButtonTextA";
import EnseignantText from "../../components/ButtonTextB";


const Home = () => {
  return (
    <div>
      <Title titleName={"Accompagner les jeunes et réveler leurs talents"} />
      <HomeContainer>
        <ColonneA>
         <EnseignantText />
        </ColonneA>
        <Slider slides={images} autoPlay={50} />
        <MenuButton />
      </HomeContainer>
      <Quote />
      <KeyFacts />
    </div>
  );
};

export default Home;
