import styled from "styled-components";
import { device } from "../../layout/Devices";
import { Link } from "react-router-dom";

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 1;
  @media ${device.mobile} {
    margin-right: 5px;
    margin-bottom: 5px;
  }
  @media ${device.tablet} {
    margin-right: 5px;
    margin-bottom: 5px;
  }
  @media ${device.small_screen} {
    margin-bottom: 30px;
    margin-right: 5px;
  }
  p {
    font-family: "Roboto", sans-serif;
    font-size: 1.3em;
    color: #005542;
    text-align: center;
    line-height: 2em;
    background-color: transparent;
    padding-right: 30px;
    padding-left: 30px;
    @media ${device.mobile} {
      font-size: 0.8em;
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
    border-top: 3px solid #005542;
    border-right: 3px solid #005542;
  }

  &.bottom {
    border-bottom: 3px solid #005542;
    border-left: 3px solid #005542;
  }
`;

export const Path = styled(Link)`
  color: #005542;
  border: solid 1px #005542;
  &:hover {
    color: #1c819e;
  }
`;
