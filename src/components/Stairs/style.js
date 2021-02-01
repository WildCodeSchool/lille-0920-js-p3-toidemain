import styled from "styled-components";
import { device } from "../../layout/Devices";

export const Box1 = styled.div`
  background-color: #145264;
  background: rgba(0, 0, 0, 0.5);
  font-family: "Oswald", Gadget, sans-serif;
  font-size: 15px;
  padding-top: 5px;
  color: white;
  width: 120px;
  height: 80px;
  transition: height 0.5s;
  transition-timing-function: linear;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 3px;
  border-radius: 9px;
  &:hover {
    height: 120px;
  }
`;
export const Box2 = styled.div`
  background-color: #1c819e;
  font-family: "Oswald", Gadget, sans-serif;
  font-size: 15px;
  padding-top: 5px;
  color: white;
  width: 120px;
  height: 120px;
  transition: height 0.5s;
  transition-timing-function: linear;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 3px;
  border-radius: 9px;
  &:hover {
    height: 170px;
  }
`;
export const Box3 = styled.div`
  background-color: #005542;
  font-family: "Oswald", Gadget, sans-serif;
  font-size: 15px;
  padding-top: 5px;
  color: white;
  width: 120px;
  height: 170px;
  transition: height 0.5s;
  transition-timing-function: linear;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 3px;
  border-radius: 9px;
  &:hover {
    height: 220px;
  }
`;
export const Box4 = styled.div`
  background-color: #145264;
  font-family: "Oswald", Gadget, sans-serif;
  font-size: 15px;
  padding-top: 5px;
  color: white;
  width: 120px;
  height: 220px;
  transition: height 0.5s;
  transition-timing-function: linear;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 3px;
  border-radius: 9px;
  &:hover {
    height: 270px;
  }
`;
export const Box5 = styled.div`
  background-color: #ffbe00;
  font-family: "Oswald", Gadget, sans-serif;
  font-size: 15px;
  padding-top: 5px;
  color: white;
  width: 120px;
  height: 270px;
  transition: height 0.5s;
  transition-timing-function: linear;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 3px;
  border-radius: 9px;
  &:hover {
    height: 330px;
  }
  @media ${device.small_screen} {
   padding: 6px;
  
  }
`;
export const Box6 = styled.div`
  background-color: white;
  opacity: 0;
  padding-top: 5px;
  color: white;
  width: 120px;
  height: 330px;
  transition: height 0.5s;
  transition-timing-function: linear;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 3px;
  border-radius: 9px;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10vw;
  @media ${device.mobile} {
    display: none;
  }
  @media ${device.tablet} {
    display: none;
  }
  @media ${device.small_screen} {
   width:50vw;
   margin-right: -11vw;
  
  }
`;
export const Stairs = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-top: 14vh;
`;
export const Title = styled.h2`
  font-family: "Roboto", Gadget, sans-serif;
  font-size: 1.5rem;
  margin-top: 1vh;
`;
