import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  FooterContainer,
  InfoContainer,
  Info,
  ButtonContainer,
  Right,
  Menu,
  Social,
  Icons,
  Dues,
} from "./style";

const Footer = () => {
  return (
    <Container>
      <FooterContainer>
        <InfoContainer>
          <h3>Toi Demain</h3>
          <Info>
            <img src="/images/icons/location-pin.png" alt="gps" />
            <p>Hem 59510</p>
          </Info>
          <Info>
            <img src="/images/icons/telephone.png" alt="tel" />
            <p>07 50 99 82 88</p>
          </Info>
        </InfoContainer>
        <Menu>
          <Social>
            <h3>Retrouvez-nous:</h3>
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
            <a
              href="https://www.linkedin.com/company/toi-demain/"
              title="linkedin"
              target="blank"
            >
              <img src="/images/icons/linkedin.png" alt="linkedin" />
            </a>
          </Icons>
        </Menu>
        <ButtonContainer>
          <Right>
            <Link to="/contacter">Nous Contacter</Link>
          </Right>
        </ButtonContainer>
      </FooterContainer>
      <Dues>
        <p>&#169; 2021 Tous droits réservés Association Toi Demain</p>
        <p>Made with ♡ by Wild Code School</p>
      </Dues>
    </Container>
  );
};

export default Footer;
