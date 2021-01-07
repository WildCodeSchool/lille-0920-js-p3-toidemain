import styled from "styled-components";

export const DriversStyle = styled.div`
	svg g {
		fill: #1c819e;
	}

	svg g:hover {
		fill: #91ccdb;
		cursor: pointer;
	}

	svg g polygon {
		stroke: transparent;
		stroke-width: 0.1;
		transition: fill-opacity 0.5s;
	}

	svg g text {
		font-family: "Roboto", sans-serif;
		font-size: 0.13em;
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
