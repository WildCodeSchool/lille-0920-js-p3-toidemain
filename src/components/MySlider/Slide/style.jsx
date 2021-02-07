import styled from "styled-components";
import { device } from "../../../layout/Devices";

export const SlideDiv = styled.div`
  height: 100%;
  width: 100vw;
  background-image: url("${(props) => props.content}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media ${device.mobile} {
    height: 100%;

    margin-top: 0.5vh;
  }
  @media ${device.tablet} {
    height: 100%;
    width: 100vw;
    margin-top: 0.5vh;
  }
  @media ${device.small_screen} {
    height: 100%;
    width: 100vw;
    margin-top: 0.5vh;
  }
`;
