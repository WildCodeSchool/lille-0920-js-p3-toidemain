import React from "react";
import { TextContainer, Corner, CornerContainer } from "./style";

export default function EnseignantText() {
  return (
    <TextContainer>
      <CornerContainer className="top">
        <Corner className="top" />
      </CornerContainer>
      <p>
        Vous êtes un enseignant et vous ne savez pas comment accompagner vos
        élèves dans leur recherche de stage ?
      </p>
      <CornerContainer>
        <Corner className="bottom" />
      </CornerContainer>
    </TextContainer>
  );
}
