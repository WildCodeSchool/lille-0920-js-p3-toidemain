import styled from "styled-components";
import { device } from "../../layout/Devices";

export const Container = styled.div`
	@media ${device.mobile} {
		display: none;
	}
`;

export const Hexagones = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ModalContainer = styled.div`
	display: inline-block;
	height: 100px;
	margin-right: 520px;
	z-index: 3;
	@media ${device.small_screen} {
		margin-right: 320px;
	}
	@media ${device.tablet} {
		margin-right: 200px;
	}
`;

export const DriversStyle = styled.div`
	background-image: url(/images/animated_background.svg);
	font-family: "Roboto", sans-serif;
	display: flex;
	flex-direction: row;
	justify-content: center;

	svg g {
		fill: #1c819e;
	}

	svg g:hover {
		fill: #91ccdb;
		cursor: pointer;
	}

	svg g polygon {
		stroke: #d7d7d7;
		stroke-width: 0.3;
		transition: fill-opacity 0.5s;
	}

	svg g text {
		font-size: 0.13em;
		text-transform: uppercase;
		fill: #fff;
	}

	.hexBlue g {
		fill: #1c819e;
	}

	.hexGreen g {
		fill: #005542;
	}

	.hexYellow g {
		fill: #ffbe00;
	}
`;
