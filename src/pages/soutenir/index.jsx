import React from "react";
import Title from "../../components/Title/index";
import { SoutenirContainer, Container1, Container2, Container3, Container4, Don, SoutenirBox, DonTitle, Contact, TitleBox, Text } from "./style";

const Soutenir = () => {
  return (
    <>
      <SoutenirContainer>
        <Title titleName="Nous soutenir" />
        <SoutenirBox>
          <Container1>
            <TitleBox>Vous êtes une fondation ? un fond de dotation ?</TitleBox>
            <Text>
              Vous pouvez nous faire un don pour financer un programme de 4
              matinées pour d'accompagnement les jeunes issus des quartiers
              prioritaires des Hauts de France. Exemple de contenu du programme:
              Travail sur la découverte des métiers et des talents. Nous
              travaillons en collaboration avec le tissu associatif de la
              région.
            </Text>
          </Container1>
          <Container2>
            <TitleBox>
              Vous êtes une petite entreprise et vous voulez vous investir
              auprès des jeunes ?
            </TitleBox>
            <Text>
              Vous pouvez nous faire don de votre taxe d'apprentissage pour
              co-financer un programme de 4 matinées pour d'accompagnement les
              jeunes issus des quartiers prioritaires. Exemple de contenu du
              programme: Travail sur la découverte des métiers et des talents.
              Nous travaillons en collaboration avec les associations de la
              région. Vous pouvez aussi faire intervenir vos collaborateurs dans
              ce projet : nous avons besoin de vous!
            </Text>
          </Container2>
          <Container3>
            <TitleBox>Vous êtes une entreprise de plus de 300 collaborateurs?</TitleBox>
            <Text>
              Vous pouvez accueillir le programme "stage up" permettre aux
              enfants de vos collaborateurs d'accèder à un stage de qualité dans
              votre entreprise ou dans l'entreprise de l'un de nos partenaires.
              Ce programme est finançable à 100% via la taxe d'apprentissage.
            </Text>
          </Container3>
          <Container4>
              <TitleBox>Vous êtes un établissement scolaire ?</TitleBox>
              <Text>Donnez la chance à vos élèves de participer au programme stage up!</Text>
              <Contact>Nous contacter</Contact>
          </Container4>
        </SoutenirBox>
        <Don>
            <DonTitle>Pour faire un don</DonTitle>
            <Contact>Nous contacter</Contact>
        </Don>
      </SoutenirContainer>
    </>
  );
};
export default Soutenir;
