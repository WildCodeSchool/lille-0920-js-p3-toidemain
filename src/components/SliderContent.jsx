import styled from "styled-components";

const MaxContent = styled.div`
  transform: translateX(-${props => props.translate}px);
  transition: transform ease-out ${props => props.transition}s;
  height: 100%;
  width: ${props => props.width}px;
  display: flex;
`;

const SliderContent = (props) => (
  <MaxContent translate={props.translate} transition={props.transition} width={props.width}>
  {props.children}  
  </MaxContent>
  )

export default SliderContent
