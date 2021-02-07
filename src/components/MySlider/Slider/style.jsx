import styled from "styled-components";
import { device } from "../../../layout/Devices";

export const SliderDiv = styled.div`
  position: relative;
  height: 70vh;
  margin: 0 auto;
  overflow: hidden;
  margin-left: 20px;
  margin-right: 20px;
  @media ${device.mobile} {
    height: 60vh;
    width: 90vw;
    margin-top: 2vh;

  }
  @media ${device.tablet} {
    height: 60vh;
    width: 90vw;
    margin-top: 2vh;
  }
  @media ${device.small_screen} {
    height: 60vh;
    width: 90vw;
    margin-top: 2vh;
  }
`;
