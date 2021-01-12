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

export default function Atelier() {
  return (
    <Container>
      <Image src={"/images/Atelier.jpg"} alt={"atelier"} />
      <TextContainer>
        <MainTitle>
          <SpanA>Toi Demain </SpanA>propose et organise des ateliers à
          destination des élèves afin de les accompagner dans leurs démarches
          professionnelles
        </MainTitle>
        <Paragraph>
          Afin d'aider les élèves dans leurs recherches d'emploi et de stage,
          l'association toi demain met en place des ateliers d'aide à la
          préparation de candidatures (CV, lettre de motivation, entretien). Les
          élèves ont également la possibilité de participer à des ateliers plus
          spécialisés. Au-delà des compétences développées à cette occasion, ces
          ateliers permettent aux élèves de &nbsp;
          <SpanB>nouer des liens avec les professionnels présents.</SpanB>
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
