import styled from "styled-components";
import { device } from "../../layout/Devices";

export const KeyFactsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 8vh;
  @media ${device.mobile} {
    flex-direction: column;
    font-size: 1.1em;
    margin-top: 3vh;
    justify-content: center;
    text-align: center;
  }
`;

export const Fact = styled.div`
  max-width: 15vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media ${device.mobile} {
    flex-direction: row;
    align-items: space-around;
    justify-content: space-around;
    font-size: 1.1em;
    margin-top: 3vh;
    max-width: 100%;
  }

  * {
    margin: 0.5vh 0;
  }

  i {
    color: #ffbe00;
    font-size: 1.8em;
    @media ${device.mobile} {
    font-size: 1.6em;
  }
    
  }

  h2 {
    font-size: 1.8em;
    color: #005542;
    @media ${device.mobile} {
    font-size: 1em;
  }
  }

  p {
    @media ${device.mobile} {
    font-size: 0.8em;
  }
  }
`;
