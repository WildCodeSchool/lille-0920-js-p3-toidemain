import React from "react";
import { Link } from "react-router-dom";
import { NavContainer, NavDropdown, DropdownItems } from "./style";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  return (
    <NavContainer>
      <nav>
        <NavDropdown>
          <Link to="/about">Qui Sommes Nous ?</Link>

          <DropdownItems>
            <Link to="/about">Notre Engagement</Link>
            <HashLink smooth to="/about#equipe">
              Notre Equipe
            </HashLink>
            <HashLink smooth to="/about#partenaires">
              Nos Partenaires
            </HashLink>
          </DropdownItems>
        </NavDropdown>
        |
        <NavDropdown>
          <Link to="/action/pedagogie">Nos Actions</Link>

          <DropdownItems>
            <Link to="/action/pedagogie">Notre Pédagogie</Link>
            <Link to="/action/atelier">Nos Ateliers</Link>
            <Link to="/action/stageup">Stage-Up</Link>
          </DropdownItems>
        </NavDropdown>
        |<Link to="/soutenir">Nous Soutenir</Link>|
        <Link to="/actualite">Notre Actualité</Link>|
        <Link to="/contacter">Nous Contacter</Link>
      </nav>
    </NavContainer>
  );
}
