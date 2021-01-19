import styled from "styled-components";
import { device } from "../../layout/Devices";

export const MainButton = styled.button`
  background-color: #ffbe00;
  border: solid 1px #ffbe00;
  border-radius: 10px 10px 10px 10px;
  color: #fff;
  font-size: 1.2em;
  line-height: 1.8em;
  letter-spacing: 1px;
  padding: 15px 10px 15px 10px;
  font-family: "Roboto", sans-serif;

  @media ${device.mobile} {
    font-size: 0.8em;
  }
  @media ${device.tablet} {
    font-size: 1em;
  }
`;

export const Span = styled.span`
  font-weight: bold;
`;
