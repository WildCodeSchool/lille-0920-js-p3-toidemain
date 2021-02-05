import styled from "styled-components";
import { device } from "../../../layout/Devices";

export const ModalStyle = styled.div`
	max-width: 360px;
	font-family: "Roboto", sans-serif;
	font-size: 1.2em;
	color: #fff;
	text-align: left;
	padding: 20px;
	background: #91ccdb;
	border-radius: 50px 50px 0px 50px;
	border: 5px solid #d7d7d7;
	box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
	margin-top: 50px;
	@media ${device.small_screen} {
		font-size: 1em;
		padding: 15px;
	}
	@media ${device.tablet} {
		font-size: 0.6em;
		padding: 10px;
	}

	li {
		padding: 5px;
	}
`;
