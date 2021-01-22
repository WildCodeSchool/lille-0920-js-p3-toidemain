import React from "react";
// import { Link } from "react-router-dom";
import { NavContainer, NavDropdown, DropdownItems } from "./style";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  return (
    <NavContainer>
      <nav>
        <NavDropdown>
          <a href="/">Qui Sommes Nous ?</a>

          <DropdownItems>
            <Link to="/about">Notre Engagement</Link>
            <Link smooth to="/about#equipe">
              Notre Equipe
            </Link>
            <Link smooth to="/about#partenaires">
              Nos Partenaires
            </Link>
          </DropdownItems>
        </NavDropdown>
        |
        <NavDropdown>
          <a href="#!">Nos Actions</a>

          <DropdownItems>
            <Link to="/action#pedagogie">Notre Pédagogie</Link>
            <Link smooth to="/action#atelier">
              Nos Ateliers
            </Link>
            <Link to="/stageup">Stage-Up</Link>
          </DropdownItems>
        </NavDropdown>
        |<a href="/soutien">Nous Soutenir</a>|
        <a href="/actualite">Notre Actualité</a>|
        <Link to="/contacter">Nous Contacter</Link>
      </nav>
    </NavContainer>
  );
}
