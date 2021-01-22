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
<<<<<<< HEAD
            <Link to="/about">Notre Engagement</Link>
            <Link smooth to="/about#equipe">
              Notre Equipe
            </Link>
            <Link smooth to="/about#partenaires">
              Nos Partenaires
            </Link>
=======
            <a href="/engagements">Notre Engagement</a>
            <a href="/equipe">Notre Equipe</a>
            <a href="/partenaires">Nos Partenaires</a>
>>>>>>> 60cdc9b2b9d5e65d8aec10d0997a981e2c2ad0fe
          </DropdownItems>
        </NavDropdown>
        |
        <NavDropdown>
<<<<<<< HEAD
          <a href="#!">Nos Actions</a>

          <DropdownItems>
            <Link to="/action#pedagogie">Notre Pédagogie</Link>
            <Link smooth to="/action#atelier">
              Nos Ateliers
            </Link>
            <Link to="/stageup">Stage-Up</Link>
=======
          <a href="/action/pedagogie">Nos Actions</a>

          <DropdownItems>
            <Link to="/action/pedagogie">Notre Pédagogie</Link>
            <Link to="/action/atelier">Nos Ateliers</Link>
            <Link to="/action/stageup">Stage-Up</Link>
>>>>>>> 60cdc9b2b9d5e65d8aec10d0997a981e2c2ad0fe
          </DropdownItems>
        </NavDropdown>
        |<a href="/soutien">Nous Soutenir</a>|
        <a href="/actualite">Notre Actualité</a>|
        <Link to="/contacter">Nous Contacter</Link>
      </nav>
    </NavContainer>
  );
}
