import React from 'react';
import { Item } from './style';

const DateItem = ({ date, message, datefin }) => {
  return (
    <Item>
      <h3>
        {date} à {datefin}
      </h3>
      <h3>{message}</h3>
    </Item>
  );
};

export default DateItem;
