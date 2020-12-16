import styled from "styled-components";

export const NavContainer = styled.div`
	position: absolute;
	top: 65%;
	z-index: 2;
	height: 35%;
	width: 70%;
	margin: 0 15% 0 15%;
	background: #ffbe00;
	border-radius: 5px;
	box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.05);
`;

export const NavLinks = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	nav {
		width: 100%;
	}

	li {
		text-transform: uppercase;
		vertical-align: middle;
		justify-content: space-around;
		font-family: "Roboto", sans-serif;
		font-size: 1.2em;
		display: inline-block;
		list-style: none;
		color: white;
		margin-top: 20px;
		margin-left: 55px;
		margin-right: 55px;
	}

	li:hover {
		color: #005542;
	}
`;
