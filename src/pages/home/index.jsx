import React, { useState } from "react";
import MenuButton from "../../components/HomeButton";
import Slider from "../../components/MySlider/Slider";
import images from "../../components/MySlider/img/images";
import { HomeContainer, ColonneA, PageContainer, H1, Trait } from "./style";
import Quote from "../../components/MyQuote/index";
import KeyFacts from "../../components/KeyFacts/index";
import EntrepriseText from "../../components/ButtonTextA";
import EnseignantText from "../../components/ButtonTextB";
import LyceenText from "../../components/ButtonTextC";
import StageText from "../../components/StageText"

const Home = () => {
  const [activeId, setActiveId] = useState("");

  const handleChangeTab = (e) => {
    const buttonId = e.target.id;
    setActiveId(buttonId);
  };

  const getTabContent = () => {
    switch (activeId) {
      case "entreprise":
        return <EntrepriseText />;
      case "enseignant":
        return <EnseignantText />;
      case "lyceen":
        return <LyceenText />;
      default:
        return <StageText />;
    }
  };

  return (
    <PageContainer>
      <H1>Accompagner les jeunes et réveler leurs talents</H1>
      <Trait></Trait>
      <HomeContainer>
        <ColonneA>{getTabContent()}</ColonneA>
        <Slider slides={images} autoPlay={50} />
        <MenuButton activeId={activeId} handleChangeTab={handleChangeTab} />
      </HomeContainer>
      <Quote />
      <KeyFacts />
    </PageContainer>
  );
};

export default Home;
