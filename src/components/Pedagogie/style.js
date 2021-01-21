import styled from "styled-components";
import { device } from "../../layout/Devices";

export const PedaContainer = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 1.1rem;
  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
  }
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
  }
`;

export const Intro = styled.p`
  font-family: "Roboto", sans-serif;
  height: 80%;
  width: 20vw;
  font-size: 1.6rem;
  text-align: -webkit-center;
  color: white;
  background-color: #005542;
  opacity: 80%;
  border-radius: 5px;
  padding: 40px;
  margin-top: 40px;
  @media ${device.mobile} {
    width: 80vw;
    align-items: center;
  }
  @media ${device.tablet} {
    width: 100vw;
    align-items: center;
  }
`;
export const Stairs = styled.div`
  margin-top: -98px;
`;
export const CapitalL = styled.span`
  font-size: 3rem;
`;
export const Container1 = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5vh;
`;
export const Container2 = styled.div`
  background-color: #145264;
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  margin-top: 8vh;
  display: flex;
  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
  }
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
  }
`;
export const Objectif = styled.div`
  text-align: -webkit-center;
  padding-top: 4vh;
  display: flex;
  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
  }
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
  }
`;
export const Title2 = styled.h2`
  font-size: 4rem;
  color: #ffbe00;
  width: 20vw;
  display: flex;
  justify-content: center;
  align-items: -webkit-center;
  margin: 20px;
  padding-bottom: 5vh;
  @media ${device.mobile} {
    font-size: 3rem;
    width: 80vw;
    text-align: -webkit-center;
  }
  @media ${device.tablet} {
    font-size: 4rem;
    width: 80%;
    text-align: -webkit-center;
  }
`;
export const Liste = styled.ul`
  width: 35vw;
  text-align: -webkit-center;
  display: flex;
  flex-direction: column;
  margin-top: -2vh;
  margin-left: 9vw;
  @media ${device.mobile} {
    width: 90vw;
    margin: 3vh;
  }
  @media ${device.tablet} {
    width: 90vw;
    margin: 3vh;
  }
`;

export const ListeElement = styled.li`
  color: white;
  padding: 10px;
  font-size: 1.3rem;
  margin-top: 6px;
`;
export const Slogan = styled.p`
  width: 20vw;
  text-align: end;
  color: white;
  font-size: 2.6rem;
  margin: 10vh;
  margin-left: 160px;
  @media ${device.mobile} {
    width: 70vw;
    text-align: -webkit-center;
    margin: 10vw;
    font-size: 2.1rem;
  }
  @media ${device.tablet} {
    width: 80vw;
    text-align: -webkit-center;
    font-size: 2rem;
    margin: 10vw;
  }
`;
export const Color = styled.span`
  font-size: 2.5rem;
  color: #145264;
`;
export const Container3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5vh;
`;
export const Logo = styled.img`
  width: 20vw;
  @media ${device.mobile} {
    width: 30vw;
  }
  @media ${device.tablet} {
    width: 30vw;
  }
`;
export const Orientoi = styled.p`
  text-align: center;
  margin: 4vw;
  font-size: 1.5rem;
`;
export const ColorB = styled.span`
  color: #ffbe00;
  font-size: 3rem;
`;
