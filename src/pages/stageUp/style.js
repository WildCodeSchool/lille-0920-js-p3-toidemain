import styled from 'styled-components';
import { device } from '../../layout/Devices';

export const Main = styled.div`
  height: 90vh;
  /* overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-snap-points-y: repeat(90vh);
  overflow-x: hidden;
  overflow-y: scroll; */
  background-color: rgb(237, 237, 237);
  font-family: 'Roboto', sans-serif;
  color: #02523f;
  @media ${device.mobile} {
    min-height: 400vh;
    max-height: 570vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* overflow-y: none;
    scroll-snap-type: none;
    scroll-snap-points-y: none;
    overflow-x: none;
    overflow-y: none; */
  }
  @media ${device.tablet} {
    min-height: 320vh;
    max-height: 550vh;
    display: block;
  }
`;

export const First = styled.section`
  height: 90vh;
  /* scroll-snap-align: start; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media ${device.mobile} {
    scroll-snap-align: none;
    min-height: 120vh;
    max-height: 150vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media ${device.tablet} {
    scroll-snap-align: none;
    min-height: 100vh;
    max-height: 130vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
  @media ${device.tablet} {
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
      font-size: 1.1em;
      line-height: 1.2em;
    }
    span {
      font-size: 1.1em;
    }
  }
  @media ${device.tablet} {
    h3 {
      font-size: 1.7em;
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
      font-size: 1em;
      line-height: 1.2em;
      text-align: center;
      width: 80%;
    }
    span {
      font-size: 1.1em;
    }
  }
  @media ${device.tablet} {
    width: 95%;
    margin-right: 0;
    margin-top: 2vh;
    height: 50%;

    h3 {
      font-size: 1.3em;
      line-height: 1.2em;
      text-align: center;
      width: 80%;
    }
    span {
      font-size: 1.2em;
    }
  }
`;

export const Second = styled.section`
  height: 90vh;
  /* scroll-snap-align: center; */
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  img {
    width: 55%;
  }
  @media ${device.mobile} {
    scroll-snap-align: none;
    min-height: 65vh;
    max-height: 80vh;
    display: block;
    border-top: dotted #d6a002 20px;
    border-bottom: dotted #d6a002 20px;
    margin-top: 10vh;
    margin-bottom: 5vh;
    img {
      display: none;
    }
  }
  @media ${device.tablet} {
    scroll-snap-align: none;
    min-height: 35vh;
    max-height: 40vh;
    display: block;
    border-top: dotted #d6a002 20px;
    border-bottom: dotted #d6a002 20px;
    margin-top: 10vh;
    margin-bottom: 5vh;
    img {
      display: none;
    }
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
  @media ${device.mobile} {
    width: 95%;
    margin: auto;
    span {
      font-size: 1em;
    }
    h2 {
      font-size: 1.2em;
      width: 80%;
      line-height: 1.5em;
      margin: 5vh auto;
    }
    h3 {
      text-decoration: underline;
      text-underline-position: under;
    }
  }
  @media ${device.tablet} {
    width: 95%;
    margin: auto;
    span {
      font-size: 1em;
    }
    h2 {
      font-size: 1.2em;
      width: 80%;
      line-height: 1.5em;
      margin: 5vh auto;
    }
    h3 {
      text-decoration: underline;
      text-underline-position: under;
    }
  }
`;

