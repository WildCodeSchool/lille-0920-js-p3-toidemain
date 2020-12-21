import styled from "styled-components";
import { device } from "../../layout/Devices";

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: center;
  height: 200px;
  width: 100%;
  background: #e6e6e6;

  @media ${device.small_screen} {
    height: 140px;
  }

  @media ${device.tablet} {
    height: 140px;
  }

  @media ${device.mobile} {
    height: 80px;
  }
`;

export const TopBorder = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background: #1c819e;
  height: 30px;
  width: 100%;

  @media ${device.small_screen} {
    height: 25px;
  }

  @media ${device.tablet} {
    height: 25px;
  }

  @media ${device.mobile} {
    height: 20px;
  }

  p {
    font-family: "Roboto", sans-serif;
    font-size: 0.8em;
    color: #fff;
    margin-right: 20px;

    @media ${device.small_screen} {
      font-size: 0.7em;
      margin-right: 10px;
    }
    @media ${device.tablet} {
      font-size: 0.7em;
      margin-right: 10px;
    }

    @media ${device.mobile} {
      font-size: 0.6em;
      margin-right: 20px;
      margin-right: 5px;
    }
  }
`;

export const HeaderBackground = styled.div`
  position: absolute;
  top: 30px;
  display: flex;
  justify-content: space-between;
  background: #fff;
  height: 145px;
  width: 100%;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);

  @media ${device.small_screen} {
    height: 100px;
    top: 25px;
  }

  @media ${device.tablet} {
    height: 100px;
    top: 25px;
  }

  @media ${device.mobile} {
    height: 55px;
    top: 20px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 145px;
  width: 15%;
  border: 1px solid red;

  @media ${device.small_screen} {
    height: 100px;
  }

  @media ${device.tablet} {
    margin-left: 20px;
    height: 100px;
    width: auto;
  }

  @media ${device.mobile} {
    margin-left: 20px;
    height: 55px;
    width: auto;
  }

  img {
    width: auto;
    max-height: 120px;
    margin: auto;

    @media ${device.desktop} {
      max-width: 14vw;
    }

    @media ${device.small_screen} {
      max-height: 140px;
      width: 80%;
    }

    @media ${device.tablet} {
      height: 90px;
      width: auto;
    }

    @media ${device.mobile} {
      height: 50px;
      width: auto;
    }
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 70%;

  @media ${device.tablet} {
    display: none;
  }

  @media ${device.mobile} {
    display: none;
  }

  img {
    margin-top: 48px;
    height: 20%;
    margin-right: 10px;
    margin-left: 40px;

    @media ${device.small_screen} {
      height: 20%;
      margin-top: 25px;
    }
  }

  p {
    margin-top: 50px;
    height: 20%;
    margin-right: 20px;
    font-family: "Roboto", sans-serif;
    font-size: 1.5em;
    color: #cfd7d6;

    @media ${device.small_screen} {
      font-size: 1.2em;
      margin-top: 25px;
    }
  }
`;
