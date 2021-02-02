import React from 'react';
import { connect } from 'react-redux';
import { setCurrent, deleteDate } from '../../../redux/actions/DateActions';
import { Unit } from './style';

const DateItemAdmin = ({ id, date, datefin, message, setCurrent, deleteDate }) => {
  const onDelete = () => {
    deleteDate(id);
    alert('Date Deleted');
  };
  return (
    <Unit>
      <a href="#edit-date" onClick={() => setCurrent({ id, date, datefin, message })}>
        <h3>
          {date} à {datefin}
        </h3>
        <h3>{message}</h3>
      </a>
      <a href="#!" onClick={onDelete}>
        <i class="fas fa-trash-alt"></i>
      </a>
    </Unit>
  );
};

export default connect(null, { deleteDate, setCurrent })(DateItemAdmin);
