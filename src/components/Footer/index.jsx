import React from "react";
import { Link } from "react-router-dom";
import {
  FooterContainer,
  Info,
  Adress,
  Right,
  Menu,
  Social,
  Icons,
} from "./style";

const Footer = () => {
  return (
    <FooterContainer>
      <Info>
        <h3>Toi Demain</h3>
        <Adress>
          <p>
            <span>
              <img src="/images/icons/location-pin.png" alt="gps" />
            </span>
            &nbsp;&nbsp;Hem 59510
          </p>
        </Adress>
        <p>
          <span>
            <img src="/images/icons/telephone.png" alt="tel" />
          </span>
          &nbsp;&nbsp;07 50 99 82 88
        </p>
        <p>
          <span>
            <img src="/images/icons/email.png" alt="email" />
          </span>
          &nbsp;&nbsp;contact@toidemain.fr
        </p>
      </Info>
      <Menu>
        <Social>
          <h3>Retrouvez-nous sur</h3>
        </Social>
        <Icons>
          <a
            href="https://www.instagram.com/toi.demain/"
            title="instagram"
            target="blank"
          >
            <img src="/images/icons/instagram.png" alt="instagram" />
          </a>
          <a
            href="https://www.facebook.com/toi.demain.5/"
            title="facebook"
            target="blank"
          >
            <img src="/images/icons/facebook.png" alt="facebook" />
          </a>
          <img src="/images/icons/linkedin.png" alt="linkedin" />
        </Icons>
        <p>&#169; 2021 Tous droits réservés Association Toi Demain</p>
      </Menu>
      <Right>
        <Link to="/contacter">Nous Contacter</Link>
      </Right>
    </FooterContainer>
  );
};

export default Footer;
