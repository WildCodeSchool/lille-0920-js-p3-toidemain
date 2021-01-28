import styled from "styled-components";
import { device } from "../../layout/Devices";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 5vh;
  margin-bottom: 5vh;
  font-family: "Roboto", sans-serif;
  @media ${device.mobile} {
    flex-direction: column;
    align-items: center;
  }
  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
  }
  @media ${device.small_screen} {
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Image = styled.img`
  max-width: 3024px;
  max-height: 3532px;
  width: 40%;
  height: auto;
  box-shadow: 10px 5px 5px grey;
  margin: 15px 0px 15px 35px;
  @media ${device.mobile} {
    width: 90%;
    height: auto;
    justify-content: center;
    margin: 10px 10px 10px 10px;
  }
  @media ${device.tablet} {
    width: 95%;
    height: auto;
    justify-content: center;
    margin: 10px 10px 10px 10px;
  }
  @media ${device.small_screen} {
    width: 90%;
    height: auto;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    width: 90%;
    height: auto;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: auto;
  padding: 5px 35px 5px 35px;
  @media ${device.mobile} {
    width: 90%;
    justify-content: center;
    padding: 5px 5px 15px 5px;
  }
  @media ${device.tablet} {
    width: 90%;
    justify-content: center;
    padding: 5px 5px 15px 5px;
  }
  @media ${device.small_screen} {
    width: 90%;
    justify-content: center;
    padding: 5px 5px 15px 5px;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    width: 90%;
    justify-content: center;
    padding: 5px 5px 15px 5px;
  }
`;

export const Paragraph = styled.p`
  text-align: justify;
  font-size: 1.5em;
  line-height: 1.5em;
  color: #005542;
  line-height: 2em;
`;

export const PromisesContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 40%;
  background: #ffbe00;
  font-size: 1.5em;
  line-height: 35px;
  font-family: "Roboto", sans-serif;
  @media ${device.mobile} {
    width: 90%;
  }
  @media ${device.tablet} {
    width: 90%;
  }
  @media ${device.small_screen} {
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

export const SpanA = styled.span`
  color: #ffbe00;
`;

export const SpanB = styled.span`
  color: #ffbe00;
`;

export const PromiseImg = styled.img`
  width: 30px;
`;

export const Path = styled(Link)`
  color: #005542;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  margin-top: 2vh;
  width: 100%;
  @media ${device.mobile} {
    flex-direction: column-reverse;
  }
  @media ${device.tablet} {
    flex-direction: column-reverse;
  }
  @media ${device.small_screen} {
    flex-direction: column-reverse;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    flex-direction: column-reverse;
  }
  @media only screen and (min-width: 1281px) {
  }
`;
