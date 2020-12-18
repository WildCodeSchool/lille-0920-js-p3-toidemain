import React, { Component } from "react";
import { NavContainer, DropDown, DropDownItems } from "./style";

class Navbar extends Component {
  handleClick = (action) => {
    if (!action) return;

    if (this.props.onClick) this.props.onClick(action);
  };

  render = () => {
    return (
      <NavContainer>
        <ul>
          <DropDown>
            <li>
              <a href="./" onClick={() => this.handleClick("DropDown")}>
                Qui Sommes Nous ?
              </a>
              <DropDownItems>
                {" "}
                <a href="./" onClick={() => this.handleClick("Link1")}>
                  Notre Engagement
                </a>
                <a href="./" onClick={() => this.handleClick("Link2")}>
                  Notre Equipe
                </a>
                <a href="./" onClick={() => this.handleClick("Link3")}>
                  Nos Partenaires
                </a>
              </DropDownItems>
            </li>
          </DropDown>
          <DropDown>
            <li>
              <a href="./" onClick={() => this.handleClick("DropDown")}>
                Nos Actions
              </a>
              <DropDownItems>
                {" "}
                <a href="./" onClick={() => this.handleClick("Link1")}>
                  Notre Pédagogie
                </a>
                <a href="./" onClick={() => this.handleClick("Link2")}>
                  Nos Ateliers
                </a>
                <a href="./" onClick={() => this.handleClick("Link3")}>
                  Stage-Up
                </a>
              </DropDownItems>
            </li>
          </DropDown>
          <li>
            <a href="./" onClick={() => this.handleClick("Home")}>
              Nous Soutenir
            </a>
          </li>
          <li>
            <a href="./" onClick={() => this.handleClick("News")}>
              Notre Actualité
            </a>
          </li>
          <li>
            <a href="./" onClick={() => this.handleClick("News")}>
              Nous Contacter
            </a>
          </li>
        </ul>
      </NavContainer>
    );
  };
}

export default Navbar;
