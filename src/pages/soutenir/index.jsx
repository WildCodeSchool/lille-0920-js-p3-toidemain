import React from "react";
import Title from "../../components/Title/index";
import {
  SoutenirContainer,
  Container1,
  Container2,
  Container3,
  Container4,
  Don,
  SoutenirBox,
  DonTitle,
  Contact1,
  Contact,
  TitleBox1,
  TitleBox2,
  TitleBox3,
  TitleBox4,
  Text1, Text2,
  Text3,
  Text4,
  Img
} from "./style";

const Soutenir = () => {
  return (
    <>
      <SoutenirContainer>
        <Title titleName="Nous soutenir" />
        <SoutenirBox>
          <Container1>
            <TitleBox1>Vous êtes une fondation ? un fond de dotation ?</TitleBox1>
            <Text1>
              Vous pouvez nous faire un don pour financer un programme de 4
              matinées pour d'accompagnement les jeunes issus des quartiers
              prioritaires des Hauts de France. Exemple de contenu du programme:
              Travail sur la découverte des métiers et des talents. Nous
              travaillons en collaboration avec le tissu associatif de la
              région.
            </Text1>
          </Container1>
          <Container2>
            <TitleBox2>
              Vous êtes une petite entreprise et vous voulez vous investir
              auprès des jeunes ?
            </TitleBox2>
            <Text2>
              Vous pouvez nous faire don de votre taxe d'apprentissage pour
              co-financer un programme de 4 matinées pour d'accompagnement les
              jeunes issus des quartiers prioritaires. Exemple de contenu du
              programme: Travail sur la découverte des métiers et des talents.
              Nous travaillons en collaboration avec les associations de la
              région. Vous pouvez aussi faire intervenir vos collaborateurs dans
              ce projet : nous avons besoin de vous!
            </Text2>
          </Container2>
          <Container3>
            <TitleBox3>
              Vous êtes une entreprise de plus de 300 collaborateurs?
            </TitleBox3>
            <Text3>
              Vous pouvez accueillir le programme "stage up" permettre aux
              enfants de vos collaborateurs d'accèder à un stage de qualité dans
              votre entreprise ou dans l'entreprise de l'un de nos partenaires.
              Ce programme est finançable à 100% via la taxe d'apprentissage.
            </Text3>
            <Img src="/images/stageUp.png" alt="logo lien Stage Up" />
          </Container3>
          <Container4>
            <TitleBox4>Vous êtes un établissement scolaire ?</TitleBox4>
            <Text4>
              Donnez la chance à vos élèves de participer au programme stage up!
            </Text4>
            <Contact1>Nous contacter</Contact1>
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
