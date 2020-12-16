import React from "react";
import { Portraits, Member } from "./about.style";

const About = () => {
  return (
    <div>
      <h1>L'Equipe de Toi Demain</h1>
      <Portraits>
        <Member>
          <img src="/images/olivia.png" alt="olivia" />
          <div>
            <h2>Olivia Duyck</h2>
            <p>Formatrice / ingénieure pédagogique</p>
          </div>
        </Member>
        <Member>
          <img src="/images/emilie.png" alt="emilie" />
          <div>
            <h2>Emilie Auvray</h2>
            <p>Formatrice / ingénieure pédagogique</p>
          </div>
        </Member>
        <Member>
          <img src="/images/christine.png" alt="christine" />
          <div>
            <h2>Christine Jubin</h2>
            <p>Présidente de l’association</p>
          </div>
        </Member>
      </Portraits>
      <p>+ Une équipe de coachs partenaires, formés par Toi Demain!</p>
    </div>
  );
};

export default About;
