import React from "react";
import TitleStyle from "./style";

const Title = ({ titleName }) => {
  return (
    <TitleStyle>
      <h2>{titleName}</h2>
      <div class="triangle"></div>
    </TitleStyle>
  );
};

export default Title;
