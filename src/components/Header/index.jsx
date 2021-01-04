import React from "react";
import {
  HeaderContainer,
  TopBorder,
  HeaderBackground,
  LogoContainer,
  ContactContainer,
} from "./style";
import Navbar from "./Navbar/index";
import Burger from "./Burger/index";

const Header = () => {
  return (
    <>
      <Burger />
      <HeaderContainer>
        <TopBorder>
          <p>Association déclarée - SIREN: 852 306 703 00012</p>
        </TopBorder>
        <HeaderBackground>
          <LogoContainer>
            <img src="/images/logo_Header.png" alt="ToiDemain logo" />
          </LogoContainer>
          <ContactContainer>
            <img src="/images/icons/mail_icon.svg" alt="e-mail icon" />
            <p>contact@toidemain.fr</p>
          </ContactContainer>
        </HeaderBackground>
        <Navbar />
      </HeaderContainer>
    </>
  );
};

export default Header;
