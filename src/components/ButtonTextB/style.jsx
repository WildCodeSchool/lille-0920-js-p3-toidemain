import styled from "styled-components";
import { device } from "../../layout/Devices";

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 2;
  @media ${device.mobile} {
    margin-right: 5px;
    margin-top: 5px;
  }
  @media ${device.tablet} {
    margin-right: 5px;
    margin-top: 5px;
  }
  @media ${device.small_screen} {
    margin-right: 5px;
    margin-top: 5px;
  }
  p {
    font-family: "Roboto", sans-serif;
    font-size: 1.6em;
    color: #1c819e;
    text-align: justify;
    line-height: 150%;
    background-color: transparent;
    padding-right: 30px;
    padding-left: 30px;
    @media ${device.mobile} {
      font-size: 1em;
    }
    @media ${device.tablet} {
      font-size: 1.3em;
    }
  }
`;

export const CornerContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px;
  width: 100%;
  justify-content: flex-start;
  &.top {
    justify-content: flex-end;
  }
`;

export const Corner = styled.div`
  width: 30px;
  height: 30px;
  &.top {
    border-top: 3px solid #1c819e;
    border-right: 3px solid #1c819e;
  }
  &.bottom {
    border-bottom: 3px solid #1c819e;
    border-left: 3px solid #1c819e;
  }
`;
