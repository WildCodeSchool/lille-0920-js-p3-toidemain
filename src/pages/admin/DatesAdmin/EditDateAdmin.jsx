import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateDate, AddDate } from "../../../redux/actions/DateActions";
import { ContainerEditDate } from "./style.jsx";

const EditDate = ({ current, updateDate, AddDate }) => {
  const [date, setDate] = useState("");
  const [datefin, setDatefin] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setDate(current.date);
      setDatefin(current.datefin);
    }
  }, [current]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (message === "" || date === "" || datefin === "") {
      alert("Please enter message and date");
    } else {
      const updDate = {
        id: current.id,
        date,
        datefin,
        message,
      };

      updateDate(updDate);

      setMessage("");
      setDate("");
    }
  };

  const onAdd = (e) => {
    e.preventDefault();
    if (message === "" || date === "" || datefin === "") {
      alert("Please enter message and date");
    } else {
      const newAtelier = {
        date,
        datefin,
        message,
      };
      AddDate(newAtelier);

      setMessage("");
      setDate("");
      setDatefin("");
    }
  };

  return (
    <ContainerEditDate>
      <form>
        <h1>Entrez les Infos</h1>

        <input
          type="date"
          name="date"
          placeholder="Date de début"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="date"
          name="datefin"
          placeholder="Date de fin"
          value={datefin}
          onChange={(e) => setDatefin(e.target.value)}
        />

        <input
          type="text"
          name="message"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button onClick={current ? onSubmit : onAdd}>
          {current ? "Mettre à jour" : "Ajouter"}{" "}
        </button>
      </form>
    </ContainerEditDate>
  );
};

const mapStateToProps = (state) => ({ current: state.datesList.current });
export default connect(mapStateToProps, { updateDate, AddDate })(EditDate);
