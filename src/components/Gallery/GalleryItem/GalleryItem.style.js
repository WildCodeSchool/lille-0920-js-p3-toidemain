import styled from 'styled-components';
import { device } from '../../../layout/Devices';

export const Card = styled.div`
  font-family: 'Roboto', sans-serif;
  color: #02523f;
  width: 70%;
  height: 75vh;
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
    margin: 3vh 1vw;
  }
  @media ${device.mobile} {
    width: 95%;
    p,
    h2,
    h4 {
      margin-left: 4vw;
    }
    h2 {
      margin-top: 2vh;
    }
  }
`;
export const Img = styled.div`
  height: 55vh;
  width: 60%;
  margin: 1vh auto;
  padding: 3vh;
  img {
    width: 100%;
    height: 50vh;
    margin: 0 auto;
  }
  @media ${device.mobile} {
    width: 90%;
    height: 35vh;
  }
  img {
    width: 100%;
    height: 34vh;
    margin: 0 auto;
  }
`;
