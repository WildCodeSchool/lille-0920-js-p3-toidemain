import styled from "styled-components";

export const SlideDiv = styled.div`
    height: 100%;
    width: 100%;
    background-image: url('${props => props.content}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    `;