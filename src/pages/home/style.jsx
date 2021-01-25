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

export const H1=styled.div`
  color: #005542;
  text-align: center;
  font-weight: bold;
  font-size: 2.2em;
  padding-bottom: 2vh;
  `;

  export const Trait=styled.div`
  border: solid 1px #005542;
  width: 80%;
  margin-left: 10vw;
  `;
