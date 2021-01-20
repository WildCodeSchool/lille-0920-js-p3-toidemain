import styled from "styled-components";
import { device } from "../../layout/Devices";

export const HomeContainer = styled.div`
  display: flex;
  margin-top: 6vh;
  @media ${device.mobile} {
    flex-direction: column;
  }
`;

export const ColonneA = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 2vw;
  margin-right: 2vw;
`;

export const PageContainer=styled.div`
    margin-top: 4vh;
    `;
