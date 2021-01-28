import React from "react";
import { TextContainer, Corner, CornerContainer, Span } from "./style";

export default function AtelierText() {
  return (
    <TextContainer>
      <CornerContainer className="top">
        <Corner className="top" />
      </CornerContainer>
      <p>
        Toi Demain propose et organise des <Span>ateliers</Span> à destination
        des élèves afin de les accompagner dans leurs{" "}
        <Span>démarches professionnelles</Span>
      </p>
      <CornerContainer>
        <Corner className="bottom" />
      </CornerContainer>
    </TextContainer>
  );
}
