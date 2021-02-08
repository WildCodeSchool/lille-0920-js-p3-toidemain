import React from "react";
import { TextContainer, Corner, CornerContainer, Path } from "./style";

export default function StageText() {
  return (
    <TextContainer>
      <CornerContainer className="top">
        <Corner className="top" />
      </CornerContainer>
      <p>
        Notre programme phare :<br /> <Path to="/action/stageup">Stage up</Path>
        &nbsp;une solution clé en main innovante pour les entreprises afin de
        répondre à la problématique d’accueil des jeunes lors de leur stage de
        découverte en entreprise. On s’occupe de tout ! <br />
        Nos autres propositions : <br />
        Des&nbsp;<Path to="/action/atelier">Ateliers innovants</Path> clés en
        main sur mesure adaptés à vos besoins. Notre&nbsp;
        <Path to="/action/pedagogie">pédagogie</Path>&nbsp;: Une pédagogie
        d’apprentissage basée sur l’expérimentation.
      </p>
      <CornerContainer>
        <Corner className="bottom" />
      </CornerContainer>
    </TextContainer>
  );
}
