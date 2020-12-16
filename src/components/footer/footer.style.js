import styled from "styled-components";

export const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-height: 10vh;
  max-height: 30vh;
  opacity: 0.9;
  background: #005542 no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    min-height: 60vh;
    max-height: 70vh;
  }

  /* background: linear-gradient(#005542, #ffbe00); */
`;
export const Info = styled.div`
  color: white;
  margin: 0 auto;
  h3 {
    text-align: center;
    font-size: 22px;
    font-family: Georgia, serif;
  }
  img {
    width: 24px;
  }
  p {
    font-size: 16px;
  }
  @media screen and (max-width: 600px) {
    h3 {
      font-size: 24px;
    }
    img {
      width: 18px;
    }
    p {
      font-size: 18px;
      text-align: center;
    }
  }
`;
export const Adress = styled.div`
  img {
    width: 24px;
  }
`;
export const Middle = styled.div`
  background-color: white;
  opacity: 75%;
  margin: 0 auto;
  img {
    height: 100%;
    width: 20vw;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2vh 0;
  margin: 0 auto;

  a {
    font-size: 22px;
    color: white;
    text-decoration: none;
    background-color: transparent;
    transition: all 0.5s ease;
    border: 5px solid white;
    border-radius: 20px;
    padding: 0.5rem;
    &:hover {
      background-color: #ffbe00;
      color: #005542;
    }
  }
  p {
    color: white;
    padding-top: 2vh;
  }
  @media screen and (max-width: 600px) {
    padding: 0;
    a {
      font-size: 18px;
      margin-bottom: 1vh;
    }
    p {
      padding-top: 0;
      text-align: center;
    }
  }
`;
export const Social = styled.div`
  h3 {
    color: white;
    border-bottom: 3px solid white;
    font-size: 26px;
  }
  @media screen and (max-width: 600px) {
    h3 {
      display: none;
    }
  }
`;
export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    margin: auto 0.5vw;
  }
  @media screen and (max-width: 600px) {
    margin-top: 1vh;
    img {
      margin: auto 2vw;
    }
  }
`;
