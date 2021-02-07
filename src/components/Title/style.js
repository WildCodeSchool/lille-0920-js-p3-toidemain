import styled from "styled-components";
import { device } from "../../layout/Devices";

const TitleStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-family: "Roboto", sans-serif;
  height: 40px;
  padding-top: 5vh;
  margin-left: 2vw;
  @media ${device.small_screen} {
    height: 35px;
  }
  @media ${device.tablet} {
    height: 30px;
    margin-left: 2vw;
  }
  @media ${device.mobile} {
    height: 25px;
    margin-left: 3vw;
  }

  .triangle {
    display: inline-block;
    height: 0;
    width: 0;
    border-bottom: 40px solid #fff;
    border-right: 40px solid transparent;
    @media ${device.small_screen} {
      border-bottom: 35px solid #fff;
      border-right: 35px solid transparent;
    }
    @media ${device.tablet} {
      border-bottom: 30px solid #fff;
      border-right: 30px solid transparent;
    }
    @media ${device.mobile} {
      border-bottom: 25px solid #fff;
      border-right: 25px solid transparent;
    }
  }

  h2 {
    color: #005542;
    font-size: 2em;
    background-color: #fff;
    padding-top: 4px;
    padding-left: 10px;
    padding-right: 10px;
    @media ${device.small_screen} {
      font-size: 1.8em;
      padding-top: 3px;
    }
    @media ${device.tablet} {
      font-size: 1.6em;
      padding-top: 2px;
    }
    @media ${device.mobile} {
      font-size: 1.4em;
      padding-top: 0px;
    }
  }
`;

export default TitleStyle;
