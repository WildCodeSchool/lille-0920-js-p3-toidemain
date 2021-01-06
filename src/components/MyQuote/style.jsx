import styled from "styled-components";

export const QuoteContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px auto;
    max-width: 700px;
    p {
        text-align: center;
        margin-bottom: 20px;
        color:red;
    }
    `;

export const QuotesContainer = styled.div`
    display: flex;`

export const QuoteSpan = styled.span`
        height: 20px;
        width: 20px;
        margin: 0 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
            &::before {
            content:"";
            height: 6px;
            width: 6px;
            background-color:red;
            border-radius: 50%;
            transition: background-color 0.3s ease;
            }
            &:hover{
                &::before {
                    background-color: black;
                }
            }
            &::before {
                background-color: ${(props => props.active ? "black" : "red")}
            }
            `;