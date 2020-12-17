import React from "react";
import Member from "./Member";
import portraitItems from "./Data";
import { AboutContainer, Cards } from "./about.style";

const About = () => {
  return (
    <AboutContainer>
      <h1>L'Equipe de Toi Demain</h1>
      <Cards>
        {portraitItems.map((item) => (
          <Member item={item} key={item.name} />
        ))}
      </Cards>
      <h2>+ Une équipe de coachs partenaires, formés par Toi Demain!</h2>
    </AboutContainer>
  );
};

export default About;
