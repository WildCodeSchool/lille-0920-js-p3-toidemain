import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  margin-bottom: 10vh;
  h1,
  input::-webkit-input-placeholder,
  button {
    font-family: 'roboto', sans-serif;
    transition: all 0.3s ease-in-out;
  }

  h1 {
    height: 100px;
    width: 100%;
    font-size: 18px;
    text-align: center;
    background: #02523f;
    color: white;
    line-height: 150%;
    border-radius: 3px 3px 0 0;
    box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.2);
  }

  form {
    box-sizing: border-box;
    width: 260px;
    margin: 100px auto 0;
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
