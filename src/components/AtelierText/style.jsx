import styled from "styled-components";
import { device } from "../../layout/Devices";

export const TextContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 40%;
  height: auto;
  z-index: 2;
  @media ${device.mobile} {
    width: 98%;
    height: 10%;
    margin-top: 2px;
    font-size: 1.5em;
  }
  @media ${device.tablet} {
    width: 98%;
    height: 10%;
    margin-top: 2px;
  }
  @media ${device.small_screen} {
    width: 98%;
    height: 10%;
    margin-top: 2px;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    width: 98%;
    height: 10%;
    margin-top: 2px;
  }
  @media only screen and (min-width: 1281px) {
  }
  p {
    font-family: "Roboto", sans-serif;
    font-size: 2em;
    color: #005542;
    text-align: justify;
    line-height: 2em;
    background-color: transparent;
    padding-right: 30px;
    padding-left: 30px;
    font-weight: 500;
    @media ${device.mobile} {
      font-size: 1em;
    }
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    font-size: 0.8em;
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
    border-top: 3px solid #005542;
    border-right: 3px solid #005542;
  }

  &.bottom {
    border-bottom: 3px solid #005542;
    border-left: 3px solid #005542;
  }
`;

export const Span = styled.span`
  color: #ffbe00;
`;
