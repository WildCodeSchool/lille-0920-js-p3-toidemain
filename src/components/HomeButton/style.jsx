import styled from "styled-components";
import { device } from "../../layout/Devices";

export const ButtonContainer = styled.div`
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  font-family: "Roboto", sans-serif;
  font-size: 1.4em;
  color: white;
  @media ${device.mobile} {
    width: 90%;
    font-size: 1.1em;
    margin-top: 3vh;
  }
  @media ${device.tablet} {
    width: 80%;
    font-size: 1.3em;
  }
  @media ${device.small_screen} {
    width: 90%;
    font-size: 1.3em;
    margin-top: 1vh;
  }
`;

export const Title = styled.h1`
  width: 85%;
  color: #005542;
  text-align: left;
  line-height: 2em;
`;

export const ContainerEntreprise = styled.div`
  width: 100%;
  height: 10%;
  background-color: #005542;
  border-top-left-radius: 10px;
  padding: 2px 5px 2px 2px;
  margin-bottom: 2px;
  @media ${device.tablet} {
    width: 80%;
    font-size: 1.3em;
  }
`;

export const Button1 = styled.button`
  width: 100%;
  height: 100%;
  background-color: #005542;
  border: #005542;
  border-top-left-radius: 10px;
  color: #fff;
  font-size: 1em;
  font-family: "Roboto", sans-serif;
  outline: none;
  cursor: pointer;
  &:hover {
    -webkit-transform: scale(1.8);
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const ContainerEnseignant = styled.div`
  width: 100%;
  height: 10%;
  background-color: #1c819e;
  padding: 2px 5px 2px 2px;
  margin-bottom: 2px;
  @media ${device.tablet} {
    width: 80%;
    font-size: 1.3em;
  }
`;

export const Button2 = styled.button`
  width: 100%;
  height: 100%;
  background-color: #1c819e;
  border: #1c819e;
  color: #fff;
  font-size: 1em;
  font-family: "Roboto", sans-serif;
  outline: none;
  cursor: pointer;
  &:hover {
    -webkit-transform: scale(1.8);
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const ContainerLyceen = styled.div`
  width: 100%;
  height: 10%;
  background-color: #ffbe00;
  border-bottom-left-radius: 10px;
  padding: 2px 5px 2px 2px;
  @media ${device.tablet} {
    width: 80%;
    font-size: 1.3em;
  }
`;

export const Button3 = styled.button`
  width: 100%;
  height: 100%;
  background-color: #ffbe00;
  border: #ffbe00;
  border-bottom-left-radius: 10px;
  color: #fff;
  font-size: 1em;
  outline: none;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  &:hover {
    -webkit-transform: scale(1.8);
    transform: scale(1.1);
    cursor: pointer;
  }
`;
