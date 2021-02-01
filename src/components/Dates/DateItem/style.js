import styled from "styled-components";
import { device } from "../../../layout/Devices";

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  width: 90%;
  h3 {
    font-size: 1.5rem;
    color: #005542;
    padding: 4px;
  }
  .date {
    font-weight: bold;
    color: #1c819e;
    font-size: 1.2rem;
  }
  @media ${device.mobile} {
    width: 95%;
    h3 {
      font-size: 1.2rem;
      padding: 3px;
    }
    .date {
      font-size: 1rem;
    }
  }
  @media ${device.tablet} {
    width: 95%;
    h3 {
      font-size: 1.2rem;
      padding: 3px;
    }
    .date {
      font-size: 1rem;
    }
  }
  @media ${device.small_screen} {
    width: 75%;
    h3 {
      font-size: 1.2rem;
      padding: 3px;
    }
    .date {
      font-size: 1rem;
    }
  }
`;
