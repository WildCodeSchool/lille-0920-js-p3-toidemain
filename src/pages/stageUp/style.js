import styled from "styled-components";
import { device } from "../../layout/Devices";

export const Main = styled.div`
  height: 370vh;
  font-family: "Roboto", sans-serif;
  color: #02523f;

  @media ${device.mobile} {
    min-height: 400vh;
    max-height: 570vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  @media ${device.tablet} {
    min-height: 320vh;
    max-height: 900vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  @media ${device.small_screen} {
    min-height: 380vh;
    max-height: 900vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    height: 350vh;
  }
  @media only screen and (min-width: 1281px) {
    height: 450vh;
  }
`;

export const First = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media ${device.mobile} {
    min-height: 120vh;
    max-height: 150vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media ${device.tablet} {
    min-height: 115vh;
    max-height: 135vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10vh;
  }
  @media ${device.small_screen} {
    min-height: 100vh;
    max-height: 125vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10vh;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    min-height: 30vh;
    max-height: 55vh;
    align-items: center;
    padding-top: 15vh;
  }
  @media only screen and (min-width: 1281px) {
    height: 130vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
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
      height: 32vh;
    }
  }
  @media ${device.small_screen} {
    width: 100%;
    margin-bottom: 2vh;
    img {
      width: 40vw;
      height: 32vh;
    }
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    margin-bottom: 10vh;
    img {
      width: 25vw;
      height: 35vh;
    }
  }
  @media only screen and (min-width: 1281px) {
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 2vh;
    margin-top: -25vh;
    img {
      width: 17vw;
      height: 30vh;
    }
  }
`;
export const FirstUp = styled.div`
  width: 90%;
  h3 {
    text-align: center;
    font-size: 1.6em;
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
      font-size: 1.5em;
      line-height: 1.2em;
    }
    span {
      font-size: 1em;
    }
  }
  @media ${device.small_screen} {
    h3 {
      font-size: 1.5em;
      line-height: 1.2em;
    }
    span {
      font-size: 1em;
    }
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    h3 {
      font-size: 1.5em;
      line-height: 1.2em;
    }
    span {
      font-size: 1em;
    }
  }
  @media only screen and (min-width: 1281px) {
    width: 90%;
    h3 {
      text-align: center;
      font-size: 1.6em;
      width: 100%;
      margin: 2vh auto;
      line-height: 1.5em;
      padding: 5px;
    }
    span {
      font-size: 1.3em;
      color: #d6a002;
    }
  }
