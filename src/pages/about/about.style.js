import styled from "styled-components";

export const AboutContainer = styled.div`
  color: #4e4e4e;
  margin: 2vh 2vw;

  h1 {
    font-size: 2em;
    color: #1c819e;
    font-weight: bold;
  }

  h2 {
    font-size: 1.5em;
    color: #005542;
    font-weight: bold;
  }

  h3 {
    font-size: 1.1em;
    color: #005542;
    font-weight: bold;
  }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 5vw;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
