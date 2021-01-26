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
    color: #02523f;
    background: rgba(0, 0, 0, 0.3);
  }
  div {
    height: 95%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;
export const List = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10vw;
  h1 {
    font-family: 'roboto', sans-serif;
    font-size: 28px;
    text-align: center;
    color: #02523f;
  }
  ul {
    width: 80%;
  }
`;
export const Edit = styled.div`
  width: 50%;
  margin: 10vw;
`;

// Edit Date

export const ContainerEditDate = styled.div`
  width: 50%;
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
    background: #02523f;
    color: white;
    line-height: 120%;
    border-radius: 3px 3px 0 0;
    box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.2);
  }

  form {
    box-sizing: border-box;
    width: 260px;
    margin: 100px auto;
    box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
    padding-bottom: 40px;
    border-radius: 3px;
    h1 {
      box-sizing: border-box;
      padding: 20px;
    }
  }

  input {
    margin: 40px 25px;
    width: 200px;
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

    &::-webkit-input-placeholder {
      color: #02523f;
      font-size: 11px;

      visibility: visible !important;
    }
  }

  button {
    border: none;
    background: #02523f;
    cursor: pointer;
    border-radius: 3px;
    padding: 6px;
    width: 200px;
    color: white;
    margin-left: 25px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.2);
    }
  }
`;

// DATE ITEM

export const Unit = styled.li`
  min-height: 8vh;
  max-width: 50vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  border: 1px black solid;
  a {
    color: #02523f;
    text-decoration: none;
    line-height: 20px;
    padding-left: 2vw;
  }
`;
