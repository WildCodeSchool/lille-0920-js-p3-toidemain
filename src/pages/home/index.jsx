import React, { useState, useEffect } from "react";
import MenuButton from "../../components/HomeButton";
import Slider from "../../components/MySlider/Slider";
import images from "../../components/MySlider/img/images";
import { HomeContainer, ColonneA } from "./style";
import Quote from "../../components/MyQuote/index";
import KeyFacts from "../../components/KeyFacts/index";
import Title from "../../components/Title/index";
import EntrepriseText from "../../components/ButtonTextA";
import EnseignantText from "../../components/ButtonTextB";
import LyceenText from "../../components/ButtonTextC";

const Error = () => (
  <p>
    Something went <strong>wrong</strong>!
  </p>
);

const Home = () => {
  const [activeId, setActiveId ] = useState("entreprise")
  
  useEffect(() => {
      getTabContent(activeId)
    });
  
  const handleChangeTab = (event) => {
    const buttonId= event.target.id;
    setActiveId({activeId: buttonId})
    console.log(activeId)
    }

    const getTabContent = () => {
      switch (activeId) {
        case "entreprise":
          return <EntrepriseText />;
        case "enseignant" :
          return <EnseignantText />;
        case "lyceen" :
          return <LyceenText />;
        default :
        return <Error />
      }
    }

  return (
    <div>
      <Title titleName={"Accompagner les jeunes et réveler leurs talents"} />
      <HomeContainer>
        <ColonneA>
        {getTabContent()} 
        </ColonneA>
        <Slider slides={images} autoPlay={50} />
        <MenuButton activeId={activeId} handleChangeTab={handleChangeTab} />
      </HomeContainer>
      <Quote />
      <KeyFacts />
    </div>
  );
};

export default Home;
