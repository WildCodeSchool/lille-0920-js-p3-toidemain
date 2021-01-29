import styled from 'styled-components';
import { device } from '../../layout/Devices';

export const Container = styled.div`
  margin-top: 5vh;
  @media ${device.mobile} {
  }
`;

export const Events = styled.div`
  width: 90%;
  margin: 10vh auto;
  padding-right: 6vw;

  ul {
    width: 40%;
    border: 2px solid;
    margin: 0 auto;
    border-top: none;
    border-bottom: 0.5px solid;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
  }
  @media ${device.mobile} {
    width: 95%;
    ul {
      width: 90%;
    }
  }
`;

export const Titl = styled.div`
  width: 40%;
  border: 2px solid;
  margin: 0 auto;
  background-color: #005542;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  h2 {
    font-size: 1.8rem;
    color: white;
    padding: 30px;
    margin-top: 2px;
    text-align: center;
    line-height: 40px;
  }
  @media ${device.mobile} {
    width: 90%;
    h2 {
      width: 88%;
      font-size: 1.3rem;
    }
  }
`;
