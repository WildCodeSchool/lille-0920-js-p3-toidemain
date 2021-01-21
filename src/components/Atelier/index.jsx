import promiseItems from "./Data";
import List from "./promiseList";
import React from "react";
import {
  Container,
  Image,
  TextContainer,
  MainTitle,
  Paragraph,
  PromisesContainer,
  SpanA,
  SpanB,
} from "./style";
import { Link } from "react-router-dom";

export default function Atelier() {
  return (
    <Container>
      <Image src="/images/atelierbis.jpg" alt="atelier" />
      <TextContainer>
        <MainTitle>
          <SpanA>Toi Demain </SpanA>propose et organise des ateliers à
          destination des élèves afin de les accompagner dans leurs démarches
          professionnelles
        </MainTitle>
        <Paragraph>
          Vous êtes une association ? un établissement scolaire ? une fondation?
          une entreprise ? une collectivité ? Toi demain propose et organise des
          <SpanB>&nbsp;ateliers sur mesures </SpanB>pour accompagner les jeunes
          dans leur orientation professionnelle et leur permettre de révéler
          leurs talents ! fort de notre expérience avec le public des jeunes de
          <SpanB>&nbsp;15 à 25 ans de tous horizons,&nbsp;</SpanB>
          nous nous adaptons à leurs besoins. Nos coachs de terrain aiment
          innover et co-créer de nouveaux programmes pour faire grandir les
          jeunes en accord avec &nbsp;
          <Link to="/action/pedagogie">notre pédagogie.</Link>&nbsp; Ils
          interviennent régulièrement dans des grandes écoles , des universités,
          dans des établissements scolaires et dans des associations. Nos mots
          clés : <SpanB>apprendre en s'amusant! </SpanB>
        </Paragraph>
      </TextContainer>
      <PromisesContainer>
        {promiseItems.map(({ index, name, logo }) => {
          return <List key={index} name={name} logo={logo} />;
        })}
      </PromisesContainer>
    </Container>
  );
}
