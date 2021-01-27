import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    height: 5%;
    width: 100%;
    margin: 10vh auto;
    padding: 2vh;
    font-family: 'roboto', sans-serif;
    font-size: 36px;
    text-align: center;
    color: white;
    background: rgba(0, 0, 0, 0.3);
  }
  div {
    height: 95%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;
export const List = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10vw;

  ul {
    width: 80%;
  }
`;
export const Edit = styled.div`
  width: 50%;
  margin: 10vw;
`;

export const ContainerEditDate = styled.div`
  min-width: 20vw;
  max-width: 40vw;

  h1,
  input::-webkit-input-placeholder,
  button {
    font-family: 'roboto', sans-serif;
    transition: all 0.3s ease-in-out;
  }

  h1 {
    height: 60px;
    width: 100%;
    font-size: 22px;
    text-align: center;
    color: white;
    border-radius: 3px 3px 0 0;
    box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.2);
    margin-top: 3vh;
  }

  form {
    box-sizing: border-box;
    width: 100%;
    margin: 0 auto;
    box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
    padding-bottom: 40px;
    border-radius: 20px;
    h1 {
      box-sizing: border-box;
    }
  }

  input {
    margin: 40px 0;
    width: 100%;
    height: 6vh;
    display: block;
    border: none;
    padding: 10px 0;
    border-bottom: solid 1px #02523f;
    transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
    background: rgba(255, 255, 255, 0);
    background-position: -200px 0;
    background-size: 200px 100%;
    background-repeat: no-repeat;
    color: #02523f;
    font-size: 18px;

    &::-webkit-input-placeholder {
      color: #02523f;
      font-size: 16px;
      padding-left: 1vw;
      visibility: visible !important;
    }
  }

  button {
    border: none;
    background: #ffbe00;
    cursor: pointer;
    border-radius: 3px;
    margin-top: 4vh;
    padding: 6px;
    height: 5vh;
    width: 100%;
    color: white;
    font-size: 24px;

    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.2);
    }
  }
`;

export const Unit = styled.li`
  min-height: 8vh;
  max-width: 50vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  border: 1px black solid;
  border-radius: 20px;
  padding: 10px;
  a {
    color: #02523f;
    text-decoration: none;
    line-height: 20px;
    h3 {
      font-size: 22px;
      padding: 5px 0;

      overflow-wrap: break-word;
      word-wrap: break-word;
      hyphens: auto;
    }
    i {
      font-size: 22px;
    }
  }
`;
