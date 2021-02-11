import React from "react";
import { connect } from "react-redux";
import { setCurrent, deleteDate } from "../../../redux/actions/DateActions";
import { Unit } from "./style";
import moment from "moment";
import "moment/locale/fr";
moment.locale("fr");

const DateItemAdmin = ({ id,date,datefin,message, setCurrent, deleteDate }) => {
  const onDelete = (e) => {
    e.preventDefault();
    deleteDate(id);
    alert("Date supprimée");
    console.log(id)
  };
  return (
    <Unit>
      <a href="#edit-date" onClick={() => setCurrent({id,date,datefin,message})}>
        <h3 className="date">
          {moment(date).format("dddd Do MMMM YYYY")} à{" "}
          {moment(datefin).format("dddd Do MMMM YYYY")}
        </h3>
        <h3>{message}</h3>
      </a>
      <a href="#!" onClick={(e)=>{onDelete(e)}}>
        <i class="fas fa-trash-alt"></i>
      </a>
    </Unit>
  );
};

export default connect(null, { deleteDate, setCurrent })(DateItemAdmin);
