import React from 'react';
import { TextContainer, Corner, CornerContainer } from './style';
import ContactButton from '../../components/ContactButton/index';

export default function LyceenText() {
  return (
    <TextContainer>
      <CornerContainer className="top">
        <Corner className="top" />
      </CornerContainer>
      <p>Tu es un jeune de 4ème, 3ème, 2nde ou 1ère et tu recherches un stage en entreprise qui soit enrichissant et ludique ?</p>
      <CornerContainer>
        <Corner className="bottom" />
      </CornerContainer>
      <ContactButton />
    </TextContainer>
  );
}
