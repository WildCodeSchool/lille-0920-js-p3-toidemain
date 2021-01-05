import styled from "styled-components";
import { device } from "../../layout/Devices";

export const FooterContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	min-height: 10vh;
	max-height: 30vh;
	opacity: 0.9;
	background: #005542 no-repeat center center fixed;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;

	@media ${device.mobile} {
		flex-direction: column;
		justify-content: center;
		min-height: 60vh;
		max-height: 70vh;
	}
	@media ${device.tablet} {
		min-height: 30vh;
		max-height: 50vh;
	}
`;
export const Info = styled.div`
	color: white;
	margin: 0 auto;

	h3 {
		text-align: center;
		font-size: 22px;
		font-family: Georgia, serif;
		margin: 2vh auto;
	}
	img {
		width: 24px;
	}
	p {
		font-size: 16px;
		margin: 1vh auto;
	}
	@media ${device.mobile} {
		margin-bottom: 2vh;
		h3 {
			font-size: 24px;
		}
		img {
			width: 18px;
		}
		p {
			font-size: 18px;
			text-align: center;
			margin: 2vh auto;
		}
	}
	@media ${device.tablet} {
		width: 50%;
		h3 {
			font-size: 24px;
		}
		img {
			width: 18px;
		}
		p {
			font-size: 18px;
			text-align: center;
		}
	}
`;
export const Adress = styled.div`
	img {
		width: 24px;
	}
`;
export const Middle = styled.div`
	background-color: white;
	opacity: 75%;
	margin: 0 auto;
	img {
		height: 100%;
		width: 20vw;
	}
	@media ${device.mobile} {
		display: none;
	}
	@media ${device.tablet} {
		display: none;
	}
`;

export const Menu = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2vh 0;
	margin: 0 auto;

	a {
		font-size: 22px;
		color: white;
		text-decoration: none;
		background-color: transparent;
		transition: all 0.5s ease;
		border: 5px solid white;
		border-radius: 20px;
		padding: 0.5rem;
		margin: auto;
		&:hover {
			background-color: #ffbe00;
			color: #005542;
		}
	}
	p {
		color: white;
		padding-top: 2vh;
	}
	@media ${device.mobile} {
		padding: 0;
		p {
			padding-top: 0;
			text-align: center;
		}
		a {
			font-size: 18px;
			margin-bottom: 1vh;
		}
	}
	@media ${device.tablet} {
		padding: 0;
		padding-right: 2vw;
		width: 50%;
		a {
			font-size: 18px;
			margin-bottom: 1vh;
		}
		p {
			font-size: 14px;
			padding-top: 0;
			text-align: center;
		}
	}
`;
export const Social = styled.div`
	h3 {
		color: white;
		border-bottom: 3px solid white;
		font-size: 26px;
		margin: 2vh auto;
	}
	@media ${device.mobile} {
		h3 {
			display: none;
		}
	}
	@media ${device.tablet} {
		h3 {
			font-size: 20px;
		}
	}
`;
export const Icons = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	img {
		margin: 1vh 0.5vw;
	}
	@media ${device.mobile} {
		margin-top: 1vh;
		img {
			margin: 2vh 2vw;
		}
	}
`;
