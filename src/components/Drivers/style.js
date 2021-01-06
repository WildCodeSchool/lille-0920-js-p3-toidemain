import styled from "styled-components";

export const DriversStyle = styled.div`
	svg {
	}

	svg g {
		fill: #1c819e;
	}

	svg g:hover {
		fill: #91ccdb;
		size: 150px;
	}
	svg g:hover text {
		fill-opacity: 1;
	}

	svg g polygon {
		stroke: transparent;
		stroke-width: 0.2;
		transition: fill-opacity 0.5s;
	}
	svg g text {
		font-family: "Roboto", sans-serif;
		font-size: 0.13em;
		fill: #fff;
		transition: fill-opacity 0.5s;
	}

	svg g text a {
		font-family: "Roboto", sans-serif;
		fill: #fff;
	}

	svg path {
		fill: none;
		stroke: #7be3f6;
		stroke-width: 0.2em;
		stroke-opacity: 0.7;
		stroke-linecap: round;
		stroke-linejoin: round;
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
