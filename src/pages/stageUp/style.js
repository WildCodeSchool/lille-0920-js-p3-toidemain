import styled from 'styled-components';
import { device } from '../../layout/Devices';

export const Main = styled.div`
  height: 90vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  /* background-image: url('/images/background-white.jpg'); */
  background-color: white;
  /* -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover; */
  font-family: 'Roboto', sans-serif;
  color: #02523f;
`;

export const First = styled.section`
  height: 90vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const FirstTextContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    width: 22vw;
    height: 40vh;
    margin-left: 15vw;
    margin-top: 5vh;
  }
`;
export const FirstUp = styled.div`
  width: 50%;
  margin-top: 10vh;
  h3 {
    text-align: center;
    font-size: 2em;
    width: 80%;
    margin: 5vh auto;
    line-height: 1.5em;
    padding: 5px;
  }
  span {
    font-size: 1.5em;
    color: #d6a002;
  }
`;
export const Firstdown = styled.div`
  background: rgba(28, 129, 158, 0.3);
  border-radius: 20px;
  width: 80%;
  margin-left: 5vw;
  margin-bottom: 20vh;
  height: 90%;

  h3 {
    font-size: 1.5em;
    width: 90%;
    margin: auto;
    line-height: 1.5em;
    padding: 5px;
    text-align: left;
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
  margin: auto 5vw auto 2vw;
  width: 45%;
  span {
    font-size: 1.5em;
    color: #d6a002;
  }
  h2 {
    font-size: 1.75em;
    width: 80%;
    line-height: 2em;
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
  }
`;

export const ListR = styled.ul`
  background: rgba(28, 129, 158, 0.3);
  width: 30%;
  margin: auto 0;
  height: 100%;

  li {
    font-size: 2em;
    width: 90%;
    margin: 0 2vw;
    color: #04345e;
  }
`;
export const ListL = styled.ul`
  background: rgba(28, 129, 158, 0.3);
  width: 30%;
  height: 100%;

  li {
    font-size: 1.8em;
    width: 90%;
    margin: 3vh auto;
    line-height: 1.25em;
    color: #0f4d19;
  }
`;

export const Forth = styled.section`
  height: 90vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  align-items: center;
  img {
    width: 40%;
  }
`;
export const TextR = styled.div`
  background: rgba(28, 129, 158, 0.3);
  width: 30%;
  height: 40%;
  p {
    font-size: 2em;
    line-height: 1.75em;
    width: 90%;
    margin: 10vh 2vw;
    color: #d6a002;
    text-align: center;
  }
`;
export const TextL = styled.div`
  background: rgba(28, 129, 158, 0.3);
  height: 40%;
  width: 30%;
  p {
    font-size: 2em;
    line-height: 1.75em;
    width: 90%;
    margin: 10vh 1vw;
    color: #04345e;
    text-align: center;
  }
`;
