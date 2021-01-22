import styled from 'styled-components';

export const TextContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20vw;
  height: 50vh;
  z-index: 2;
  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6em;
    color: #005542;
    text-align: justify;
    line-height: 150%;
    background-color: transparent;
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const CornerContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px;
  width: 100%;
  justify-content: flex-start;
  &.top {
    justify-content: flex-end;
  }
`;

export const Corner = styled.div`
  width: 30px;
  height: 30px;
  &.top {
    border-top: 3px solid #005542;
    border-right: 3px solid #005542;
  }
  &.bottom {
    border-bottom: 3px solid #005542;
    border-left: 3px solid #005542;
  }
`;
