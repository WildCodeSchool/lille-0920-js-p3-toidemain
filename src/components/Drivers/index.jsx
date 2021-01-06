import React from "react";
import { HexGrid, Layout, Hexagon, Text, Pattern } from "react-hexgrid";
import { DriversStyle } from "./style";

export default function Drivers() {
	const hexagonSize = { x: 10, y: 10 };
	return (
		<DriversStyle>
			<h2>React Hexgrid v1</h2>
			<p>
				Constructing Hexgrid with component-based approach with custom SVG
				elements.
			</p>
			<HexGrid width={1600} height={800} viewBox="-50 -50 100 100">
				{/* Main grid with bit hexagons, all manual */}
				<Layout
					size={hexagonSize}
					flat={true}
					spacing={1}
					origin={{ x: 0, y: 0 }}
				>
					<Hexagon className="hexBlue" q={0} r={0} s={0}>
						<Text>1</Text>
					</Hexagon>
					<Hexagon className="hexYellow" q={-1} r={0} s={0}>
						<Text>S'ORIENTER</Text>
					</Hexagon>
					<Hexagon className="hexBlue" q={-2} r={0} s={0}>
						<Text>3</Text>
					</Hexagon>
					<Hexagon className="hexGreen" q={-2} r={1} s={0}>
						<Text>SE CONNAITRE</Text>
					</Hexagon>
					<Hexagon className="hexYellow" q={-2} r={2} s={0}>
						<Text>5</Text>
					</Hexagon>
					<Hexagon className="hexBlue" q={-3} r={2} s={0}>
						<Text>SE CHALLENGER</Text>
					</Hexagon>
					<Hexagon className="hexYellow" q={-3} r={1} s={0}>
						<Text>S'EPANOUIR</Text>
					</Hexagon>
					<Hexagon className="hexBlue" q={-4} r={1} s={0}>
						<Text>S'AMUSER</Text>
					</Hexagon>
					<Hexagon className="hexGreen" q={-4} r={2} s={0}>
						<Text>9</Text>
					</Hexagon>
					<Hexagon className="hexYellow" q={-4} r={3} s={0}>
						<Text>S'INSPIRER</Text>
					</Hexagon>
					<Hexagon className="hexBlue" q={-5} r={3} s={0}>
						<Text>EXPERIMENTER</Text>
					</Hexagon>
					<Hexagon className="hexYellow" q={-6} r={3} s={0}>
						<Text>12</Text>
					</Hexagon>
				</Layout>
				{/* You can define multiple patterns and switch between them with "fill" prop on Hexagon */}
				<Pattern
					id="pat-1"
					link="http://lorempixel.com/400/400/cats/1/"
					size={hexagonSize}
				/>
				<Pattern
					id="pat-2"
					link="http://lorempixel.com/400/400/cats/2/"
					size={hexagonSize}
				/>
				<g>
					<circle cx="50" cy="0" r="10">
						<Text>12</Text>
					</circle>
				</g>
				<g>
					<circle cx="50" cy="30" r="8" />
				</g>
				<g>
					<circle cx="45" cy="20" r="6" />
				</g>
				<g>
					<circle cx="65" cy="15" r="3" />
				</g>
				<g>
					<circle cx="65" cy="15" r="3" />
				</g>
			</HexGrid>
		</DriversStyle>
	);
}
