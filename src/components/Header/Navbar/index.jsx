import React from 'react';
import { Link } from 'react-router-dom';
import { NavContainer, NavDropdown, DropdownItems } from './style';

export default function Navbar() {
  return (
    <NavContainer>
      <nav>
        <NavDropdown>
          <Link href="/about">Qui Sommes Nous ?</Link>

          <DropdownItems>
            <Link to="/about">Notre Engagement</Link>
            <Link to="/about">Notre Equipe</Link>
            <Link to="/about">Nos Partenaires</Link>
          </DropdownItems>
        </NavDropdown>
        |
        <NavDropdown>
          <a href="/action/pedagogie">Nos Actions</a>

          <DropdownItems>
            <Link to="/action/pedagogie">Notre Pédagogie</Link>
            <Link to="/action/atelier">Nos Ateliers</Link>
            <Link to="/action/stageup">Stage-Up</Link>
          </DropdownItems>
        </NavDropdown>
        |<a href="/soutien">Nous Soutenir</a>|<a href="/actualite">Notre Actualité</a>|<Link to="/contacter">Nous Contacter</Link>
      </nav>
    </NavContainer>
  );
}
