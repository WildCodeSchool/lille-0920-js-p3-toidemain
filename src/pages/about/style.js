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
    margin-bottom: 5vh;
  }

  h3 {
    font-size: 1.2em;
    color: #ffbe00;
    font-weight: bold;
  }

  h4 {
    font-size: 1.1em;
    color: #005542;
    font-weight: bold;
  }
`;

export const Pledge = styled.div`
  margin: 5vh 0;

  p {
    font-weight: bold;
    margin: 2vh 5vw;
    font-size: 1.2em;
    text-align: justify;
  }

  span {
    color: #ffbe00;
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

export const Partners = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  img {
    width: 15vw;
    height: 15vh;
    object-fit: contain;
    margin: 2vh 5vw;
    @media screen and (max-width: 768px) {
      width: 60vw;
    }
  }
`;
