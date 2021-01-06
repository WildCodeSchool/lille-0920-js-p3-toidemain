import React from "react";
import { HexGrid, Layout, Hexagon, Text, Pattern } from "react-hexgrid";
import { DriversStyle } from "./style";

export default function Drivers() {
	const hexagonSize = { x: 10, y: 10 };
	return (
		<DriversStyle>
			<HexGrid width={1600} height={800} viewBox="-50 -50 100 100">
				{/* Main grid with bit hexagons, all manual */}
				<Layout
					size={hexagonSize}
					flat={true}
					spacing={1}
					origin={{ x: 0, y: 0 }}
				>
					<Hexagon className="hexBlue" q={0} r={0} s={0} fill="pat-1"></Hexagon>
					<Hexagon className="hexYellow" q={-1} r={0} s={0}>
						<Text>S'ORIENTER</Text>
					</Hexagon>
					<Hexagon
						className="hexBlue"
						q={-2}
						r={0}
						s={0}
						fill="pat-3"
					></Hexagon>
					<Hexagon className="hexGreen" q={-2} r={1} s={0}>
						<Text>SE CONNAITRE</Text>
					</Hexagon>
					<Hexagon
						className="hexYellow"
						q={-2}
						r={2}
						s={0}
						fill="pat-5"
					></Hexagon>
					<Hexagon className="hexBlue" q={-3} r={2} s={0}>
						<Text>SE CHALLENGER</Text>
					</Hexagon>
					<Hexagon className="hexYellow" q={-3} r={1} s={0}>
						<Text>S'EPANOUIR</Text>
					</Hexagon>
					<Hexagon className="hexBlue" q={-4} r={1} s={0}>
						<Text>S'AMUSER</Text>
					</Hexagon>
					<Hexagon
						className="hexGreen"
						q={-4}
						r={2}
						s={0}
						fill="pat-9"
					></Hexagon>
					<Hexagon className="hexYellow" q={-4} r={3} s={0}>
						<Text>S'INSPIRER</Text>
					</Hexagon>
					<Hexagon className="hexBlue" q={-5} r={3} s={0}>
						<Text>EXPERIMENTER</Text>
					</Hexagon>
					<Hexagon
						className="hexYellow"
						q={-6}
						r={3}
						s={0}
						fill="pat-12"
					></Hexagon>
				</Layout>
				{/* You can define multiple patterns and switch between them with "fill" prop on Hexagon */}
				<Pattern id="pat-1" link="images/mission.png" size={hexagonSize} />
				<Pattern id="pat-3" link="images/game.png" size={hexagonSize} />
				<Pattern id="pat-5" link="images/idea.png" size={hexagonSize} />
				<Pattern id="pat-9" link="images/vision.png" size={hexagonSize} />
				<Pattern id="pat-12" link="images/compas.png" size={hexagonSize} />
			</HexGrid>
		</DriversStyle>
	);
}
