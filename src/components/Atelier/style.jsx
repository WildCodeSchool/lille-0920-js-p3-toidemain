import styled from "styled-components";
import { device } from "../../layout/Devices";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10vh;
  border: solid 1px blue;
  @media ${device.mobile} {
    flex-direction: column;
    align-items: center;
  }
  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  margin: 15px 0px 15px 35px;
  @media ${device.mobile} {
  justify-content: center;
  margin: 10px 10px 10px 10px;
  }
  @media ${device.tablet} {
  justify-content: center;
  margin: 10px 10px 10px 10px;
  }
`;

export const Image = styled.img`
  width:25vw;
  height: auto;
  
  box-shadow: 10px 5px 5px grey;
  @media ${device.mobile} {
    width:90%;
  }
  @media ${device.tablet} {
    width:90%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 5px 35px 5px 35px;
  border: solid 1px red;
  @media ${device.mobile} {
  width:90%;
  justify-content: center;
  padding: 5px 5px 5px 5px;
  }
  @media ${device.tablet} {
    width:90%;
  justify-content: center;
  padding: 5px 5px 5px 5px;
  }
`;

export const MainTitle = styled.h2`
  text-align: center;
  font-size: 1.5em;
  font-weight: 800;
  margin-top: 45px;
  margin-bottom: 45px;
  line-height: 1.5em;
`;

export const Paragraph = styled.p`
  text-align: justify;
  font-size: 1.5em;
  line-height: 1.5em;
`;

export const PromisesContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30%;
  background: #ffbe00;
  font-size: 1.5em;
  line-height: 35px;
  @media ${device.mobile} {
    width: 90%;
  }
  @media ${device.tablet} {
    width: 90%;
  }
`;

export const Promise = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 15px;
  padding-top: 15px;
  border-bottom: 1px white solid;
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  &:hover {
    -webkit-transform: scale(1.8);
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const Trait = styled.div``;
