import styled from "styled-components";
import { device } from "../../layout/Devices";

export const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: center;
  height: 20vh;
  width: 100vw;
  background: #e6e6e6;
`;

export const TopBorder = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background: #1c819e;
  height: 20%;
  width: 100%;

  p {
    font-family: "Roboto", sans-serif;
    font-size: 0.8em;
    color: #fff;
    margin-right: 20px;

    @media ${device.mobile} {
      font-size: 0.6em;
    }

    @media ${device.tablet} {
      font-size: 0.7em;
    }
  }
`;

export const HeaderBackground = styled.div`
  position: absolute;
  top: 20%;
  display: flex;
  justify-content: space-between;
  background: #fff;
  height: 70%;
  width: 100%;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.05);
`;

export const LogoContainer = styled.div`
  display: flex;
  width: 15%;

  img {
    margin: auto;
    width: 62%;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 70%;

  img {
    margin-top: 27px;
    height: 20%;
    margin-right: 10px;
    margin-left: 40px;

    @media ${device.mobile} {
      margin-top: 8px;
      margin-right: 5px;
      margin-left: 0px;
      height: 12%;
    }

    @media ${device.tablet} {
      height: 18%;
      margin-left: 20px;
    }
  }

  p {
    margin-top: 30px;
    height: 20%;
    margin-right: 20px;
    font-family: "Roboto", sans-serif;
    font-size: 1.2em;
    color: #cfd7d6;

    @media ${device.mobile} {
      margin-top: 8px;
      font-size: 0.8em;
    }

    @media ${device.tablet} {
      font-size: 1em;
    }
  }
`;
