import React from 'react';
import { TextContainer, Corner, CornerContainer } from './style';
import StageUpButton from '../../components/StageUpButton/index';

export default function EntrepriseText() {
  return (
    <TextContainer>
      <CornerContainer className="top">
        <Corner className="top" />
      </CornerContainer>
      <p>Vous êtes une entreprise et vous voulez encore mieux accueillir vos stagiaires ?</p>
      <CornerContainer>
        <Corner className="bottom" />
      </CornerContainer>
      <StageUpButton />
    </TextContainer>
  );
}
