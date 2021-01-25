import styled from "styled-components";
import { device } from "../../layout/Devices";


export const SoutenirContainer = styled.div`
  width: 100vw;
  margin-bottom: 5vh;
`;

export const Container1 = styled.div`
width: 32%;
background-color: white;
border-radius: 5px;
margin: 1vw;
padding: 1vh;
@media ${device.mobile} {
    width:90vw;
  }
  @media ${device.tablet} {
    width:90vw;
  }
}
`;
export const Container2 = styled.div`
  width: 32%;
  background-color: white;
  border-radius: 5px;
  margin: 1vw;
  padding: 1vh;
  @media ${device.mobile} {
    width:90vw;
  }
  @media ${device.tablet} {
    width:90vw;
  }
`;
export const Container3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: white;
  border-radius: 5px;
  margin: 1vw;
  padding: 1vh;
  @media ${device.mobile} {
    width:90vw;
  }
  @media ${device.tablet} {
    width:90vw;
  }
`;
export const Container4 = styled.div`
  border-radius: 5px;
  background-color: rgb(255, 190, 0);
  margin: 1vw;
  padding: 1vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.mobile} {
    width:90vw;
  }
  @media ${device.tablet} {
    width:90vw;
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
  color: white;
  
`;
export const Text4 = styled.p`
  font-size: 1.2rem;
  margin: 2vw;
  text-align: justify;
`;
export const Img = styled.img`
  width: 20%;
  margin-left: 20vw;
  margin-top: -5vh;
`;
export const Text1 = styled.p`
  font-size: 1.2rem;
  margin: 2vw;
  margin-top: 6vh;
  text-align: justify;
`;
export const Text2 = styled.p`
  margin: 2vw;
  margin-top: 6vh;
  font-size: 1.2rem;
  text-align: justify;
`;
export const Text3 = styled.p`
  margin: 2vw;
  font-size: 1.2rem;
  margin-top: 3vh;
  text-align: justify;
`;
export const TitleBox3 = styled.h2`
  color: #145264;
  text-align: center;
  font-size: 1.6rem;
`;
export const TitleBox2 = styled.h2`
  color: #1c819e;
  text-align: center;
  font-size: 1.6rem;
`;
export const TitleBox1 = styled.h2`
  color: #005542;
  text-align: center;
  font-size: 1.6rem;
`;
export const BContainer = styled.div`
  width: 32%;
`;
export const Liste = styled.li`
  margin-top: 3vh;
`;

export const BigLetter = styled.li`
  margin-top: 6vh;
  font-size: 1.4rem;
  text-decoration: underline;
`;
export const Button = styled.div`
  margin-left: 10vw;
  margin-top: 18vh;
  a {
    font-size: 22px;
    color: #005542;
    text-decoration: none;
    background-color: transparent;
    transition: all 0.5s ease;
    border: 5px solid #005542;
    border-radius: 20px;
    padding: 0.5rem;
    &:hover {
      background-color: #ffbe00;
      color: #005542;
    }
  }
`;

export const Button1 = styled.div`
  margin-left: 10vw;
  margin-top: 5vh;
  a {
    font-size: 22px;
    color: #005542;
    text-decoration: none;
    background-color: transparent;
    transition: all 0.5s ease;
    border: 5px solid #005542;
    border-radius: 20px;
    padding: 0.5rem;
    &:hover {
      background-color: #ffbe00;
      color: #005542;
    }
  }
`;
