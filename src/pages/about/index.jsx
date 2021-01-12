import React from "react";
import Member from "./Member";
import portraitItems from "./Data";
import { AboutContainer, Cards, Pledge, PledgeBox, Partners } from "./style";

const About = () => {
  return (
    <AboutContainer>
      <Pledge>
        <h1>Notre Engagement</h1>
        <PledgeBox>
          <div>
            <p>
              <span>Notre mission : accompagner</span> les jeunes dans leur
              orientation professionnelle, <span>révèler</span> leurs talents
              pour leur permettre d’être
              <span>libres, responsables et heureux</span>.
            </p>
            <p>
              Ce qui nous anime : c’est permettre aux jeunes une première belle
              rencontre avec le monde de l’entreprise qui leur donne envie.
            </p>
            <p>
              Leur permettre de croire que <span>tout est possible</span>.
            </p>
          </div>
          <img src="/images/atelierbis.jpg" alt="atelier" />
        </PledgeBox>
      </Pledge>

      <div id="equipe">
        <h1>L'Equipe de Toi Demain</h1>
        <Cards>
          {portraitItems.map((item) => (
            <Member item={item} key={item.name} />
          ))}
        </Cards>
        <h2>+ Une équipe de coachs partenaires, formés par Toi Demain!</h2>
      </div>

      <div>
        <h1>Nos partenaires</h1>
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
