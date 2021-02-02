import React from "react";
import Title from "../../components/Title/index";
import { Link } from "react-router-dom";
import {
  SoutenirContainer,
  Container1,
  Container2,
  Container3,
  Container4,
  SoutenirBox,
  TitleBox1,
  TitleBox2,
  TitleBox3,
  TitleBox4,
  Text1,
  Text2,
  Text3,
  Text4,
  Img,
  BContainer,
  Liste,
  BigLetter,
  Stage,
  Contact,
  Path,
} from "./style";

const Soutenir = () => {
  return (
    <SoutenirContainer>
      <Title titleName="Nous soutenir" />
      <SoutenirBox>
        <Container3>
          <TitleBox3>
            Vous êtes une entreprise de plus de 300 collaborateurs
          </TitleBox3>
          <Text3>
            <ul>
              <Liste>
                Vous pouvez accueillir le programme "stage up" pour permettre
                aux enfants de collaborateurs d'accéder à un stage de qualité
                dans votre entreprise ou dans celle de l'un de nos partenaires.
              </Liste>
              <Liste>
                Aussi, accueillir des jeunes issus des quartiers prioritaires à
                la découverte de votre entreprise.
              </Liste>
              <Liste>
                Ce programme est finançable à 100% via la taxe d'apprentissage.
              </Liste>
              <Liste>
                <Link to="/action/stageup">
                  <Img src="/images/stageUp.png" alt="logo Listeen Stage Up" />
                </Link>
              </Liste>
            </ul>
          </Text3>
        </Container3>
        <Container2>
          <TitleBox2>
            Vous êtes une petite entreprise et vous voulez vous investir auprès
            des jeunes
          </TitleBox2>
          <Text2>
            <ul>
              <Liste>
                Vous pouvez nous faire un don de votre taxe d'apprentissage pour
                co-financer un atelier afin d'accompagner les jeunes issus des
                quartiers prioritaires des Hauts de France.
              </Liste>
              <Liste>
                <BigLetter>Exemples de contenu des ateliers :</BigLetter>
              </Liste>
              <Liste>
                <BigLetter>
                  • Travail sur la découverte des métiers et des talents.
                </BigLetter>
              </Liste>
              <Liste>
                <BigLetter>
                  • Collaboration avec les associations de la région.
                </BigLetter>
              </Liste>
              <Liste>
                <BigLetter>
                  • Intervention possible de collaborateurs dans le projet.
                </BigLetter>
              </Liste>
              <Liste>Nous avons besoin de vous !</Liste>
              <Path to="/contacter">
                <Contact>Nous Contacter</Contact>
              </Path>
            </ul>
          </Text2>
        </Container2>

        <Container1>
          <TitleBox1>Vous êtes une fondation, un fond de dotation </TitleBox1>
          <Text1>
            <ul>
              <Liste>
                Vous pouvez nous faire un don pour co-financer un atelier afin
                d'accompagner les jeunes issus des quartiers prioritaires des
                Hauts de France.
              </Liste>
              <Liste>
                <BigLetter>Exemples de contenu des ateliers :</BigLetter>
              </Liste>
              <Liste>
                <BigLetter>
                  • Travail sur la découverte des métiers et des talents.
                </BigLetter>
              </Liste>
              <Liste>
                <BigLetter>
                  • Collaboration avec les associations de la région.
                </BigLetter>
              </Liste>
              <Liste>Nous avons besoin de vous!</Liste>

              <Path to="/contacter">
                <Contact>Nous Contacter</Contact>
              </Path>
            </ul>
          </Text1>
        </Container1>
      </SoutenirBox>

      <BContainer>
        <Container4>
          <TitleBox4>Vous êtes un établissement scolaire </TitleBox4>
          <Text4>
            <Stage>
              Donnez la chance à vos élèves de participer au programme stage up
              !
            </Stage>
          </Text4>
          <Link to="/action/stageup">
            <Img src="/images/stageUpWhite.png" alt="logo Listeen Stage Up" />
          </Link>
        </Container4>
      </BContainer>
    </SoutenirContainer>
  );
};
export default Soutenir;
