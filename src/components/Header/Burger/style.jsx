import styled from "styled-components";
import { device } from "../../../layout/Devices";

export const StyledBurgerMenu = styled.div`
  @media ${device.desktop} {
    display: none;
  }

  @media ${device.small_screen} {
    display: none;
  }

  .bm-burger-button {
    position: absolute;
    width: 36px;
    height: 30px;
    right: 36px;

    @media ${device.tablet} {
      top: 60px;
    }

    @media ${device.mobile} {
      top: 33px;
    }
  }

  .bm-burger-bars {
    background: #ffbe00;
    border-radius: 3px;
  }

  .bm-cross-button {
    height: 24px;
    width: 24px;
    background: #1c819e;
    border-radius: 3px;
  }

  .bm-cross {
    background: #fff;
  }

  .bm-menu {
    position: relative;
    top: 0;
    background: #ffbe00;
    padding: 2.5em 1em;
    font-size: 1.15em;
    border-radius: 5px 0px 0px 0px;
  }

  .bm-item-list {
    color: #b8b7ad;
  }

  .bm-item {
    display: inline-block;
    color: #fff;
    font-family: "Roboto", sans-serif;
    font-size: 1em;
    outline: none;
    text-transform: uppercase;
    text-align: left;
    text-decoration: none;
    padding: 10px;
    border-bottom: 1px solid #ffffff66;

    :hover {
      background: #ffffff26;
      color: #005542;
    }
  }

  .bm-overlay {
    background: transparent;
  }
`;
