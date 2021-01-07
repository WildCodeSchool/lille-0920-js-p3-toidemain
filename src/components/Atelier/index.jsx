import promiseItems from "./Data";
import List from "./promiseList";
import React from "react";
import {
  Container,
  ImageContainer,
  Image,
  TextContainer,
  MainTitle,
  Paragraph,
  PromisesContainer,
} from "./style";

export default function Atelier() {
  return (
    <Container>
      <ImageContainer>
        <Image src={"/images/Atelier.jpg"} alt={"atelier"} max-width={"3600px"} max-height={"2542px"} />
      </ImageContainer>
      <TextContainer>
        <MainTitle>
          Toi Demain propose et organise des ateliers à destination des élèves
          afin de les accompagner dans leurs démarches professionnelles
        </MainTitle>
        <Paragraph>
          Afin d'aider les élèves dans leurs recherches d'emploi et de stage,
          l'association toi demain met en place des ateliers d'aide à la
          préparation de candidatures (CV, lettre de motivation, entretien). Les
          élèves ont également la possibilité de participer à des ateliers plus
          spécialisés. Au-delà des compétences développées à cette occasion, ces
          ateliers permettent aux élèves de nouer des liens avec les
          professionnels présents.
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