`;
export const Firstdown = styled.div`
  width: 55%;
  margin-right: 3vw;
  margin-top: 10vh;
  height: 70%;
  h3 {
    background: rgba(2, 82, 63, 0.7);
    border-radius: 20px;
    font-size: 1.1em;
    width: 90%;
    margin: auto;
    line-height: 1.5em;
    padding: 35px;
    text-align: left;
    color: white;
  }
  span {
    color: #ebb517;
    font-size: 1.3em;
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
      font-size: 1.2em;
      line-height: 1.2em;
      text-align: center;
      width: 80%;
    }
    span {
      font-size: 1.1em;
    }
  }
  @media ${device.small_screen} {
    width: 95%;
    margin-right: 0;
    margin-top: 2vh;
    height: 50%;
    h3 {
      font-size: 1.2em;
      line-height: 1.2em;
      text-align: center;
      width: 80%;
    }
    span {
      font-size: 1.1em;
    }
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    width: 50%;
    margin-right: 3vw;
    margin-top: 2vh;
    margin-bottom: 25vh;
    height: 90%;

    h3 {
      font-size: 1em;
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
  }
  @media only screen and (min-width: 1281px) {
    width: 50%;
    margin-right: 3vw;
    margin-top: 20vh;
    height: 70%;
    h3 {
      font-size: 1.4em;
      width: 50%;
      margin: auto;
      line-height: 1.5em;
      padding: 35px;
      text-align: left;
      color: white;
    }
    span {
      color: #ebb517;
      font-size: 1.3em;
    }
  }
`;

export const Second = styled.section`
  height: 100vh;
  width: 90%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  img {
    width: 35%;
    height: 90%;
  }

  @media ${device.mobile} {
    scroll-snap-align: none;
    min-height: 70vh;
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
    min-height: 40vh;
    max-height: 60vh;
    display: block;
    border-top: dotted #d6a002 20px;
    border-bottom: dotted #d6a002 20px;
    margin: auto;
    img {
      display: none;
    }
  }
  @media ${device.small_screen} {
    scroll-snap-align: none;
    min-height: 40vh;
    max-height: 50vh;
    display: block;
    border-top: dotted #d6a002 20px;
    border-bottom: dotted #d6a002 20px;
    margin: auto;
    img {
      display: none;
    }
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    height: 60vh;
    margin-top: 25vh;
    margin-bottom: 25vh;
  }
  @media only screen and (min-width: 1281px) {
    height: 90vh;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    img {
      width: 35%;
    }
  }
`;
export const SecText = styled.div`
  margin: auto 5vw 15vh 2vw;
  width: 55%;
  text-align: left;
  span {
    font-size: 1.25em;
    color: #d6a002;
  }
  h2 {
    font-size: 1.65em;
    width: 80%;
    line-height: 2em;
    padding-left: 3vw;
  }
  h3 {
    font-size: 2.3em;
    width: 80%;
    color: white;
    background-color: rgba(2, 82, 63, 0.7);
    padding: 10px;
    margin-left: 3vw;
  }

  @media ${device.mobile} {
    width: 95%;
    margin: auto;
    span {
      font-size: 1em;
    }
    h2 {
      font-size: 1.2em;
      width: 95%;
      line-height: 1.5em;
      margin-bottom: 10vh;
    }
    h3 {
      font-size: 1.5em;
      margin-top: 5vh;
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
      margin-bottom: 10vh;
    }
    h3 {
      font-size: 1.5em;
      margin-top: 5vh;
    }
  }
  @media ${device.small_screen} {
    width: 95%;
    margin: auto;
    span {
      font-size: 1em;
    }
    h2 {
      font-size: 1.2em;
      width: 80%;
      line-height: 1.5em;
      margin-bottom: 10vh;
    }
    h3 {
      font-size: 1.5em;
      margin-top: 5vh;
    }
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    span {
      font-size: 1.1em;
    }
    h2 {
      font-size: 1.2em;
      width: 90%;
      line-height: 2em;
      padding-left: 3vw;
    }
  }
  @media only screen and (min-width: 1281px) {
    margin: auto 5vw 15vh 2vw;
    width: 45%;
    span {
      font-size: 1.25em;
      color: #d6a002;
    }
    h2 {
      font-size: 1.65em;
      width: 80%;
      line-height: 2em;
      padding-left: 3vw;
    }
    h3 {
      font-size: 2.3em;
      width: 80%;
      color: white;
      background-color: rgba(2, 82, 63, 0.7);
      padding: 10px;
      margin-left: 3vw;
    }
  }
`;

export const Third = styled.section`
  height: 110vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 15vh;

  @media ${device.mobile} {
    min-height: 60vh;
    max-height: 120vh;
    justify-content: center;
    margin-top: 4vh;
  }
  @media ${device.tablet} {
    min-height: 80vh;
    max-height: 95vh;
    justify-content: center;
    margin-top: 15vh;
  }
  @media ${device.small_screen} {
    min-height: 70vh;
    max-height: 85vh;
    justify-content: center;
    margin-top: -15vh;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    height: 70vh;
    margin-top: 25vh;
  }
  @media only screen and (min-width: 1281px) {
    height: 110vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 15vh;
  }
`;
export const Topic = styled.div`
  margin: 8vh auto;
  width: 100%;
  h1 {
    font-size: 2.5em;
    text-align: center;
    color: white;
    background-color: rgba(2, 82, 63, 0.6);
    padding: 20px;
  }

  @media ${device.mobile} {
    margin: 3vh auto;
    h1 {
      font-size: 1.6em;
      text-decoration: none;
    }
  }
  @media ${device.tablet} {
    margin: 4vh auto;
    h1 {
      font-size: 2em;
    }
  }
  @media ${device.small_screen} {
    margin: 4vh auto;
    h1 {
      font-size: 2em;
    }
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    margin: 8vh auto;
    h1 {
      font-size: 2.2em;
    }
  }
  @media only screen and (min-width: 1281px) {
    margin: 8vh auto;
    h1 {
      font-size: 2.2em;
      text-align: center;
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
  @media ${device.small_screen} {
    margin: 2vh auto;
    width: 100%;
    flex-direction: column-reverse;
    justify-content: center;
    img {
      display: none;
    }
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
  }
  @media only screen and (min-width: 1281px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 20vh;
    img {
      width: 40%;
      border-radius: 20px;
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
    font-size: 1.4em;
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
    font-size: 0.6em;
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
  @media ${device.small_screen} {
    margin: 3vh auto;
    width: 95%;
    font-size: 0.6em;
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
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    height: 95%;
    li {
      font-size: 1.3em;
    }
  }
  @media only screen and (min-width: 1281px) {
    background: rgba(9, 68, 89, 0.9);
    border-radius: 20px;
    width: 30%;
    margin: auto 0;
    height: 80%;
    ul {
      margin: 5vh auto;
    }
    li {
      font-size: 1.4em;
      width: 90%;
      margin: 3vh 2vw;
      color: white;
    }
    h3 {
      display: none;
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
    font-size: 1.4em;
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
    font-size: 0.6em;
    height: 50%;
    h3 {
      display: block;
      text-align: center;
      color: white;
      font-size: 2.7em;
      margin: 2vh auto;
      text-decoration: underline;
      text-underline-position: under;
    }
  }
  @media ${device.small_screen} {
    margin: 3vh auto;
    width: 95%;
    font-size: 0.6em;
    height: 50%;
    h3 {
      display: block;
      text-align: center;
      color: white;
      font-size: 2.7em;
      margin: 2vh auto;
      text-decoration: underline;
      text-underline-position: under;
    }
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    height: 95%;
    li {
      font-size: 1.3em;
    }
  }
  @media only screen and (min-width: 1281px) {
    background: #0c6b58;
    border-radius: 20px;
    width: 30%;
    height: 80%;
    ul {
      margin: 4vh auto;
    }
    li {
      font-size: 1.3em;
      width: 90%;
      margin: 2vh auto;
      line-height: 1.25em;
      color: white;
    }
    h3 {
      display: none;
    }
  }
`;

export const Forth = styled.section`
  height: 35vh;
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
    min-height: 60vh;
    max-height: 80vh;
    flex-direction: column-reverse;
    justify-content: center;
    margin-bottom: 8vh;
    margin-top: -10vh;
    img {
      display: none;
    }
  }
  @media ${device.tablet} {
    scroll-snap-align: none;
    min-height: 75vh;
    max-height: 90vh;
    flex-direction: column-reverse;
    justify-content: center;
    margin-bottom: 0;
    margin-top: -20vh;
    img {
      display: none;
    }
  }
  @media ${device.small_screen} {
    scroll-snap-align: none;
    min-height: 75vh;
    max-height: 90vh;
    flex-direction: column-reverse;
    justify-content: center;
    margin-bottom: 0;
    margin-top: -20vh;
    img {
      display: none;
    }
  }

  @media only screen and (min-width: 1281px) {
    height: 35vh;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: center;
    img {
      width: 40%;
      border-radius: 20px;
    }
  }
`;
export const TextR = styled.div`
  background: #d6a002;
  border-radius: 20px;
  width: 30%;
  height: 100%;
  p {
    font-size: 1.9em;
    line-height: 1.4em;
    width: 90%;
    margin: 6vh 2vw;
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
    font-size: 0.6em;
    height: 30%;
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
  @media ${device.small_screen} {
    margin: 3vh auto;
    width: 95%;
    font-size: 0.6em;
    height: 30%;
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
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    p {
      font-size: 1.3em;
    }
  }
  @media only screen and (min-width: 1281px) {
    background: #d6a002;
    border-radius: 20px;
    width: 30%;
    height: 100%;
    p {
      font-size: 1.6em;
      line-height: 1.4em;
      width: 90%;
      margin: 6vh 2vw;
      color: white;
    }
    h3 {
      display: none;
    }
  }
`;
export const TextL = styled.div`
  background: #cfcbba;
  border-radius: 20px;
  height: 100%;
  width: 30%;
  p {
    font-size: 1.9em;
    line-height: 1.4em;
    width: 90%;
    margin: 6vh 1vw;
    color: #454545;
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
    font-size: 0.6em;
    height: 30%;
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
  @media ${device.small_screen} {
    margin: 3vh auto;
    width: 95%;
    font-size: 0.6em;
    height: 30%;
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
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    p {
      font-size: 1.3em;
    }
  }
  @media only screen and (min-width: 1281px) {
    background: #cfcbba;
    border-radius: 20px;
    height: 100%;
    width: 30%;
    p {
      font-size: 1.6em;
      line-height: 1.4em;
      width: 90%;
      margin: 6vh 1vw;
      color: #454545;
    }
    h3 {
      display: none;
    }
  }
`;
