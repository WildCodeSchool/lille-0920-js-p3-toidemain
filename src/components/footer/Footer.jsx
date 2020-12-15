import React from "react";
import { FooterContainer, Info, Adress } from "./footer.style";

const Footer = () => {
  return (
    <FooterContainer>
      <Info>
        <h3>Toi Demain</h3>
        <Adress>
          <p>3 Rue Des Freres Lefebvre </p>
          <p>59390 Sailly-lez-Lannoy</p>
        </Adress>

        <p>09 50 79 61 59 / 06 60 43 10 07</p>
        <p className="fas fa-envelope-open">toi-demain@sfr.fr</p>
      </Info>
    </FooterContainer>
  );
};

export default Footer;
