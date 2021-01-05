import React from "react";
import { NavContainer, NavDropdown, DropdownItems } from "./style";

export default function Navbar() {
  return (
    <NavContainer>
      <nav>
        <NavDropdown>
          <a href="/">Qui Sommes Nous ?</a>

          <DropdownItems>
            <a href="/engagements">Notre Engagement</a>
            <a href="/about">Notre Equipe</a>
            <a href="/partenaires">Nos Partenaires</a>
          </DropdownItems>
        </NavDropdown>
        |
        <NavDropdown>
          <a href="/actions">Nos Actions</a>

          <DropdownItems>
            <a href="/pedagogie">Notre Pédagogie</a>
            <a href="/ateliers">Nos Ateliers</a>
            <a href="/stage-up">Stage-Up</a>
          </DropdownItems>
        </NavDropdown>
        |<a href="/soutien">Nous Soutenir</a>|
        <a href="/actualite">Notre Actualité</a>|
        <a href="/contact">Nous Contacter</a>
      </nav>
    </NavContainer>
  );
}
