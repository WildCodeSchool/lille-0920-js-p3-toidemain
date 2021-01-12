import styled from 'styled-components';
import { device } from '../../layout/Devices';

export const Main = styled.div`
  height: 90vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-snap-points-y: repeat(90vh);
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: rgb(237, 237, 237);
  font-family: 'Roboto', sans-serif;
  color: #02523f;
  @media ${device.mobile} {
    min-height: 200vh;
    max-width: 400vh;
    overflow-y: none;
    scroll-snap-type: none;
    scroll-snap-points-y: none;
    overflow-x: none;
    overflow-y: none;
  }
`;

export const First = styled.section`
  height: 90vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media ${device.mobile} {
    min-height: 150vh;
    max-height: 180vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -7vh;
  }
`;
export const FirstTextContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20vh;

  img {
    width: 22vw;
    height: 40vh;
  }
  @media ${device.mobile} {
    width: 100%;
    margin-bottom: 2vh;
    img {
      width: 45vw;
      height: 30vh;
    }
  }
`;
export const FirstUp = styled.div`
  width: 90%;

  h3 {
    text-align: center;
    font-size: 1.8em;
    width: 100%;
    margin: 2vh auto;
    line-height: 1.5em;
    padding: 5px;
  }
  span {
    font-size: 1.3em;
    color: #d6a002;
  }
  @media ${device.mobile} {
    h3 {
      font-size: 1em;
      line-height: 1.2em;
    }
    span {
      font-size: 1.1em;
    }
  }
`;
export const Firstdown = styled.div`
  width: 50%;
  margin-right: 3vw;
  margin-top: 10vh;
  height: 70%;

  h3 {
    background: rgba(2, 82, 63, 0.7);
    border-radius: 20px;
    font-size: 1.5em;
    width: 50%;
    margin: auto;
    line-height: 1.5em;
    padding: 35px;
    text-align: left;
    color: white;
  }
  span {
    color: #ebb517;
    font-size: 1.4em;
  }
  @media ${device.mobile} {
    width: 95%;
    margin-right: 0;
    margin-top: 2vh;
    height: 50%;

    h3 {
      font-size: 0.9em;
      line-height: 1.2em;
      text-align: center;
      width: 80%;
    }
    span {
      font-size: 1em;
    }
  }
`;

export const Second = styled.section`
  height: 90vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  img {
    width: 55%;
  }
`;
export const SecText = styled.div`
  margin: auto 5vw 15vh 2vw;
  width: 45%;
  span {
    font-size: 1.25em;
    color: #d6a002;
  }
  h2 {
    font-size: 1.75em;
    width: 80%;
    line-height: 2em;
    padding-left: 3vw;
  }
`;

export const Third = styled.section`
  height: 90vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const Title = styled.div`
  margin: 8vh auto;
  h1 {
    font-size: 3.5em;
    text-align: center;
  }
`;
export const ThirdContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 20vh;
  img {
    width: 40%;
    border-radius: 20px;
  }
`;

export const ListR = styled.div`
  background: rgba(9, 68, 89, 0.9);
  border-radius: 20px;
  width: 30%;
  margin: auto 0;
  height: 80%;
  ul {
    margin: 5vh auto;
  }

  li {
    font-size: 1.8em;
    width: 90%;
    margin: 3vh 2vw;
    color: white;
  }
`;
export const ListL = styled.div`
  background: #0c6b58;
  border-radius: 20px;
  width: 30%;
  height: 80%;

  ul {
    margin: 4vh auto;
  }

  li {
    font-size: 1.8em;
    width: 90%;
    margin: 2vh auto;
    line-height: 1.25em;
    color: white;
  }
`;

export const Forth = styled.section`
  height: 90vh;
  scroll-snap-align: end;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  align-items: center;
  img {
    width: 40%;
    border-radius: 20px;
  }
`;
export const TextR = styled.div`
  background: #d6a002;
  border-radius: 20px;
  width: 30%;
  height: 40%;

  p {
    font-size: 2em;
    line-height: 1.75em;
    width: 90%;
    margin: 6vh 2vw;
    color: white;
    text-align: center;
  }
`;
export const TextL = styled.div`
  background: #cfcbba;
  border-radius: 20px;
  height: 40%;
  width: 30%;

  p {
    font-size: 2em;
    line-height: 1.75em;
    width: 90%;
    margin: 6vh 1vw;
    color: #454545;
    text-align: center;
  }
`;
