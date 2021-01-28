import styled from "styled-components";
import { device } from "../../../layout/Devices";

export const SliderDiv = styled.div`
  position: relative;
  height: 60vh;
  width: 50vw;
  margin: 0 auto;
  overflow: hidden;
  @media ${device.mobile} {
    height: 60vh;
    width: 90vw;
    margin-top: 2vh;
  }
  
`;
