import React from 'react';
import { Main, First, Second, Third, Forth, FirstTextContainer, Title, List, Text, FirstUp, Firstdown } from './style';

const StageUp = () => {
  return (
    <Main>
      <First>
        <FirstTextContainer>
          <img src="/images/stageup.png" alt="stageup" />
          <Firstdown>
            <h3>Les avantages de notre programme : Permettre aux jeunes de vivre un premier contact positif avec l’entreprise. Offrir à un plus grand nombre de jeunes un stage de qualité Permettre aux jeunes des REP, ou à ceux qui n’ont pas de réseau d’accéder à un stage en entreprise S’impliquer d’avantage dans l’orientation des jeunes en tant qu’entreprise Maitriser les temps d’échanges passés entre les jeunes et les collaborateurs</h3>
          </Firstdown>
        </FirstTextContainer>
        <FirstUp>
          <h3>
            <span>Stage up</span> est une solution <span>clé en main et innovante</span> pour les entreprises afin de répondre à la problématique d’accueil des jeunes lors de leur stage de découverte en entreprise.
            <br />
            <span>On s’occupe de tout!</span>
          </h3>
        </FirstUp>
      </First>
      <Second>
        <Text> Stage up c’est : 1 semaine de stage collectif innovante au sein d’une entreprise Pour un groupe de 12 à 20 collégiens / lycéens Encadré H24 par 2 coachs certifiés à l`orientation scolaire Pour l’entreprise une action RSE, clé en main, et aussi un avantage pour les enfants de collaborateurs L’action est finançable à 100% via la taxe d’apprentissage</Text>
      </Second>

      <Third>
        <Title>
          <h1>Concrètement ça se passe comment?</h1>
        </Title>
        <Title>
          <h2>Toi Demain Vous</h2>
        </Title>
        <List>
          <li>Mise à dispo d`une salle.</li>
          <li>4 collaborateurs 3x2heures.</li>
          <li>2h pour le porteur de projet.</li>
          <li>1 collaborateur 1x1h : les métiers d’avenir</li>
        </List>
        <List>
          <li>Recrutement des stagiaires et gestion des conventions de stages.</li>
          <li>Encadrement et animation des jeunes pendant toute la durée du stage.</li>
          <li> Accompagnement des collaborateurs intervenants.</li>
        </List>
      </Third>
      <Forth>
        <Title>
          <h2>Quand? Où?</h2>
        </Title>
        <Text>Une salle de réunion au sein de l’entreprise prévue pour 12 à 20 jeunes + 2 animateurs toute la semaine.</Text>
        <Text>Pendant les périodes de stages prévu par l’éducation nationale. Principalement novembre / décembre / janvier / février / juin</Text>
      </Forth>
    </Main>
  );
};

export default StageUp;
