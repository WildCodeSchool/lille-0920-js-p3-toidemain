import React from "react";
import Member from "./Member";
import portraitItems from "./Data";
import { AboutContainer, Cards, Pledge, PledgeBox, Partners } from "./style";
import Title from "../../components/Title/index";

const About = () => {
  return (
    <AboutContainer>
      <Pledge>
        <Title titleName={"Notre Engagements"} />
        <PledgeBox>
          <div>
            <p>
              <span>Notre mission : accompagner</span> les jeunes dans leur
              orientation professionnelle, <span>révèler</span> leurs talents
              pour leur permettre d’être
              <span> libres, responsables et heureux</span>.
            </p>
            <p>
              <ul>
                <span>Ce qui nous anime :</span>
                <li>
                  Permettre aux jeunes une première belle rencontre avec le
                  monde de l’entreprise qui leur donne envie.
                </li>
                <li className="fas fa-angle-right">
                  Leur permettre de croire que
                  <span> tout est possible</span>.
                </li>
              </ul>
            </p>
          </div>
          <img src="/images/atelierbis.jpg" alt="atelier" />
        </PledgeBox>
      </Pledge>

      <div id="equipe">
        <Title titleName={"L'Equipe de Toi Demain"} />
        <Cards>
          {portraitItems.map((item) => (
            <Member item={item} key={item.name} />
          ))}
        </Cards>
        <h2>+ Une équipe de coachs partenaires, formés par Toi Demain!</h2>
      </div>

      <div>
        <Title titleName={"Nos partenaires"} />
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
