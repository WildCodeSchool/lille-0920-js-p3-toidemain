import React from "react";
import { NavContainer, NavLinks } from "./nav.style";

const Nav = () => {
	return (
		<NavContainer>
			<NavLinks>
				<nav>
					<li>Qui Sommes Nous ?</li>
					<li>Nos Actions</li>
					<li>Nous Soutenir</li>
					<li>Notre Actualité</li>
					<li>Nous Contacter</li>
				</nav>
			</NavLinks>
		</NavContainer>
	);
};
export default Nav;
