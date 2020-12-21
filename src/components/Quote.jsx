import React, { useState } from 'react';
import quotes from './Quotes';
import styled from "styled-components";

const QuoteContainer = styled.div`
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
const QuotesContainer = styled.div`
display: flex;
span { 
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
        background-color:grey;
        border-radius: 50%;
        }
    &:hover{
        &::before {
            background-color: black;
        }
    }
}`;

const Quote = () => {
  const [ current, setCurrent ] = useState(quotes[0])
  const [ active, setActive ] = useState(0)
  const handleSetClick = () => {
      console.log("hello")

  }
    console.log(current)

    return (
    <QuoteContainer>
        <p>{current.quote}</p>
        <p>{current.student}</p>
        <QuotesContainer>
            {Object.keys(quotes).map(index => (
                <span
                onClick={event => handleSetClick(event)}
                data-quote={index}
                key={index}
                />
            ))}          
        </QuotesContainer>
    </QuoteContainer>
    )
}

export default Quote