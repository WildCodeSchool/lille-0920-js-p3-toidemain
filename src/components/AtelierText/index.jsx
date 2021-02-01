import React from "react";
import { TextContainer, Corner, CornerContainer, Span } from "./style";

export default function AtelierText() {
  return (
    <TextContainer>
      <CornerContainer className="top">
        <Corner className="top" />
      </CornerContainer>
      <p>
        Toi Demain propose et organise des <Span>Ateliers innovants</Span> clés
        en main sur mesure adaptés à vos besoins
      </p>
      <CornerContainer>
        <Corner className="bottom" />
      </CornerContainer>
    </TextContainer>
  );
}
