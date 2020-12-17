import React from "react";
import Member from "./Member";
import portraitItems from "./Data";
import { AboutContainer, Cards, Pledge } from "./about.style";

const About = () => {
  return (
    <AboutContainer>
      <Pledge>
        <h1>Notre Engagement</h1>
        <div>
          <p>
            <span>Notre mission : accompagner</span> les jeunes dans leur
            orientation professionnelle, <span>révèler</span> leurs talents pour
            leur permettre d’être <span>libres, responsables et heureux</span>.
          </p>
          <p>
            Ce qui nous anime : c’est permettre aux jeunes une première belle
            rencontre avec le monde de l’entreprise qui leur donne envie.
          </p>
          <p>
            Leur permettre de croire que <span>tout est possible</span>.
          </p>
        </div>
      </Pledge>

      <div>
        <h1>L'Equipe de Toi Demain</h1>
        <Cards>
          {portraitItems.map((item) => (
            <Member item={item} key={item.name} />
          ))}
        </Cards>
        <h2>+ Une équipe de coachs partenaires, formés par Toi Demain!</h2>
      </div>
    </AboutContainer>
  );
};

export default About;
