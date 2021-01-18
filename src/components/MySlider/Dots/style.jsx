import styled from "styled-components";

export const DotSpan = styled.span`
  padding: 10px;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 50%;
  background: ${(props) => (props.active ? "#005542" : "#ffbe00")};
`;

export const DotsDiv = styled.div`
  position: absolute;
  bottom: 25px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
