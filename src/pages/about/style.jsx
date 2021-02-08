import styled from "styled-components";

export const AboutContainer = styled.div`
  color: #4e4e4e;

  h1 {
    font-size: 2em;
    background-color: #1c819e;
    color: white;
    padding: 0.2em;
    margin-top: 3vh;
    text-transform: uppercase;
    display: inline-block;
    opacity: 0.7;
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

  h5 {
    font-size: 1.7em;
    color: #ffbe00;
    font-weight: bold;
    font-style: italic;
    margin-left: 2vw;
  }
`;

export const PledgeBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3vh 10vw;
  padding: 1em;
  border-top: solid 5px #ffbe00;
  border-bottom: solid 5px #ffbe00;
  border-radius: 15px;
  font-family: "Roboto", sans-serif;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  img {
    width: 30vw;
    @media screen and (max-width: 768px) {
      width: 60vw;
    }
  }
`;

export const CommitmentDiv = styled.div`
  font-weight: bold;
  padding: 2vh 3vw;
  text-align: left;
  line-height: 1.2em;

  span {
    color: #ffbe00;
    font-size: 1.1em;
  }

  li {
    line-height: 1.5em;
  }

  li:before {
    content: "\f105";
    font-family: "Font Awesome 5 Free";
    display: inline-block;
    width: 1.3em;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
