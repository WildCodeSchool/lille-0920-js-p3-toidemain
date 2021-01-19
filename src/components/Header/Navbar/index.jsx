import React from 'react';
import { Link } from 'react-router-dom';
import { NavContainer, NavDropdown, DropdownItems } from './style';

export default function Navbar() {
  return (
    <NavContainer>
      <nav>
        <NavDropdown>
          <a href="/">Qui Sommes Nous ?</a>

          <DropdownItems>
            <a href="/engagements">Notre Engagement</a>
            <Link to="/about/#equipe">Notre Equipe</Link>
            <a href="/partenaires">Nos Partenaires</a>
          </DropdownItems>
        </NavDropdown>
        |
        <NavDropdown>
          <a href="#!">Nos Actions</a>

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
