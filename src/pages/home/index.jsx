import React, { useState } from "react";
import { HomeContainer, ColonneA, PageContainer, H1, Trait } from "./style";
import StageText from "../../components/StageText";
import Slider from "../../components/MySlider/Slider";
import images from "../../components/MySlider/img/images";
import MenuButton from "../../components/HomeButton";
import EntrepriseText from "../../components/ButtonTextA";
import EnseignantText from "../../components/ButtonTextB";
import LyceenText from "../../components/ButtonTextC";
import Quote from "../../components/MyQuote/index";
import KeyFacts from "../../components/KeyFacts/index";

const Home = () => {
  const [activeId, setActiveId] = useState("home");

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
      case "home":
        return <StageText />;
      default:
        return <StageText />;
    }
  };

  return (
    <PageContainer>
      <H1>Accompagner les jeunes et réveler leurs talents</H1>
      <Trait></Trait>
      <HomeContainer>
        {getTabContent()}
        <Slider slides={images} autoPlay={50} />
        <MenuButton activeId={activeId} handleChangeTab={handleChangeTab} />
      </HomeContainer>
      <Quote />
      <KeyFacts />
    </PageContainer>
  );
};

export default Home;
