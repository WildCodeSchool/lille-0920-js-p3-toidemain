import React from 'react';
import { connect } from 'react-redux';
import { setCurrent, deleteDate } from '../../../../redux/actions/DateActions';

const DateItemAdmin = ({ info, setCurrent, deleteDate }) => {
  const onDelete = () => {
    deleteDate(info.id);
    alert('Date Deleted');
  };
  return (
    <li>
      <a href="#edit-date" onClick={() => setCurrent(info)}>
        <h3>{info.date}</h3>
        <h3>{info.message}</h3>
      </a>
      <a href="#!" onClick={onDelete}>
        <i class="fas fa-trash-alt"></i>
      </a>
      <br />
    </li>
  );
};

export default connect(null, { deleteDate, setCurrent })(DateItemAdmin);
