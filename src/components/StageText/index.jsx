import React from "react";
import { TextContainer, Corner, CornerContainer } from "./style";

export default function StageText() {
  return (
    <TextContainer>
      <CornerContainer className="top">
        <Corner className="top" />
      </CornerContainer>
      <p>
        Notre programme Stage up est une solution clé en main et innovante pour
        les entreprises afin de répondre à la problématique d’accueil des jeunes
        lors de leur stage de découverte en entreprise. On s’occupe de tout !
      </p>
      <CornerContainer>
        <Corner className="bottom" />
      </CornerContainer>
    </TextContainer>
  );
}
