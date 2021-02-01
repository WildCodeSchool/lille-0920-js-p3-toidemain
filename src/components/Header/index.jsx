import React from "react";
import {
  HeaderContainer,
  TopBorder,
  HeaderBackground,
  LogoContainer,
} from "./style";
import Navbar from "./Navbar/index";
import Burger from "./Burger/index";
import { Link } from "react-router-dom";

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
            <Link to="/">
              <img src="/images/logo_Header.png" alt="ToiDemain logo" />
            </Link>
          </LogoContainer>
        </HeaderBackground>
        <Navbar />
      </HeaderContainer>
    </>
  );
};

export default Header;
