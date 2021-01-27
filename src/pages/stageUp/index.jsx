import React from 'react';
import { Main, First, Second, Third, Forth, FirstTextContainer, Topic, ListR, ListL, TextR, TextL, FirstUp, Firstdown, SecText, ThirdContainer } from './style';
import Title from '../../components/Title/index';

const StageUp = () => {
  return (
    <Main>
      <Title titleName="Stage Up"></Title>
      <First>
        <FirstTextContainer>
          <img src="/images/stageup.png" alt="stageup" />
          <FirstUp>
            <h3>
              <span>Stage up</span>
              <br /> est une solution <span>clé en main et innovante</span> pour les entreprises afin de répondre à la problématique d’accueil des jeunes lors de leur stage de découverte en entreprise.
              <br />
              <span>Toi Demain s'occupe de tout!</span>
            </h3>
          </FirstUp>
        </FirstTextContainer>
        <Firstdown>
          <h3>
            <span> Les avantages de notre programme </span>
            <br />
            <br /> Permettre aux jeunes de vivre un premier contact positif avec l’entreprise.
            <br />
            <br /> Offrir à un plus grand nombre de jeunes un stage de qualité.
            <br />
            <br />
            Permettre aux jeunes des REP ou à ceux qui n’ont pas de réseau d’accéder à un stage en entreprise. <br />
            <br />
            S’impliquer d’avantage dans l’orientation des jeunes en tant qu’entreprise. Maitriser les temps d’échanges passés entre les jeunes et les collaborateurs.
          </h3>
        </Firstdown>
      </First>
      <Second>
        <img src="/images/stageup.jpeg" alt="hands" />
        <SecText>
          <h3>Stage up c’est :</h3>
          <h2>
            <br /> <i class="fas fa-angle-double-right"></i> <span>1 </span>
            semaine de stage collectif innovante au sein d’une entreprise
            <br /> <i class="fas fa-angle-double-right"></i> Pour un groupe de
            <sp>12 à 20</sp> collégiens / lycéens
            <br /> <i class="fas fa-angle-double-right"></i> Encadré par
            <span>2</span> coachs certifiés à l`orientation scolaire
            <br /> <i class="fas fa-angle-double-right"></i> Pour l’entreprise, une action <span>RSE clé en main</span> ainsi qu'un avantage pour les enfants de collaborateurs
            <br /> <i class="fas fa-angle-double-right"></i> L’action est finançable à <span>100%</span> via la taxe d’apprentissage
          </h2>
        </SecText>
      </Second>

      <Third>
        <Topic>
          <h1>Concrètement ça se passe comment ?</h1>
        </Topic>

        <ThirdContainer>
          <ListR>
            <h3>Vos Rôles</h3>
            <ul>
              <li>
                <i class="fas fa-angle-double-right"></i> Mise à disposition d'une salle.
              </li>
              <li>
                <i class="fas fa-angle-double-right"></i> 4 collaborateurs 3 x 2 heures.
              </li>
              <li>
                <i class="fas fa-angle-double-right"></i> 2 heures pour le porteur de projet.
              </li>
              <li>
                <i class="fas fa-angle-double-right"></i> 1 collaborateur 1 x 1 heure : les métiers d’avenir.
              </li>
            </ul>
          </ListR>
          <img src="/images/vous.png" alt="toi domain et vous" />
          <ListL>
            <h3>Toi demain Rôle</h3>
            <ul>
              <li>
                <i class="fas fa-angle-double-right"></i> Recrutement des stagiaires et gestion des conventions de stages.
              </li>
              <li>
                <i class="fas fa-angle-double-right"></i> Encadrement et animation des jeunes pendant toute la durée du stage.
              </li>
              <li>
                <i class="fas fa-angle-double-right"></i> Accompagnement des collaborateurs intervenants.
              </li>
            </ul>
          </ListL>
        </ThirdContainer>
      </Third>
      <Forth>
        <TextR>
          <h3>Où</h3>
          <p>Une salle de réunion au sein de l’entreprise prévue pour 12 à 20 jeunes + 2 animateurs toute la semaine.</p>
        </TextR>
        <img src="/images/quand.png" alt="quand et ou" />
        <TextL>
          <h3>Quand</h3>
          <p>Pendant les périodes de stages prévues par l’éducation nationale. Principalement novembre / décembre / janvier / février / juin</p>
        </TextL>
      </Forth>
    </Main>
  );
};

export default StageUp;
