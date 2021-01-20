import styled from "styled-components";
import { device } from "../../layout/Devices";

export const MainButton = styled.button`
  background-color: #1c819e;
  border: solid 1px #1c819e;
  border-radius: 10px 10px 10px 10px;
  color: #fff;
  font-size: 1.2em;
  line-height: 2em;
  letter-spacing: 1px;
  padding: 15px 10px 15px 10px;
  @media ${device.mobile} {
    font-size: 0.6em;
  }
  @media ${device.tablet} {
    font-size: 0.8em;
  }
`;
