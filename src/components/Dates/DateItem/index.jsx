import React from "react";
import { Item } from "./style";
import moment from "moment";
import "moment/locale/fr";
moment.locale("fr");

const DateItem = ({ dat }) => {
  return (
    <Item>
      <h3 className="date">
        <i class="fas fa-angle-double-right"></i>
        {moment(dat.date).format("dddd Do MMMM YYYY")}
      </h3>
      <h3>{dat.message}</h3>
    </Item>
  );
};

export default DateItem;
