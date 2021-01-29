import React from "react";
import { slide as Menu } from "react-burger-menu";
import { StyledBurgerMenu } from "./style";
import { Link } from "react-router-dom";

export default function Burger() {
	return (
		<StyledBurgerMenu>
			<Menu right width={"180px"}>
				<Link to="/about">Nous</Link>
				<Link to="/action/pedagogie">Actions</Link>
				<Link to="/soutenir">Soutien</Link>
				<Link to="/actualite">Actualité</Link>
				<Link to="/contacter">Contact</Link>
			</Menu>
		</StyledBurgerMenu>
	);
}
