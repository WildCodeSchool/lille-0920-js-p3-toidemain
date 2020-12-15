import styled from "styled-components";

export const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.7rem 0rem;
  width: 100%;
  min-height: 10vh;
  max-height: 30vh;
  opacity: 0.9;
  margin-top: 1rem;
  background-color: #005542;

  /* background: linear-gradient(#005542, #ffbe00); */
`;
export const Info = styled.div`
  color: white;
  h3 {
    text-align: center;
    font-size: 24px;
    font-family: Georgia, serif;
  }
  img {
    width: 24px;
  }
  p {
    font-size: 20px;
  }
`;
export const Adress = styled.div`
  img {
    width: 24px;
  }
`;
export const Middle = styled.div`
  background-color: white;
  img {
    height: 100%;
    width: 20vw;
    padding: 30px;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
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
`;
export const Social = styled.div`
  h3 {
    color: white;
    border-bottom: 3px solid white;
    font-size: 26px;
  }
`;
export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
