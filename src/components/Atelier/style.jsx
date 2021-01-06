import styled from "styled-components";

export const Container=styled.div`
display: flex;
justify-content: space-around;
border: solid 1px red;
width: 100vw;
height: auto;
`;

export const ImageContainer =styled.img`
`;

export const TextContainer=styled.div`
border: solid 1px green;
display: flex;
width: 40%;
flex-direction: column;
`;

export const MainTitle=styled.h2`
font-size: 1.5em;
font-weight: 800;
margin-bottom: 15px;
text-align: center;
line-height: 1.5em;
`;

export const Paragraph=styled.p`
    font-size: 1.5em;
    text-align: justify;
    line-height: 1.5em;

`;

export const PromisesContainer=styled.ul`
    background: #ffbe00;
    font-size: 1.2em;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const Promise =styled.li`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 15px;
    border-bottom: 1px white solid;
`;
 
export const Trait=styled.div`
`;