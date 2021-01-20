import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateDate, AddDate } from '../../../redux/actions/DateActions';

const EditDate = ({ current, updateDate, AddDate }) => {
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setDate(current.date);
    }
  }, [current]);

  const onSubmit = () => {
    if (message === '' || date === '') {
      alert('Please enter message and date');
    } else {
      const updDate = {
        id: current.id,
        date,
        message,
      };

      updateDate(updDate);

      //clear fields
      setMessage('');
      setDate('');
    }
  };

  const onAdd = () => {
    if (message === '' || date === '') {
      alert('Please enter message and date');
    } else {
      const newDate = {
        date,
        message,
      };
      AddDate(newDate);

      alert('Date added');
      //clear fields
      setMessage('');
      setDate('');
    }
  };

  return (
    <div id="edit-date">
      <h2>Enter Infos</h2>
      <div>
        <input type="text" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div>
        <input type="text" name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
      <div>
        <input type="button" value={current ? 'Update' : 'Enter'} onClick={onSubmit} />
        <input type="button" value="ADD" onClick={onAdd} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ current: state.datesList.current });
export default connect(mapStateToProps, { updateDate, AddDate })(EditDate);
