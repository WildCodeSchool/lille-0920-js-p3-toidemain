import React, { useState } from 'react';
import MenuButton from '../../components/HomeButton';
import Slider from '../../components/MySlider/Slider';
import images from '../../components/MySlider/img/images';
import { HomeContainer, ColonneA, PageContainer } from './style';
import Quote from '../../components/MyQuote/index';
import KeyFacts from '../../components/KeyFacts/index';
import Title from '../../components/Title/index';
import EntrepriseText from '../../components/ButtonTextA';
import EnseignantText from '../../components/ButtonTextB';
import LyceenText from '../../components/ButtonTextC';
import Drivers from '../../components/Drivers/index';

const Error = () => (
  <p>
    Something went <strong>wrong</strong>!
  </p>
);

const Home = () => {
  const [activeId, setActiveId] = useState('enseignant');

  const handleChangeTab = (e) => {
    const buttonId = e.target.id;
    setActiveId(buttonId);
  };

  const getTabContent = () => {
    switch (activeId) {
      case 'entreprise':
        return <EntrepriseText />;
      case 'enseignant':
        return <EnseignantText />;
      case 'lyceen':
        return <LyceenText />;
      default:
        return <Error />;
    }
  };

  return (
    <PageContainer>
      <Title titleName={'Accompagner les jeunes et réveler leurs talents'} />
      <HomeContainer>
        <ColonneA>{getTabContent()}</ColonneA>
        <Slider slides={images} autoPlay={50} />
        <MenuButton activeId={activeId} handleChangeTab={handleChangeTab} />
      </HomeContainer>
      <Quote />
      <KeyFacts />
      <Drivers />
    </PageContainer>
  );
};

export default Home;
