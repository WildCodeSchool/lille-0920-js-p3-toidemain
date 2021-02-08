import styled from 'styled-components';
import { device } from '../../layout/Devices';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #005542 no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  padding-top: 3vh;
  @media ${device.small_screen} {
    padding-top: 2vh;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  width: 100%;
  min-height: 15vh;
  max-height: 30vh;

  @media ${device.mobile} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 25vh;
    max-height: 50vh;
  }
  @media ${device.tablet} {
    min-height: 13vh;
    max-height: 80vh;
  }
  @media ${device.small_screen} {
    min-height: 12vh;
    max-height: 40vh;
  }
`;
export const InfoContainer = styled.div`
  min-height: 15vh;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  h3 {
    text-align: center;
    font-size: 22px;
    margin: 1vh auto;
  }
  img {
    width: auto;
    height: 24px;
  }
  p {
    text-align: center;
    font-size: 16px;
    padding-left: 10px;
  }
  @media ${device.mobile} {
    h3 {
      font-size: 24px;
    }
    img {
      width: auto;
      height: 18px;
    }
    p {
      font-size: 18px;
    }
  }
  @media ${device.tablet} {
    min-height: 13vh;
    h3 {
      font-size: 20px;
    }
    img {
      width: auto;
      height: 20px;
      margin-left: 5px;
    }
    p {
      font-size: 14px;
    }
  }
  @media ${device.small_screen} {
    min-height: 12vh;
  }
`;
export const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 1vh;
  @media ${device.mobile} {
    justify-content: center;
  }
`;

export const Menu = styled.div`
  min-height: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  p {
    color: white;
    padding-top: 2vh;
  }
  @media ${device.mobile} {
    min-height: 5vh;
    p {
      padding-top: 0;
      text-align: center;
    }
    a {
      font-size: 18px;
      margin-bottom: 1vh;
    }
  }
  @media ${device.tablet} {
    min-height: 13vh;
    a {
      font-size: 18px;
      margin-bottom: 1vh;
    }
    p {
      font-size: 14px;
      padding-bottom: 1vh;
      text-align: center;
    }
  }
  @media ${device.small_screen} {
    min-height: 12vh;
  }
`;
export const Social = styled.div`
  h3 {
    color: white;
    border-bottom: 3px solid white;
    font-size: 26px;
    margin: 2vh auto;
  }
  @media ${device.mobile} {
    h3 {
      display: none;
    }
  }
  @media ${device.tablet} {
    h3 {
      font-size: 20px;
    }
  }
`;
export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    margin: 1vh 1vw;
    &:hover {
      transform: scale(1.1);
    }
  }

  @media ${device.mobile} {
    margin-top: 1vh;
    img {
      margin: 1vh 5vw;
    }
  }
  @media ${device.tablet} {
    img {
      margin: 1vh 2vw;
    }
    @media ${device.small_screen} {
      img {
        margin: 1vh 3vw;
      }
    }
  }
`;
export const ButtonContainer = styled.div`
  min-height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 200px;
  @media ${device.mobile} {
    display: none;
  }
  @media ${device.tablet} {
    min-height: 13vh;
  }
  @media ${device.small_screen} {
    min-height: 12vh;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  a {
    font-size: 22px;
    color: white;
    text-decoration: none;
    background-color: transparent;
    transition: all 0.5s ease;
    border: 5px solid white;
    border-radius: 20px;
    padding: 0.5rem;
    &:hover {
      background-color: #ffbe00;
      color: #005542;
    }
  }
  @media ${device.mobile} {
    a {
      display: none;
    }
  }
  @media ${device.tablet} {
    a {
      padding: 0.3rem;
      font-size: 16px;
      border: 3px solid white;
    }
  }
`;

export const Dues = styled.div`
  width: 100%;
  p {
    font-size: 0.75em;
    color: #fff;
    text-align: center;
    margin: 1vh;
  }
`;
