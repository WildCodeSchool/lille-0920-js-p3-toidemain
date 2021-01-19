import styled from "styled-components";

export const DriversStyle = styled.div`
  background-image: url(/images/animated_background.svg);
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: center;

  svg g {
    fill: #1c819e;
    border: 1px solid red;
  }

  svg g:hover {
    fill: #91ccdb;
    cursor: pointer;
  }

  svg g polygon {
    stroke: #d7d7d7;
    stroke-width: 0.5;
    transition: fill-opacity 0.5s;
  }

  svg g text {
    font-size: 0.13em;
    text-transform: uppercase;
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
