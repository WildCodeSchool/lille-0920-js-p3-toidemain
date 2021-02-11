import React from "react";
import Dates from "../../components/Dates/index";
import Gallery from "../../components/Gallery";
import { Container } from "./style";

const Actualite = () => {
  return (
    <Container>
      <Dates />
      <Gallery />
    </Container>
  );
};

export default Actualite;
