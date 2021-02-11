import React from "react";
import { Item } from "./style";
import moment from "moment";
import "moment/locale/fr";
moment.locale("fr");

const DateItem = ({ date, datefin, message }) => {
  return (
    <Item>
      <h3 className="date">
        {moment(date).format('dddd Do MMMM YYYY')} à {moment(datefin).format('dddd Do MMMM YYYY')}
      </h3>
      <h3>{message}</h3>
    </Item>
  );
};

export default DateItem;
