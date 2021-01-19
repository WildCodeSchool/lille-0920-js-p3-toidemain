import React, { useState } from "react";
import { HexGrid, Layout, Hexagon, Text, Pattern } from "react-hexgrid";
import { DriversStyle } from "./style";
import Modal from "./Modal/index";
import Title from "../../components/Title/index";
import driverItems from "./Modal/Data";

export default function Drivers() {
  const [isOpen, setIsOpen] = useState(false);
  const [hexaNumber, sethexaNumber] = useState(0);

  const hexagonSize = { x: 10, y: 10 };

  return (
    <DriversStyle>
      <Title titleName={"Nos 7 Drivers"} />
      <HexGrid width={1200} height={700} viewBox="-85 -60 80 80">
        <Layout
          size={hexagonSize}
          flat={true}
          spacing={1}
          origin={{ x: -0, y: -20 }}
        >
          <Hexagon className="hexBlue" q={0} r={0} s={0} fill="pat-1"></Hexagon>
          <Hexagon
            className="hexYellow"
            q={-1}
            r={0}
            s={0}
            onMouseEnter={() => {
              setIsOpen(true);
              sethexaNumber(0);
            }}
            onMouseLeave={() => setIsOpen(false)}
          >
            <Text>S'orienter</Text>
          </Hexagon>
          <Hexagon
            className="hexBlue"
            q={-2}
            r={0}
            s={0}
            fill="pat-3"
          ></Hexagon>
          <Hexagon
            className="hexGreen"
            q={-2}
            r={1}
            s={0}
            onMouseEnter={() => {
              setIsOpen(true);
              sethexaNumber(1);
            }}
            onMouseLeave={() => setIsOpen(false)}
          >
            <Text>Se connaître</Text>
          </Hexagon>
          <Hexagon
            className="hexYellow"
            q={-2}
            r={2}
            s={0}
            fill="pat-5"
          ></Hexagon>
          <Hexagon
            className="hexBlue"
            q={-3}
            r={2}
            s={0}
            onMouseEnter={() => {
              setIsOpen(true);
              sethexaNumber(2);
            }}
            onMouseLeave={() => setIsOpen(false)}
          >
            <Text>Se challenger</Text>
          </Hexagon>
          <Hexagon
            className="hexYellow"
            q={-3}
            r={1}
            s={0}
            onMouseEnter={() => {
              setIsOpen(true);
              sethexaNumber(3);
            }}
            onMouseLeave={() => setIsOpen(false)}
          >
            <Text>S'épanouir</Text>
          </Hexagon>
          <Hexagon
            className="hexBlue"
            q={-4}
            r={1}
            s={0}
            onMouseEnter={() => {
              setIsOpen(true);
              sethexaNumber(4);
            }}
            onMouseLeave={() => setIsOpen(false)}
          >
            <Text>S'amuser</Text>
          </Hexagon>
          <Hexagon
            className="hexGreen"
            q={-4}
            r={2}
            s={0}
            fill="pat-9"
          ></Hexagon>
          <Hexagon
            className="hexYellow"
            q={-4}
            r={3}
            s={0}
            onMouseEnter={() => {
              setIsOpen(true);
              sethexaNumber(5);
            }}
            onMouseLeave={() => setIsOpen(false)}
          >
            <Text>S'inspirer</Text>
          </Hexagon>
          <Hexagon
            className="hexBlue"
            q={-5}
            r={3}
            s={0}
            onMouseEnter={() => {
              setIsOpen(true);
              sethexaNumber(6);
            }}
            onMouseLeave={() => setIsOpen(false)}
          >
            <Text>Expérimenter</Text>
          </Hexagon>
          <Hexagon
            className="hexYellow"
            q={-6}
            r={3}
            s={0}
            fill="pat-12"
          ></Hexagon>
        </Layout>
        <Pattern id="pat-1" link="images/mission.png" size={hexagonSize} />
        <Pattern id="pat-3" link="images/game.png" size={hexagonSize} />
        <Pattern id="pat-5" link="images/idea.png" size={hexagonSize} />
        <Pattern id="pat-9" link="images/vision.png" size={hexagonSize} />
        <Pattern id="pat-12" link="images/compas.png" size={hexagonSize} />
      </HexGrid>

      {isOpen && <Modal driverItems={driverItems[hexaNumber]} />}
    </DriversStyle>
  );
}
