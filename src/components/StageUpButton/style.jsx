import styled from "styled-components";
import { device } from "../../layout/Devices";
import { Link } from "react-router-dom";

export const MainButton = styled.button`
  background-color: #005542;
  border: solid 1px #005542;
  border-radius: 10px 10px 10px 10px;
  color: #fff;
  font-size: 1.2em;
  line-height: 2.5em;
  letter-spacing: 1px;
  padding: 15px 10px 15px 10px;
  font-family: "Roboto", sans-serif;
  margin-top: 2vh;
  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.7em;
    letter-spacing: 1px;
    padding: 5px 5px 5px 5px;
    margin-top: 20px;
  }
  @media ${device.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1em;
    letter-spacing: 1px;
    padding: 10px 5px 10px 5px;
    margin-top: 15px;
  }
`;

export const Span = styled.span`
  font-weight: bold;
  color: #fff;
  border: solid white 1px;
  padding: 8px 8px 8px 8px;
  &:link {
    text-decoration: none;
  }
`;

export const Path = styled(Link)`
  text-decoration: none;
`;
