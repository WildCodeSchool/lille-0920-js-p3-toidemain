import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;
  height: auto;
  margin-top: 10vh;
`;

export const ImageContainer = styled.div`
  width: 30%;
  height: auto;
  display: flex;
  margin: 15px 0px 15px 35px;
`;

export const Image = styled.img`
  box-shadow: 10px 5px 5px grey;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 5px 35px 5px 35px;
`;

export const MainTitle = styled.h2`
  font-size: 1.5em;
  font-weight: 800;
  margin-top: 45px;
  margin-bottom: 45px;
  text-align: center;
  line-height: 1.5em;
`;

export const Paragraph = styled.p`
  font-size: 1.5em;
  text-align: justify;
  line-height: 1.5em;
`;

export const PromisesContainer = styled.ul`
  background: #ffbe00;
  font-size: 1.5em;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  line-height: 35px;
`;

export const Promise = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 15px;
  padding-top: 15px;
  border-bottom: 1px white solid;
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  &:hover {
    -webkit-transform: scale(1.8);
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const Trait = styled.div``;
