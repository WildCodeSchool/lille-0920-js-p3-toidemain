import styled from "styled-components";
import { device } from "../../layout/Devices";

export const PageContainer = styled.div`
  margin-top: 4vh;
  margin-left: 1vw;
  @media ${device.mobile} {
    margin-top: 2vh;
  }
`;

export const H1 = styled.div`
  color: #005542;
  text-align: center;
  font-weight: bold;
  font-size: 2.2em;
  padding-bottom: 2vh;
  @media ${device.mobile} {
    font-size: 1.5em;
  }
`;

export const Trait = styled.div`
  border: solid 1px #005542;
  width: 80%;
  margin-left: 10vw;
  @media ${device.mobile} {
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  margin-top: 6vh;
  @media ${device.mobile} {
    flex-direction: column;
    margin-top: 3vh;
  }
  @media ${device.tablet} {
    flex-direction: column;
    margin-top: 3vh;
  }
  @media ${device.small_screen} {
    flex-direction: column;
    margin-top: 3vh;
  }
`;
