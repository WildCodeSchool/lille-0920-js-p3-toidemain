import React from 'react';
import { Item } from './style';

const DateItem = ({ date, message }) => {
  return (
    <Item>
      <h3 className="date">{date}</h3>
      <h3>{message}</h3>
    </Item>
  );
};

export default DateItem;
