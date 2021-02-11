import React from "react";
import { Item } from "./style";
import moment from "moment";
import "moment/locale/fr";
moment.locale("fr");

const DateItem = ({ date, datefin, message }) => {
  return (
    <Item>
      <h3 className="date">
<<<<<<< HEAD
        {moment(date).format('dddd Do MMMM YYYY')} à {moment(datefin).format('dddd Do MMMM YYYY')}
      </h3>
      <h3>{message}</h3>
=======
        <i class="fas fa-angle-double-right"></i>
        {moment(dat.date).format("dddd Do MMMM YYYY")}
      </h3>
      <h3>{dat.message}</h3>
>>>>>>> 0066b2a36e81d11eadafffeb56b06f865b3e4a45
    </Item>
  );
};

export default DateItem;
