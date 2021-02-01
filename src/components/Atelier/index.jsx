import promiseItems from "./Data";
import List from "./promiseList";
import React from "react";
import {
  Container,
  Image,
  TextContainer,
  Paragraph,
  PromisesContainer,
  SpanB,
  Path,
  HeaderContainer,
} from "./style";
import Title from "../../components/Title/index";
import AtelierText from "../AtelierText";

export default function Atelier() {
  return (
    <>
      <Title titleName="Nos Ateliers"></Title>
      <HeaderContainer>
        <AtelierText />
        <Image src="/images/atelierbis.jpg" alt="atelier" />
      </HeaderContainer>
      <Container>
        <TextContainer>
          <Paragraph>
            Vous êtes une association ? un établissement scolaire ? une
            fondation ? une entreprise ? une collectivité ? Toi demain conçoit
            des <SpanB>ateliers</SpanB>&nbsp;pour accompagner des jeunes de 15 à
            25 ans, de tous horizons dans leur orientation professionnelle et
            leur permettre de révéler leurs talents ! <br />
            Nos coachs de terrain aiment innover et co-créer de nouveaux
            programmes pour faire grandir les jeunes en accord avec notre
            <Path to="/action/pedagogie">&nbsp;notre pédagogie.</Path>&nbsp; Ils
            interviennent régulièrement dans des grandes écoles et des
            universités, dans des établissements scolaires et dans des
            associations. <br />
            Nos mots clés :&nbsp;
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
