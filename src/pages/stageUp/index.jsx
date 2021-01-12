import React from 'react';
import { Main, First, Second, Third, Forth, FirstTextContainer, Title, ListR, ListL, TextR, TextL, FirstUp, Firstdown, SecText, ThirdContainer } from './style';

const StageUp = () => {
  return (
    <Main>
      <First>
        <FirstTextContainer>
          <img src="/images/stageup.png" alt="stageup" />
          <FirstUp>
            <h3>
              <span>Stage up</span>
              <br /> est une solution <span>clé en main et innovante</span> pour les entreprises afin de répondre à la problématique d’accueil des jeunes lors de leur stage de découverte en entreprise.
              <br />
              <span>On s’occupe de tout!</span>
            </h3>
          </FirstUp>
        </FirstTextContainer>
        <Firstdown>
          <h3>
            <span> Les avantages de notre programme </span>
            <br />
            <br /> Permettre aux jeunes de vivre un premier contact positif avec l’entreprise.
            <br />
            <br /> Offrir à un plus grand nombre de jeunes un stage de qualité. <br />
            <br />
            Permettre aux jeunes des REP, ou à ceux qui n’ont pas de réseau d’accéder à un stage en entreprise. <br />
            <br />
            S’impliquer d’avantage dans l’orientation des jeunes en tant qu’entreprise Maitriser les temps d’échanges passés entre les jeunes et les collaborateurs.
          </h3>
        </Firstdown>
      </First>
      <Second>
        <img src="/images/handsnb.jpg" alt="hands" />
        <SecText>
          <h2>
            <strong>Stage up c’est :</strong>
            <br /> - <span>1</span> semaine de stage collectif innovante au sein d’une entreprise
            <br /> - Pour un groupe de <sp>12 à 20</sp> collégiens / lycéens
            <br /> - Encadré <span>H24</span> par <span>2</span> coachs certifiés à l`orientation scolaire
            <br /> - Pour l’entreprise une action <span>RSE, clé en main</span>, et aussi un avantage pour les enfants de collaborateurs
            <br /> - L’action est finançable à <span>100%</span> via la taxe d’apprentissage
          </h2>
        </SecText>
      </Second>

      <Third>
        <Title>
          <h1>Concrètement ça se passe comment?</h1>
        </Title>

        <ThirdContainer>
          <ListR>
            <ul>
              <li>Mise à dispo d`une salle.</li>
              <li>4 collaborateurs 3x2heures.</li>
              <li>2h pour le porteur de projet.</li>
              <li>1 collaborateur 1x1h : les métiers d’avenir</li>
            </ul>
          </ListR>
          <img src="/images/vous.png" alt="toi domain et vous" />
          <ListL>
            <ul>
              <li>Recrutement des stagiaires et gestion des conventions de stages.</li>
              <li>Encadrement et animation des jeunes pendant toute la durée du stage.</li>
              <li> Accompagnement des collaborateurs intervenants.</li>
            </ul>
          </ListL>
        </ThirdContainer>
      </Third>
      <Forth>
        <TextR>
          <p>Une salle de réunion au sein de l’entreprise prévue pour 12 à 20 jeunes + 2 animateurs toute la semaine.</p>
        </TextR>
        <img src="/images/quand.png" alt="quand et ou" />
        <TextL>
          <p>Pendant les périodes de stages prévu par l’éducation nationale. Principalement novembre / décembre / janvier / février / juin</p>
        </TextL>
      </Forth>
    </Main>
  );
};

export default StageUp;
