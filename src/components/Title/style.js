export const TitleStyle = styled.div`
	width: 300px;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	font-family: "Roboto", sans-serif;
	height: 40px;
	padding-top: 20px;

	.triangle {
		display: inline-block;
		height: 0;
		width: 0;
		border-bottom: 40px solid #fff;
		border-right: 40px solid transparent;
	}

	h2 {
		color: #005542;
		font-size: 2em;
		background-color: #fff;
		text-align: right;
		padding-top: 5px;
		padding-left: 10px;
		padding-right: 10px;
	}
`;
