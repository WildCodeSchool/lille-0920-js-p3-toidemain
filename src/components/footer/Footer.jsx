import React from "react";
import {
  FooterContainer,
  Info,
  Adress,
  Middle,
  Menu,
  Social,
  Icons,
} from "./footer.style";

const Footer = () => {
  return (
    <FooterContainer>
      <Info>
        <h3>Toi Demain</h3>
        <Adress>
          <p>
            {" "}
            <span>
              <img src="/images/icons/location-pin.png" alt="gps" />{" "}
            </span>
            3 Rue Des Freres Lefebvre{" "}
          </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 59390 Sailly-lez-Lannoy</p>
        </Adress>

        <p>
          {" "}
          <span>
            <img src="/images/icons/telephone.png" alt="tel" />{" "}
          </span>
          09 50 79 61 59
        </p>
        <p>
          <span>
            <img src="/images/icons/email.png" alt="email" />{" "}
          </span>
          toi-demain@gmail.com
        </p>
      </Info>
      <Middle>
        <img src="/images/logo.png" alt="logo" />
      </Middle>
      <Menu>
        <a href="#!">Nous Contacter</a>
        <Social>
          <h3>Retrouvez-Nous sur</h3>
        </Social>
        <Icons>
          <img src="/images/icons/instagram.png" alt="instagram" />
          <img src="/images/icons/facebook.png" alt="facebook" />
          <img src="/images/icons/linkedin.png" alt="linkedin" />
        </Icons>
        <p>&#169; 2021 Tous droits réservés Association Toi Demain</p>
      </Menu>
    </FooterContainer>
  );
};

export default Footer;
