import React from "react";
import Member from "./Member";
import portraitItems from "./Data";
import { AboutContainer, Portraits } from "./about.style";

const About = () => {
  return (
    <AboutContainer>
      <h1>L'Equipe de Toi Demain</h1>
      <Portraits>
        {portraitItems.map((item) => (
          <Member item={item} key={item.name} />
        ))}
      </Portraits>
      <p>+ Une équipe de coachs partenaires, formés par Toi Demain!</p>
    </AboutContainer>
  );
};

export default About;
