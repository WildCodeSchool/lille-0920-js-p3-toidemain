import styled from 'styled-components';
import { device } from '../../layout/Devices';

export const Main = styled.div`
  height: 90vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  background-color: gray;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

export const First = styled.section`
  height: 90vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const FirstTextContainer = styled.div`
  margin-top: 5vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  img {
    width: 27vw;
    height: 40vh;
    margin-left: 5vw;
  }
`;
export const FirstUp = styled.div`
  width: 50%;
  h3 {
    text-align: center;
    font-size: 2em;
    width: 80%;
    margin: 5vh auto;
    line-height: 1.5em;
  }
  span {
    font-size: 1.5em;
    color: #ffbe00;
  }
`;
export const Firstdown = styled.div`
  margin-bottom: 10vh;
  h3 {
    font-size: 1.75em;
    font-weight: bold;
    width: 100%;
    margin-left: 5vw;
    line-height: 1.5em;
  }
`;

export const Second = styled.section`
  height: 90vh;
  scroll-snap-align: center;
`;

export const Third = styled.section`
  height: 90vh;
  scroll-snap-align: center;
`;
export const Title = styled.div`
  h1 {
    font-size: 2.5em;
  }
  h2 {
    font-size: 2em;
  }
  h3 {
    font-size: 1.75em;
  }
`;
export const List = styled.ul`
  li {
    font-size: 2em;
  }
`;
export const Text = styled.p`
  font-size: 1.5em;
`;

export const Forth = styled.section`
  height: 90vh;
  scroll-snap-align: center;
`;
