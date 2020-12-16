import React from "react";
import {
	HeaderContainer,
	TopBorder,
	HeaderBackground,
	LogoContainer,
	ContactContainer,
} from "./header.style";
import Nav from "../Nav/Nav";

const Header = () => {
	return (
		<HeaderContainer>
			<TopBorder>
				<p>Association déclarée - SIREN: 852 306 703 00012</p>
			</TopBorder>
			<HeaderBackground>
				<LogoContainer>
					<img src="/images/logo_Header.png" alt="ToiDemain logo" />
				</LogoContainer>
				<ContactContainer>
					<img src="/images/icons/mail_icon.svg" alt="e-mail icon" />
					<p>contact@toidemain.fr</p>
				</ContactContainer>
			</HeaderBackground>
			<Nav />
		</HeaderContainer>
	);
};
export default Header;
