import styled from "styled-components";
import { device } from "../../layout/Devices";
import { Link } from "react-router-dom";

export const SoutenirContainer = styled.div``;

export const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
  background-color: rgba(255, 255, 255, 0.375);
  border-radius: 5px;
  margin: 1vw;
  padding: 1vh;
  @media ${device.mobile} {
    width: 95%;
  }
  @media ${device.tablet} {
    width: 95%;
  }
  @media ${device.small_screen} {
  }
`;
export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
  background-color: rgba(255, 255, 255, 0.375);
  border-radius: 5px;
  margin: 1vw;
  padding: 1vh;
  @media ${device.mobile} {
    width: 95%;
  }
  @media ${device.tablet} {
    width: 95%;
  }
`;
export const Container3 = styled.div`
  background-color: rgba(255, 255, 255, 0.375);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
  border-radius: 5px;
  margin: 1vw;
  padding: 1vh;
  @media ${device.mobile} {
    width: 95%;
  }
  @media ${device.tablet} {
    width: 95%;
  }
`;
export const Container4 = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-radius: 5px;
  background-color: rgb(255, 190, 0);
  margin: 1vw;
  padding: 1vh;
  @media ${device.mobile} {
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media ${device.tablet} {
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const SoutenirBox = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-top: 5vh;
  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
  }
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
  }
`;

export const TitleBox4 = styled.h2`
  font-size: 1.6rem;
  text-align: center;
  width: 20%;
  color: white;
  margin-top: 3vh;
  @media ${device.mobile} {
    width: 80%;
  }
  @media ${device.tablet} {
    width: 60%;
  }
  @media ${device.small_screen} {
    margin: 1vh;
  }
`;
export const Text4 = styled.p`
  font-size: 1.2rem;
  margin: 2vw;
  text-align: center;
`;
export const Img = styled.img`
  width: 7vw;
  @media ${device.mobile} {
    width: 20vw;
  }
  @media ${device.tablet} {
    width: 12vw;
  }
  @media ${device.small_screen} {
    margin-top: 1vh;
    margin-right: 2vw;
  }
`;
export const Text1 = styled.p`
  font-size: 1.2rem;
  margin: 2vw;
  margin-top: 3vh;
  text-align: center;
`;
export const Text2 = styled.p`
  margin: 2vw;
  margin-top: 3vh;
  font-size: 1.2rem;
  text-align: center;
`;
export const Text3 = styled.p`
  margin: 2vw;
  font-size: 1.2rem;
  margin-top: 3vh;
  text-align: center;
`;
export const TitleBox3 = styled.h2`
  background-color: #145264;
  padding: 2.75vw;
  color: white;
  text-align: center;
  font-size: 1.6rem;
  @media ${device.mobile} {
    margin-top: 1vh;
  }
  @media ${device.tablet} {
    width: 90vw;
  }
  @media ${device.small_screen} {
    height: 11vh;
  }
`;
export const TitleBox2 = styled.h2`
  background-color: #1c819e;
  padding: 2vw;
  color: white;
  text-align: center;
  font-size: 1.6rem;
  @media ${device.small_screen} {
    height: 13vh;
  }
  @media ${device.tablet} {
    width: 90vw;
  }
`;
export const TitleBox1 = styled.h2`
  background-color: #005542;
  padding: 2.9vw;
  color: white;
  text-align: center;
  font-size: 1.6rem;
  @media ${device.tablet} {
    width: 90vw;
  }
  @media ${device.small_screen} {
    height: 10.5vh;
  }
`;
export const BContainer = styled.div`
  display: flex;
  margin-bottom: 3vh;
`;
export const Liste = styled.li`
  margin-top: 3vh;
`;

export const BigLetter = styled.span`
  margin-top: 4vh;
  font-size: 1rem;
`;
export const Stage = styled.p`
  margin-top: 2vh;
  margin-right: 9vw;
  @media ${device.mobile} {
    margin-left: 7vw;
  }
  @media ${device.tablet} {
    margin-left: 10vw;
  }
  @media ${device.small_screen} {
    font-size: 1.1rem;
    margin-top: 2vh;
  }
`;

export const Contact = styled.div`
  font-size: 1rem;
  margin-top: 5vh;
`;
export const Path = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: #145264;
    transition: all 0.5s ease;
  }
`;
