import React from 'react';
import { connect } from 'react-redux';
import { setCurrent, deleteDate } from '../../../redux/actions/DateActions';
import { Unit } from './style';
import moment from 'moment';
import 'moment/locale/fr';
moment.locale('fr');

const DateItemAdmin = ({ info, setCurrent, deleteDate }) => {
  const onDelete = () => {
    deleteDate(info.id);
    alert('Date Deleted');
  };
  return (
    <Unit>
      <a href="#edit-date" onClick={() => setCurrent(info)}>
        <h3 className="date">
          {moment(info.date).format('dddd Do MMMM YYYY')} à {moment(info.datefin).format('dddd Do MMMM YYYY')}
        </h3>
        <h3>{info.message}</h3>
      </a>
      <a href="#!" onClick={onDelete}>
        <i class="fas fa-trash-alt"></i>
      </a>
    </Unit>
  );
};

export default connect(null, { deleteDate, setCurrent })(DateItemAdmin);
