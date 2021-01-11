import styled from "styled-components";
import { device } from "../../layout/Devices";

export const HomeContainer = styled.div`
  display: flex;
  @media ${device.mobile} {
    flex-direction: column;
  }
`;
