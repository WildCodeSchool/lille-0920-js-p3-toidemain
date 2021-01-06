import styled from 'styled-components'
import { device } from '../../layout/Devices'

export const PedaContainer = styled.div`
  font-family: 'Oswald', Gadget, sans-serif;
  font-size: 25px;
  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    font-size: 20px;
  }
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    font-size: 20px;
  }
`

export const Title = styled.h2`
  font-size: 4rem;
  padding-bottom: 4vh;
  color: #f5e01d;
  margin: 25px;
  @media ${device.mobile} {
    font-size: 3rem;
  }
  @media ${device.tablet} {
    font-size: 3rem;
  }
`
export const Intro = styled.p`
  font-family: 'Arial Black', Gadget, sans-serif;
  width: 20vw;
  text-align: -webkit-center;
  color: white;
  background-color: #005542;
  opacity: 80%;
  border-radius: 5px;
  padding: 40px;
  @media ${device.mobile} {
    width: 80vw;
    align-items: center;
  }
  @media ${device.tablet} {
    width: 100vw;
    align-items: center;
  }

`
export const CapitalL = styled.span`
  font-size: 3rem;
`
export const Container1 = styled.div`
  display: flex;
  flex-direction: row;
`
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
`
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
`
export const Title2 = styled.h2`
  font-size: 5rem;
  color: #f5e01d;
  width: 30vw;
  display: flex;
  justify-content: center;
  align-items: -webkit-center;
  margin: 20px;
  @media ${device.mobile} {
      font-size:3rem;
    width: 80vw;
    text-align: -webkit-center;
  }
  @media ${device.tablet} {
    font-size:4rem;
    width: 80%;
    text-align: -webkit-center;
  }
`
export const Liste = styled.ul`
  width: 35vw;
  text-align: -webkit-center;
  display: flex;
  flex-direction: column;
  margin-top: -4vh;
  margin-left: 3vw;
  @media ${device.mobile} {
    width: 90vw;
    margin:3vh;
  }
  @media ${device.tablet} {
    width: 90vw;
    margin:3vh;
  }
`

export const ListeElement = styled.li`
  color: white;
  padding: 10px;
`
export const Slogan = styled.p`
  width: 30vw;
  text-align: end;
  color: white;
  font-size: 3rem;
  margin: 9vh;
  @media ${device.mobile} {
    width: 80vw;
    text-align: -webkit-center;
    font-size: 2.6rem;
  }
  @media ${device.tablet} {
    width: 80vw;
    text-align: -webkit-center;
    font-size: 2.6rem;
  }
`
export const Color = styled.span`
  font-size: 3.2rem;
  color: #145264;
`
export const Container3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5vh;
`
export const Logo = styled.img`
 width: 20vw;
 @media ${device.mobile} {
    width:30vw;
  }
 @media ${device.tablet} {
    width: 30vw;
    }
`
export const Orientoi = styled.p`
  text-align: center;
  margin: 4vw;
`
export const ColorB = styled.span`
  color: #f5e01d;
  font-size: 3rem;
`
