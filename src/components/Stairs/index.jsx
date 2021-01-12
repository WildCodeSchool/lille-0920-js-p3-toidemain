import React from "react";
import {
  Container,
  Title,
  Stairs,
  Box1,
  Box2,
  Box3,
  Box4,
  Box5,
  Box6,
} from "./style";

const AnimStairs = () => {
  return (
    <Container>
      <Stairs>
        <Box1>
          <p>S'INSPIRER</p>
        </Box1>
        <Box2>
          <p>SE CONNAITRE</p>
        </Box2>
        <Box3>
          <p>S'ORIENTER</p>
        </Box3>
        <Box4>
          <p>EXPERIMENTER</p>
        </Box4>
        <Box5>
          <p>SE CHALLENGER</p>
        </Box5>
        <Box6></Box6>
      </Stairs>
      <Title>S'épanouir en s'amusant</Title>
    </Container>
  );
};
export default AnimStairs;
