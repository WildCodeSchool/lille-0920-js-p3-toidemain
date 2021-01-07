import React, { useState } from "react";
import quotes from "./quotes";
import { QuoteContainer, QuotesContainer, QuoteSpan } from "./style";

const Quote = () => {
  const [current, setCurrent] = useState(quotes[0]);
  const [active, setActive] = useState(0);

  const handleSetClick = (event) => {
    setCurrent(quotes[event.target.getAttribute("data-quote")]);
    setActive(event.target.getAttribute("data-quote"));
  };
  return (
    <QuoteContainer>
      <p>{current.quote}</p>
      <p>{current.student}</p>
      <QuotesContainer>
        {Object.keys(quotes).map((index) => (
          <QuoteSpan
            onClick={(event) => handleSetClick(event)}
            data-quote={index}
            key={index}
            active={index === active}
          />
        ))}
      </QuotesContainer>
    </QuoteContainer>
  );
};

export default Quote;
