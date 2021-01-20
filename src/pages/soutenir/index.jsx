import React from "react";
import Title from "../../components/Title/index";
import { SoutenirContainer } from "./style";

const Soutenir = () => {
  return (
    <div>
      <SoutenirContainer>
        <Title titleName="Nous soutenir" />
        <div>
          <div>
            <h2>Vous êtes une fondation ? un fond de dotation ?</h2>
            <p>
              Vous pouvez nous faire un don pour financer un programme de 4
              matinées pour d'accompagnement les jeunes issus des quartiers
              prioritaires des Hauts de France. Exemple de contenu du programme:
              Travail sur la découverte des métiers et des talents. Nous
              travaillons en collaboration avec le tissu associatif de la
              région.
            </p>
          </div>
          <div>
            <h2>
              Vous êtes une petite entreprise et vous voulez vous investir
              auprès des jeunes ?
            </h2>
            <p>
              Vous pouvez nous faire don de votre taxe d'apprentissage pour
              co-financer un programme de 4 matinées pour d'accompagnement les
              jeunes issus des quartiers prioritaires. Exemple de contenu du
              programme: Travail sur la découverte des métiers et des talents.
              Nous travaillons en collaboration avec les associations de la
              région. Vous pouvez aussi faire intervenir vos collaborateurs dans
              ce projet : nous avons besoin de vous!
            </p>
          </div>
          <div>
            <h2>Vous êtes une entreprise de plus de 300 collaborateurs?</h2>
            <p>
              Vous pouvez accueillir le programme "stage up" permettre aux
              enfants de vos collaborateurs d'accèder à un stage de qualité dans
              votre entreprise ou dans l'entreprise de l'un de nos partenaires.
              Ce programme est finançable à 100% via la taxe d'apprentissage.
            </p>
          </div>
          <div>
              <h2>Vous êtes un établissement scolaire ?</h2>
              <p>Donnez la chance à vos élèves de participer au programme stage up!</p>
              <button>Nous contacter</button>
          </div>
        </div>
        <div>
            <h3>Pour faire un don</h3>
            <button>Nous contacter</button>
        </div>
      </SoutenirContainer>
    </div>
  );
};
export default Soutenir;
