import styled from "styled-components";

export const Card = styled.div`
  margin: 5vh 3vw;
  padding: 2vh 2vw;
  min-width: 20vw;
  display: flex;
  flex-direction: column;
  background-color: #edf1f4;
  border-radius: 0.7em;
  text-align: justify;

  img {
    align-self: center;
    width: 90%;
    @media screen and (max-width: 768px) {
      width: 70%;
    }
  }

  * {
    margin: 0.5em 0;
  }
`;
