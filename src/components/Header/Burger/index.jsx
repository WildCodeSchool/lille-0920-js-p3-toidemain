import React from "react";
import { slide as Menu } from "react-burger-menu";
import { StyledBurgerMenu } from "./style";

export default function Burger() {
  return (
    <StyledBurgerMenu>
      <Menu right width={"180px"}>
        <a href="/">Nous</a>

        <a href="/actions">Actions</a>

        <a href="/soutien">Soutien</a>

        <a href="/actualite">Actualité</a>

        <a href="/contact">Contact</a>
      </Menu>
    </StyledBurgerMenu>
  );
}
