import styled from "styled-components";
import { device } from "../../layout/Devices";

// mobile: "480px",
// minTablet: "481px",
// maxTablet: "768px",
// MinSmallScreen: "769px",
// MaxSmallScreen: "1024px",
// desktop: "1025px",
// mobile:
// tablet:
// small_screen:
// desktop:

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 63vh;
	width: 100%;
`;

export const Formulaire = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	width: 390px;
	height: 220px;
	background-color: rgba(255, 255, 255, 0.25);
	border-radius: 5px;
	box-shadow: 0px 10px 10px rgba(0, 0, 5, 0.25);
	@media ${device.mobile} {
		width: 230px;
	}

	h2 {
		color: #005542;
		font-size: 1.4em;
		@media ${device.mobile} {
			font-size: 1.2em;
		}
	}

	input,
	button {
		width: 300px;
		height: 40px;
		border: none;
		border-radius: 3px;
		font-size: 1.2em;
		@media ${device.mobile} {
			width: 190px;
			font-size: 1.1em;
		}
	}

	input {
		color: #005542;
		padding-left: 8px;
	}

	button {
		width: 310px;
		height: 40px;
		background-color: #005542;
		color: #fff;
		margin-bottom: 15px;
		@media ${device.mobile} {
			width: 200px;
		}

		:hover {
			background-color: #ffbe00;
		}
	}
`;
