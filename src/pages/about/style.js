import styled from "styled-components";

export const AboutContainer = styled.div`
  color: #4e4e4e;
  margin: 2vh 2vw;

  h1 {
    font-size: 2em;
    background-color: #1c819e;
    color: white;
    padding: 0.2em;
    margin-top: 3vh;
    text-transform: uppercase;
    display: inline-block;
    opacity: 0.8;
  }

  h2 {
    font-size: 1.5em;
    color: #005542;
    font-weight: bold;
    font-style: italic;
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
`;

export const PledgeBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5vh 10vw;
  padding: 1em;
  border-top: solid 5px #ffbe00;
  border-bottom: solid 5px #ffbe00;
  border-radius: 15px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  p {
    font-weight: bold;
    padding: 4vh 5vw;
    font-size: 1.2em;
    text-align: center;
  }

  span {
    color: #ffbe00;
    font-size: 1.2em;
  }

  img {
    width: 20vw;
    @media screen and (max-width: 768px) {
      width: 50vw;
    }
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
