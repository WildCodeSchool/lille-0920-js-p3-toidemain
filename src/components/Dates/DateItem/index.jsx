import React from 'react';

const DateItem = ({ date, message }) => {
  return (
    <li>
      <h3>{date}</h3>
      <h3>{message}</h3>
      <br />
    </li>
  );
};

export default DateItem;
