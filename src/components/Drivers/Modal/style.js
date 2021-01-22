import styled from "styled-components";
import { device } from "../../../layout/Devices";

export const ModalStyle = styled.div`
  position: absolute;
  max-width: 360px;
  font-family: "Roboto", sans-serif;
  font-size: 1.3em;
  color: #fff;
  text-align: left;
  padding: 20px;
  margin-top: 50px;
  background: #91ccdb;
  border-radius: 40px 40px 0px 40px;
  border: 5px solid #d7d7d7;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
  @media ${device.minTablet} {
    margin-top: 30px;
    font-size: 1.1em;
    padding: 15px;
  }

  li {
    padding: 5px;
  }
`;
