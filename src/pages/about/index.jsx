import React from "react";
import Member from "./Member";
import portraitItems from "./Data";
import { AboutContainer, Cards, PledgeBox, Partners } from "./style.jsx";
import Title from "../../components/Title/index";

const About = () => {
  return (
    <AboutContainer>
      <Title titleName="Notre Engagement" />
      <PledgeBox>
        <div>
          <p>
            <span>Notre mission : accompagner</span> les jeunes des Hauts de
            France dans leur orientation professionnelle, <span>révèler</span>
            leurs talents pour leur permettre d’être
            <span> libres, responsables et heureux</span>.
          </p>
          <p>
            <ul>
              <span>Ce qui nous anime :</span>
              <li>
                Permettre aux jeunes une première rencontre
                <span> positive </span>avec le monde de l’entreprise.
              </li>
              <li>
                Vivre une expérience humaine épanouissante, oser s'exprimer et
                renforcer leur confiance en eux.
              </li>
              <li>
                S'inspirer et rencontrer des professionnels pour mieux choisir
                leur orientation.
              </li>
              <li>Se challenger pour se connaître.</li>
            </ul>
          </p>
          <p>
            Surtout, leur permettre de croire que
            <span> TOUT EST POSSIBLE</span>.
          </p>
        </div>
        <img src="/images/atelierbis.jpg" alt="atelier" />
      </PledgeBox>

      <div id="equipe">
        <Title titleName="L'Equipe de Toi Demain"></Title>
        <Cards>
          {portraitItems.map((item) => (
            <Member item={item} key={item.name} />
          ))}
        </Cards>
        <h5>+ Une équipe de coachs partenaires, formés par Toi Demain !</h5>
      </div>

      <div id="partenaires">
        <Title titleName="Nos partenaires"></Title>
        <Partners>
          <img src="/images/idkids.png" alt="id kids" />
          <img src="/images/kiabi.png" alt="kiabi" />
          <img src="/images/oney.png" alt="oney" />
          <img src="/images/orientoi.png" alt="orientoi" />
          <img src="/images/telemarque.png" alt="télémarque" />
        </Partners>
      </div>
    </AboutContainer>
  );
};

export default About;
