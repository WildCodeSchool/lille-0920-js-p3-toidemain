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
  Button,
  Button1,
} from "./style";

const Soutenir = () => {
  return (
    <>
      <SoutenirContainer>
        <Title titleName="Nous soutenir" />
        <SoutenirBox>
          <Container1>
            <TitleBox1>
              Vous êtes une fondation ? un fond de dotation ?
            </TitleBox1>
            <Text1>
              <ul>
                <Liste>
                  Vous pouvez nous faire un don pour financer un programme de 4
                  matinées pour d'accompagnement les jeunes issus des quartiers
                  prioritaires des Hauts de France.
                </Liste>
                <Liste>
                  <BigLetter>Exemple de contenu du programme:</BigLetter>
                </Liste>
                <Liste>
                  • Travail sur la découverte des métiers et des talents.
                </Liste>
                <Liste>
                  • Nous travaillons en collaboration avec le tissu associatif
                  de la région.
                </Liste>
              </ul>
            </Text1>
            <Button>
              <Link to="/contacter">Nous Contacter</Link>
            </Button>
          </Container1>
          <Container2>
            <TitleBox2>
              Vous êtes une petite entreprise et vous voulez vous investir
              auprès des jeunes ?
            </TitleBox2>
            <Text2>
              <ul>
                <Liste>
                  Vous pouvez nous faire don de votre taxe d'apprentissage pour
                  co-financer un programme de 4 matinées pour d'accompagnement
                  les jeunes issus des quartiers prioritaires.
                </Liste>
                <Liste>
                  <BigLetter>Exemple de contenu du programme:</BigLetter>
                </Liste>
                <Liste>
                  • Travail sur la découverte des métiers et des talents.
                </Liste>
                <Liste>
                  • Nous travaillons en collaboration avec les associations de
                  la région.
                </Liste>
                <Liste>
                  • Vous pouvez aussi faire intervenir vos collaborateurs dans
                  ce projet :
                </Liste>
                <Liste>Nous avons besoin de vous!</Liste>
              </ul>
            </Text2>
            <Button1>
              <Link to="/contacter">Nous Contacter</Link>
            </Button1>
          </Container2>

          <BContainer>
            <Container3>
              <TitleBox3>
                Vous êtes une entreprise de plus de 300 collaborateurs?
              </TitleBox3>
              <Text3>
                <ul>
                  <Liste>
                    Vous pouvez accueilLister le programme "stage up" permettre
                    aux enfants de vos collaborateurs d'accèder à un stage de
                    quaListeté dans votre entreprise ou dans l'entreprise de
                    l'un de nos partenaires.
                  </Liste>
                  <Liste>
                    Ce programme est finançable à 100% via la taxe
                    d'apprentissage.
                  </Liste>
                </ul>
              </Text3>
              <Img src="/images/stageUp.png" alt="logo Listeen Stage Up" />
            </Container3>
            <Container4>
              <TitleBox4>Vous êtes un étabListessement scolaire ?</TitleBox4>
              <Text4>
                Donnez la chance à vos élèves de participer au programme stage
                up!
              </Text4>
              <Img src="/images/stageUpWhite.png" alt="logo Listeen Stage Up" />
            </Container4>
          </BContainer>
        </SoutenirBox>
      </SoutenirContainer>
    </>
  );
};
export default Soutenir;