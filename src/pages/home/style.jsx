import styled from "styled-components";
import { device } from "../../layout/Devices";

export const HomeContainer = styled.div`
  display: flex;
  margin-top: 10vh;
  @media ${device.mobile} {
    flex-direction: column;
  }
`;
