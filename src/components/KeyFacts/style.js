import styled from "styled-components";

export const KeyFactsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Fact = styled.div`
  max-width: 15vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  * {
    margin: 0.5vh 0;
  }

  i {
    color: #ffbe00;
    font-size: 1.5em;
  }

  h2 {
    font-size: 1.5em;
    color: #005542;
  }
`;
