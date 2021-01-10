import React from "react";
import AnimStairs from "../Stairs";
import {
  Title,
  Intro,
  Container1,
  CapitalL,
  Title2,
  Slogan,
  Container2,
  Container3,
  Color,
  PedaContainer,
  Liste,
  ListeElement,
  Objectif,
  Logo,
  Orientoi,
  ColorB,
  Stairs,
} from "./style";
const Pedagogie = () => {
  return (
    <div>
      <PedaContainer>
        <Title>NOTRE PEDAGOGIE</Title>
        <Container1>
          <Intro>
            <CapitalL>Toi Demain</CapitalL> a une pédagogie d’apprentissage
            basée sur l’expérimentation. Il est essentiel pour nos équipes de
            créer l’alliance avec les jeunes et de leur permettre d’apprendre en
            s’amusant.
          </Intro>
          <Stairs>
            <AnimStairs />
          </Stairs>
        </Container1>

        <Container2>
          <Objectif>
            <Title2>TOUT CELA DANS L'OBJECTIF DE</Title2>
            <Liste>
              <ListeElement>
                Susciter des envies et affiner le projet professionnel des
                jeunes
              </ListeElement>
              <ListeElement>
                Leur permettre d’être acteur de leur stage en mettant en place
                un projet
              </ListeElement>
              <ListeElement>
                Travailler la posture à l’oral pour les présentations et les
                entretiens
              </ListeElement>
              <ListeElement>S’épanouir au sein d’un collectif</ListeElement>
              <ListeElement>
                S’adapter aux codes de l’entreprise et découvrir toutes les
                opportunités qu’elle offre
              </ListeElement>
              <ListeElement>
                Développer la connaissance de soi et faire grandir la confiance
                en soi
              </ListeElement>
            </Liste>
          </Objectif>
          <Slogan>
            POUR leur permettre d’être
            <Color> libres, responsables et heureux.</Color>
          </Slogan>
        </Container2>

        <Container3>
          <Orientoi>
            Nous sommes en partenariat avec <ColorB>ORIENTOI</ColorB> qui
            propose des jeux au sujet de l’orientation. Les jeunes réalisent le
            test en ligne pendant le stage.
          </Orientoi>
          <a href="https://app.orientoi.fr/#/welcome" target="blank">
            <Logo src="/images/orientoi.png" alt="logo lien oriente Toi" />
          </a>
        </Container3>
      </PedaContainer>
    </div>
  );
};

export default Pedagogie;
