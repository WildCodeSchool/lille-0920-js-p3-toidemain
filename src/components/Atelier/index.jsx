import promiseItems from './Data';
import List from './promiseList';
import React from 'react';
import { Container, Image, TextContainer, Paragraph, PromisesContainer, SpanB, Path, HeaderContainer } from './style';
import Title from '../../components/Title/index';
import AtelierText from '../AtelierText';

export default function Atelier() {
  return (
    <>
      <Title titleName="Nos Ateliers"></Title>
      <HeaderContainer>
        <AtelierText />
        <Image src="/images/Atelier.jpg" alt="atelier" />
      </HeaderContainer>
      <Container>
        <TextContainer>
          <Paragraph>
            Vous êtes une association ? un établissement scolaire ? une fondation ? une entreprise ? une collectivité ? demain propose et organise des
            <SpanB>&nbsp;ateliers sur mesure </SpanB>pour accompagner les jeunes dans leur orientation professionnelle et leur permettre de révéler leurs talents ! Fort de notre expérience avec le public des jeunes de
            <SpanB>&nbsp;15 à 25 ans de tous horizons,&nbsp;</SpanB>
            nous nous adaptons à leurs besoins. Nos coachs de terrain aiment innover et co-créer de nouveaux programmes pour faire grandir les jeunes en accord avec &nbsp;
            <Path to="/action/pedagogie">notre pédagogie.</Path>&nbsp; Ils interviennent régulièrement dans des grandes écoles et des universités, dans des établissements scolaires et dans des associations. Nos mots clés :&nbsp;
            <SpanB>apprendre en s'amusant ! </SpanB>
          </Paragraph>
        </TextContainer>
        <PromisesContainer>
          {promiseItems.map(({ index, name, logo }) => {
            return <List key={name} name={name} logo={logo} />;
          })}
        </PromisesContainer>
      </Container>
    </>
  );
}