export const Third = styled.section`
  height: 90vh;
  /* scroll-snap-align: center; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media ${device.mobile} {
    scroll-snap-align: none;
    min-height: 70vh;
    max-height: 200vh;
    justify-content: center;
    margin-top: 15vh;
  }
  @media ${device.tablet} {
    scroll-snap-align: none;
    min-height: 60vh;
    max-height: 90vh;
    justify-content: center;
    margin-top: 15vh;
  }
`;
export const Title = styled.div`
  margin: 8vh auto;
  h1 {
    font-size: 3.5em;
    text-align: center;
  }
  @media ${device.mobile} {
    margin: 2vh auto;
    h1 {
      font-size: 2em;
    }
  }
  @media ${device.tablet} {
    margin: 2vh auto;
    h1 {
      font-size: 3em;
    }
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
  @media ${device.mobile} {
    margin: 2vh auto;
    flex-direction: column-reverse;
    justify-content: center;
    img {
      display: none;
    }
  }
  @media ${device.tablet} {
    margin: 2vh auto;
    width: 100%;
    flex-direction: column-reverse;
    justify-content: center;
    img {
      display: none;
    }
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
  h3 {
    display: none;
  }
  @media ${device.mobile} {
    margin: 3vh auto;
    width: 95%;
    font-size: 0.6em;
    height: 50%;
    h3 {
      display: block;
      text-align: center;
      color: white;
      font-size: 2.3em;
      margin: 2vh auto;
      text-decoration: underline;
      text-underline-position: under;
    }
  }
  @media ${device.tablet} {
    margin: 3vh auto;
    width: 95%;
    font-size: 0.8em;
    height: 50%;
    h3 {
      display: block;
      text-align: center;
      color: white;
      font-size: 2.8em;
      margin: 2vh auto;
      text-decoration: underline;
      text-underline-position: under;
    }
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
  h3 {
    display: none;
  }
  @media ${device.mobile} {
    margin: 3vh auto;
    width: 95%;
    font-size: 0.6em;
    height: 50%;
    h3 {
      display: block;
      text-align: center;
      color: white;
      font-size: 2.3em;
      margin: 2vh auto;
      text-decoration: underline;
      text-underline-position: under;
    }
  }
  @media ${device.tablet} {
    margin: 3vh auto;
    width: 95%;
    font-size: 0.8em;
    height: 50%;
    h3 {
      display: block;
      text-align: center;
      color: white;
      font-size: 2.8em;
      margin: 2vh auto;
      text-decoration: underline;
      text-underline-position: under;
    }
  }
`;

export const Forth = styled.section`
  height: 90vh;
  /* scroll-snap-align: end; */
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  align-items: center;
  img {
    width: 40%;
    border-radius: 20px;
  }
  @media ${device.mobile} {
    scroll-snap-align: none;
    min-height: 30vh;
    max-height: 70vh;
    flex-direction: column-reverse;
    justify-content: center;
    margin-bottom: 5vh;

    img {
      display: none;
    }
  }
  @media ${device.tablet} {
    scroll-snap-align: none;
    min-height: 50vh;
    max-height: 70vh;
    flex-direction: column-reverse;
    justify-content: center;
    margin-bottom: 0;
    margin-top: -18vh;

    img {
      display: none;
    }
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
  h3 {
    display: none;
  }
  @media ${device.mobile} {
    margin: 3vh auto;
    width: 95%;
    font-size: 0.6em;
    height: 50%;
    p {
      margin: 2vh 3vw;
    }
    h3 {
      display: block;
      text-align: center;
      color: white;
      font-size: 3em;
      margin: 2vh auto;
      text-decoration: underline;
      text-underline-position: under;
    }
  }
  @media ${device.tablet} {
    margin: 3vh auto;
    width: 95%;
    font-size: 0.7em;
    height: 30%;
    p {
      margin: 2vh 3vw;
    }
    h3 {
      display: block;
      text-align: center;
      color: white;
      font-size: 3.5em;
      margin: 2vh auto;
      text-decoration: underline;
      text-underline-position: under;
    }
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
  h3 {
    display: none;
  }
  @media ${device.mobile} {
    margin: 3vh auto;
    width: 95%;
    font-size: 0.6em;
    height: 50%;
    p {
      margin: 2vh 3vw;
    }
    h3 {
      display: block;
      text-align: center;
      color: #454545;
      font-size: 3em;
      margin: 2vh auto;
      text-decoration: underline;
      text-underline-position: under;
    }
  }
  @media ${device.tablet} {
    margin: 3vh auto;
    width: 95%;
    font-size: 0.7em;
    height: 30%;
    p {
      margin: 2vh 3vw;
    }
    h3 {
      display: block;
      text-align: center;
      color: #454545;
      font-size: 3.5em;
      margin: 2vh auto;
      text-decoration: underline;
      text-underline-position: under;
    }
  }
`;
