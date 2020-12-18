import styled from "styled-components";

export const NavContainer = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 2;
  height: 50px;
  width: 70%;
  margin: 0 15% 0 15%;
  background: #ffbe00;
  border-radius: 5px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.05);

  ul {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
    overflow: hidden;
  }

  a {
    display: inline-block;
    color: #fff;
    font-family: "Roboto", sans-serif;
    font-size: 1.2em;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
    &:hover {
      color: #005542;
      animation-delay: 2s;
    }
  }
`;

export const DropDownItems = styled.div`
  display: none;
  position: absolute;
  padding-top: 16px;
  background-color: #ffbe00;
  min-width: 160px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.05);
  z-index: 2;
  border-bottom: 1px solid #fff;

  a {
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 20px;
    padding-top: 20px;
    text-decoration: none;
    display: block;
    text-align: left;
    border-bottom: 1px solid #ffffff66;

    &:first-child {
      border-top: 1px solid #ffffff66;
    }

    &:last-child {
      border-bottom: none;
    }
    &:hover {
      background-color: #ffffff26;
      color: #005542;
    }
  }
`;

export const DropDown = styled.div`
  li {
    display: inline-block;

    &:hover {
      color: #005542;
      &:hover ${DropDownItems} {
        display: block;
        background-color: #ffbe00;
        border-radius: 0px 0px 5px 5px;
      }
    }
  }
`;
