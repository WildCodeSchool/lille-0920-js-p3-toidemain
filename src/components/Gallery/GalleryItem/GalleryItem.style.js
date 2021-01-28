import styled from 'styled-components';

export const Card = styled.div`
  font-family: 'Roboto', sans-serif;
  color: #02523f;
  width: 70%;
  height: 68vh;
  display: flex;
  margin: 5vh auto;
  flex-direction: column;
  border: 5px solid;
  border-radius: 20px;

  h2,
  h4 {
    width: 60%;
    margin: 1vh 1vw;
  }
  h2 {
    font-size: 2rem;
    color: #1c819e;
  }
  h4 {
    font-size: 1.2rem;
  }
  p {
    font-size: 1.5rem;
    margin: 4vh 1vw;
  }
`;
export const Img = styled.div`
  height: 65%;
  width: 60%;
  margin: 1vh auto;
  padding: 3vh;
  img {
    width: 100%;
    height: 37vh;
  }
`;
export const Slid = styled.div``;

export const Col = styled.div``;
