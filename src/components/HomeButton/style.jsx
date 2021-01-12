import styled from "styled-components";
import { device } from "../../layout/Devices";

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  font-size: 1.8em;
  color: white;
  width: 25vw;
  @media ${device.mobile} {
    width: 90%;
  }
`;

export const Title = styled.h1`
  color: #005542;
  text-align: left;
  line-height: 2em;
  width: 85%;
`;

export const ContainerEntreprise = styled.div`
  background-color: #005542;
  border-top-left-radius: 10px;
  padding: 25px 5px 5px 15px;
  margin-bottom: 2px;
  height: 8%;
  width: 80%;
`;

export const ContainerEnseignant = styled.div`
  background-color: #1c819e;
  padding: 25px 5px 5px 15px;
  margin-bottom: 2px;
  height: 8%;
  width: 80%;
`;

export const ContainerLyceen = styled.div`
  background-color: #ffbe00;
  border-bottom-left-radius: 10px;
  padding: 25px 5px 5px 15px;
  height: 8%;
  width: 80%;
`;