import styled from "styled-components";

const TitleStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-family: "Roboto", sans-serif;
  height: 40px;
  padding-top: 20px;

  .triangle {
    display: inline-block;
    height: 0;
    width: 0;
    border-bottom: 45px solid #fff;
    border-right: 45px solid transparent;
  }

  h2 {
    height: 40px;
    color: #005542;
    font-size: 2em;
    background-color: #fff;
    text-align: right;
    padding-top: 5px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export default TitleStyle;
